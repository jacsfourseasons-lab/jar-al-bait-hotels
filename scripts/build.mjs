import fs from 'node:fs/promises';
import path from 'node:path';
import { load } from 'cheerio';
import { localizeDomToArabic, translateText, toArRoute } from './i18n-ar.mjs';
import { CORE_META } from './update-meta-seo.mjs';

const routes = JSON.parse(await fs.readFile('routes.json', 'utf8'));
const distRoot = path.resolve('dist');
const keepPages = new Set([
  ...routes.map((r) => path.resolve('dist', '.' + r.localRoute, 'index.html')),
  ...routes.map((r) => path.resolve('dist', '.' + toArRoute(r.localRoute), 'index.html'))
]);

async function pruneStaleIndexes(dir) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    const p = path.resolve(dir, e.name);
    if (!p.startsWith(distRoot + path.sep)) throw Error('Unexpected generated path');
    if (e.isDirectory()) await pruneStaleIndexes(p);
    else if (e.isFile() && e.name === 'index.html' && !keepPages.has(p)) await fs.unlink(p);
  }
}

await pruneStaleIndexes(path.resolve('dist/en'));
await pruneStaleIndexes(path.resolve('dist/ar'));
await fs.mkdir('dist/assets', { recursive: true });

// A hard link avoids duplicating large unchanged media on the local Windows drive.
// Export/ZIP tools still see ordinary complete files in dist/.
for (const f of await fs.readdir('public')) {
  if (f !== 'assets') await fs.cp('public/' + f, 'dist/' + f, { recursive: true });
}
for (const f of await fs.readdir('public/assets')) {
  const source = path.resolve('public/assets', f);
  const dest = path.resolve('dist/assets', f);
  try {
    const a = await fs.stat(source);
    const b = await fs.stat(dest);
    if (a.ino === b.ino) continue;
    await fs.unlink(dest);
  } catch {}
  try {
    await fs.link(source, dest);
  } catch {
    await fs.copyFile(source, dest);
  }
}

await fs.copyFile('node_modules/swiper/swiper-bundle.min.mjs', 'dist/swiper.mjs');
await fs.cp('node_modules/swiper/shared', 'dist/shared', { recursive: true });
await fs.cp('node_modules/swiper/modules', 'dist/modules', { recursive: true });

const header = await fs.readFile('source/components/header.html', 'utf8');
let footer = '';
try {
  footer = await fs.readFile('source/components/footer.html', 'utf8');
} catch {}

const assets = JSON.parse(await fs.readFile('asset-manifest.json', 'utf8'));
const styles = assets
  .filter((a) => a.kind === 'stylesheet' && a.localPath)
  .map((a) => `<link rel="stylesheet" href="${a.localPath}">`)
  .join('');

const escape = (s) =>
  (s || '').replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

function getArabicMeta(r) {
  if (CORE_META[r.localRoute]) {
    return {
      titleAr: CORE_META[r.localRoute].titleAr,
      descAr: CORE_META[r.localRoute].descAr
    };
  }
  const suffix = ' | فنادق جار البيت'; // 18 chars -> leaves 37 chars for topic
  const rawTopic = (r.title || '').replace(/\s*\|.*$/, '').trim();
  let topicAr = translateText(rawTopic);
  if (topicAr === rawTopic && /[A-Za-z]/.test(topicAr)) {
    topicAr = 'خدمات وحلول الضيافة الفندقية';
  }
  const maxTopicLen = 55 - suffix.length;
  if (topicAr.length > maxTopicLen) {
    const cut = topicAr.slice(0, maxTopicLen);
    const lastSpace = cut.lastIndexOf(' ');
    topicAr = (lastSpace > 10 ? cut.slice(0, lastSpace) : cut).trim();
  }
  const titleAr = `${topicAr}${suffix}`;
  let descAr = `استكشف ${topicAr} مع مجموعة فنادق جار البيت، شريككم الموثوق لإدارة وتشغيل الفنادق وخدمات الضيافة المتكاملة في المملكة العربية السعودية.`;
  if (descAr.length > 155) {
    descAr = `تعرّف على ${topicAr} مع مجموعة فنادق جار البيت، الرائدة في إدارة وتشغيل الفنادق والضيافة في المملكة العربية السعودية.`;
  }
  if (descAr.length > 155) {
    descAr = descAr.slice(0, 154).replace(/\s+\S*$/, '') + '.';
  }
  return { titleAr, descAr };
}

const indexEn = [];
const indexAr = [];

const socialFallbackImgs = [
  '/assets/jab-hotel-jar-al-bait.webp',
  '/assets/jab-hotel-oz-park.webp',
  '/assets/jab-hotel-al-jawhara.webp',
  '/assets/jab-portfolio-overview.webp',
  '/assets/jab-services-hero.webp',
  '/assets/jab-companies-hero.webp',
  '/assets/jab-invest-hero.webp',
  '/assets/jab-invest-overview.webp',
  '/assets/jab-about-hero.webp',
  '/assets/jab-about-vision.webp',
  '/assets/jab-about-mission.webp',
  '/assets/jab-invest-tab-01.webp',
  '/assets/jab-invest-tab-02.webp',
  '/assets/jab-invest-tab-03.webp',
  '/assets/jab-invest-partners-bg.webp',
  '/assets/jab-hotel-jar-al-bait.webp'
];

for (const r of routes.filter((r) => !r.redirectTo)) {
  const enRoute = r.localRoute;
  const arRoute = toArRoute(enRoute);
  let socialIdx = 0;
  const rawPage = (await fs.readFile('source/pages/' + r.file, 'utf8'))
    .replace(/https:\/\/scontent-[^"]+/g, () => socialFallbackImgs[socialIdx++ % socialFallbackImgs.length])
    .replaceAll('/assets/1c01e9e3-RSG-Social-Avatar.svg', '/assets/jab-logo-emblem.png')
    .replaceAll('alt="RSG Social"', 'alt="Jar Al Bait Hotel Group"')
    .replaceAll('<p>@theredsea</p>', '<p dir="ltr">@jaralbait</p>')
    .replace(/\s+href="https:\/\/(?:www\.)?(?:linkedin\.com\/company\/red-sea-global\/?|youtube\.com\/channel\/UCMo1fSbA3iOhvvC8OP0IYNA\/?|instagram\.com\/redseaglobal\/?|x\.com\/RedSeaGlobal\/?|twitter\.com\/RedSeaGlobal\/?|facebook\.com\/RedSeaGlobal\/?)"(?:\s+target="_blank")?(?:\s+rel="noopener noreferrer")?/gi, '');

  // Customize language switcher URLs for this specific route
  const routeHeaderEn = header
    .replace('class="header"', `class="${r.headerClass || 'header'}"`)
    .replaceAll('hreflang="en" lang="en" rel="alternate" href="/en/"', `hreflang="en" lang="en" rel="alternate" href="${enRoute}"`)
    .replaceAll('hreflang="ar" lang="ar" rel="alternate" href="/ar/"', `hreflang="ar" lang="ar" rel="alternate" href="${arRoute}"`);

  const bodyEn = rawPage.replace('<!--HEADER-->', routeHeaderEn).replace('<!--FOOTER-->', footer);

  const contentEn = load(rawPage);
  contentEn('.rsg-newsletter,.footer,.header').remove();
  const searchableTextEn = contentEn.text().replace(/\s+/g, ' ').trim();

  const htmlEn = `<!doctype html><html lang="en" dir="ltr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escape(r.title)}</title><meta name="description" content="${escape(r.description)}"><meta property="og:title" content="${escape(r.title)}"><meta property="og:description" content="${escape(r.description)}"><meta name="twitter:title" content="${escape(r.title)}"><meta name="twitter:description" content="${escape(r.description)}"><link rel="alternate" hreflang="en" href="${enRoute}"><link rel="alternate" hreflang="ar" href="${arRoute}"><link rel="icon" type="image/png" href="/assets/jab-logo-emblem.png">${styles}<link rel="stylesheet" href="/app.css"><script src="/config.js"></script><script>addEventListener('error',e=>document.documentElement.dataset.runtimeError=e.message);addEventListener('unhandledrejection',e=>document.documentElement.dataset.runtimeError=String(e.reason));</script><script type="module" src="/app.js"></script></head><body class="${escape(r.bodyClass)}"><a class="skip-link" href="#page-content">Skip to content</a><div id="page-content">${bodyEn}</div></body></html>`;

  const outEn = path.join('dist', enRoute, 'index.html');
  await fs.mkdir(path.dirname(outEn), { recursive: true });
  await fs.writeFile(outEn, htmlEn);

  indexEn.push({
    title: r.title.replace(/\s*\|.*$/, ''),
    route: enRoute,
    description: r.description,
    content: searchableTextEn
  });

  // Build Arabic (/ar/...) version
  const $ar = load(bodyEn, null, false);

  // Switch active language indicator in header to Arabic and link English back to enRoute
  $ar('.cmp-languagenavigation').each((_, navEl) => {
    const nav = $ar(navEl);
    nav.find('.cmp-languagenavigation__items-active').text('عربي');
    const enItem = nav.find('.cmp-languagenavigation__item--langcode-en');
    const arItem = nav.find('.cmp-languagenavigation__item--langcode-ar');
    enItem.removeClass('cmp-languagenavigation__item--active mod--active');
    enItem.find('a').attr('href', enRoute);
    arItem.addClass('cmp-languagenavigation__item--active mod--active');
    arItem.find('a').attr('href', arRoute);
  });

  localizeDomToArabic($ar);

  const bodyAr = $ar.html();
  const { titleAr, descAr } = getArabicMeta(r);

  const contentAr = load(bodyAr);
  contentAr('.rsg-newsletter,.footer,.header').remove();
  const searchableTextAr = contentAr.text().replace(/\s+/g, ' ').trim();

  const htmlAr = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escape(titleAr)}</title><meta name="description" content="${escape(descAr)}"><meta property="og:title" content="${escape(titleAr)}"><meta property="og:description" content="${escape(descAr)}"><meta name="twitter:title" content="${escape(titleAr)}"><meta name="twitter:description" content="${escape(descAr)}"><link rel="alternate" hreflang="en" href="${enRoute}"><link rel="alternate" hreflang="ar" href="${arRoute}"><link rel="icon" type="image/png" href="/assets/jab-logo-emblem.png">${styles}<link rel="stylesheet" href="/app.css"><script src="/config.js"></script><script>addEventListener('error',e=>document.documentElement.dataset.runtimeError=e.message);addEventListener('unhandledrejection',e=>document.documentElement.dataset.runtimeError=String(e.reason));</script><script type="module" src="/app.js"></script></head><body class="${escape(r.bodyClass)}"><a class="skip-link" href="#page-content">انتقل إلى المحتوى الرئيسي</a><div id="page-content">${bodyAr}</div></body></html>`;

  const outAr = path.join('dist', arRoute, 'index.html');
  await fs.mkdir(path.dirname(outAr), { recursive: true });
  await fs.writeFile(outAr, htmlAr);

  indexAr.push({
    title: titleAr.replace(/\s*\|.*$/, ''),
    route: arRoute,
    description: descAr,
    content: searchableTextAr
  });
}

for (const r of routes.filter((r) => r.redirectTo)) {
  const outEn = path.join('dist', r.localRoute, 'index.html');
  await fs.mkdir(path.dirname(outEn), { recursive: true });
  await fs.writeFile(
    outEn,
    `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="refresh" content="0;url=${r.redirectTo}"><title>Continue to Jar Al Bait Hotel Group</title></head><body><a href="${r.redirectTo}">Continue</a></body></html>`
  );

  const arRoute = toArRoute(r.localRoute);
  const arTarget = toArRoute(r.redirectTo);
  const outAr = path.join('dist', arRoute, 'index.html');
  await fs.mkdir(path.dirname(outAr), { recursive: true });
  await fs.writeFile(
    outAr,
    `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><meta http-equiv="refresh" content="0;url=${arTarget}"><title>المتابعة إلى مجموعة فنادق جار البيت</title></head><body><a href="${arTarget}">متابعة</a></body></html>`
  );
}

await fs.writeFile('dist/search-index.json', JSON.stringify(indexEn));
await fs.writeFile('dist/search-index-ar.json', JSON.stringify(indexAr));
await fs.writeFile(
  'dist/index.html',
  '<!doctype html><html><head><meta http-equiv="refresh" content="0;url=/en/"></head><body><a href="/en/">Jar Al Bait Hotel Management &amp; Operations Group</a></body></html>'
);
console.log(`Built ${routes.length} EN routes and ${routes.length} AR routes in dist/`);
