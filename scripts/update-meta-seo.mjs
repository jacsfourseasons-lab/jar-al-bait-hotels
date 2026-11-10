import fs from 'node:fs/promises';

const CORE_META = {
  '/en/': {
    titleEn: 'Jar Al Bait Hotel Group | Saudi Hospitality & Hotels',
    descEn: 'Jar Al Bait Hotel Group delivers premier hotel management, operations, and pilgrim accommodation across Makkah, Al Qunfudhah, and Saudi Arabia.',
    titleAr: 'مجموعة فنادق جار البيت | الضيافة والفنادق بالسعودية',
    descAr: 'تقدم مجموعة فنادق جار البيت خدمات إدارة وتشغيل الفنادق والضيافة المتكاملة وإسكان المعتمرين والزوار في مكة المكرمة والقنفذة والمملكة العربية السعودية.'
  },
  '/en/about-us/': {
    titleEn: 'About Us | Jar Al Bait Hotel Management & Operations',
    descEn: 'Learn about Jar Al Bait Hotel Group, our leadership, values, hospitality track record since 2010, and commitment to Saudi Vision 2030 excellence.',
    titleAr: 'من نحن | مجموعة جار البيت لإدارة وتشغيل الفنادق',
    descAr: 'تعرّف على مجموعة فنادق جار البيت، قيادتنا، قيمنا، وسجلنا التشغيلي الحافل منذ عام 2010 في خدمة ضيوف الرحمن ومواكبة مستهدفات رؤية السعودية 2030.'
  },
  '/en/services/': {
    titleEn: 'Hospitality & Hotel Services | Jar Al Bait Hotel Group',
    descEn: 'Explore Jar Al Bait Hotel Group services including hotel management, operations, central reservations, catering, transport, and Umrah hospitality.',
    titleAr: 'خدماتنا الفندقية المتكاملة | مجموعة فنادق جار البيت',
    descAr: 'استكشف خدمات مجموعة فنادق جار البيت في إدارة وتشغيل الفنادق، والحجوزات المركزية، والإعاشة والتموين، والنقل، وحلول ضيافة وإسكان المعتمرين والحجاج.'
  },
  '/en/subsidiaries/': {
    titleEn: 'Our Companies & Ventures | Jar Al Bait Hotel Group',
    descEn: 'Discover Jar Al Bait Hotel Group companies including Oz for Solutions, Tilal Al Zaitoon, Diwan Mada, and Tilal Al Jaouf across Saudi Arabia.',
    titleAr: 'شركاتنا ومشاريعنا المتنوعة | مجموعة فنادق جار البيت',
    descAr: 'اكتشف شركات مجموعة فنادق جار البيت ومنها أوز للحلول، ومصنع تلال الزيتون، وشركة ديوان مدى، وتلال الجوف عبر قطاعات الضيافة والتقنية والغذاء بالمملكة.'
  },
  '/en/portfolio/': {
    titleEn: 'Our Hotel Portfolio in KSA | Jar Al Bait Hotel Group',
    descEn: 'Explore the hotel portfolio of Jar Al Bait Hotel Group across Makkah and Al Qunfudhah, including Jar Al Bait Hotel, Oz Park, and Al Jawhara Hotel.',
    titleAr: 'محفظتنا الفندقية بالمملكة | مجموعة فنادق جار البيت',
    descAr: 'تعرّف على المحفظة الفندقية لمجموعة فنادق جار البيت في مكة المكرمة والقنفذة، بما في ذلك فندق جار البيت وفندق أوز بارك وفندق الجوهرة لخدمة الضيوف.'
  },
  '/en/investment/': {
    titleEn: 'Investment & Partnerships | Jar Al Bait Hotel Group',
    descEn: 'Partner with Jar Al Bait Hotel Group through five flexible hotel operating, leasing, revenue-sharing, and hospitality investment models in KSA.',
    titleAr: 'الاستثمار والشراكات الفندقية | مجموعة فنادق جار البيت',
    descAr: 'تعاون مع مجموعة فنادق جار البيت عبر خمسة نماذج مرنة للتشغيل الفندقي والتأجير والمشاركة في الإيرادات والاستثمار المشترك في المملكة العربية السعودية.'
  },
  '/en/media-center/': {
    titleEn: 'Latest News & Hospitality Blog | Jar Al Bait Hotels',
    descEn: 'Read the latest news, Makkah and Al Qunfudhah hotel guides, and Saudi Vision 2030 hospitality insights from Jar Al Bait Hotel Group in KSA.',
    titleAr: 'آخر الأخبار ومدونة الضيافة | مجموعة فنادق جار البيت',
    descAr: 'تابع آخر الأخبار ومقالات الضيافة السعودية وأدلة فنادق مكة المكرمة والقنفذة ورؤى تشغيل الفنادق وفق رؤية 2030 من مجموعة فنادق جار البيت بالمملكة.'
  },
  '/en/contact-us/': {
    titleEn: 'Contact Us & Hotel Enquiries | Jar Al Bait Hotel Group',
    descEn: 'Contact Jar Al Bait Hotel Group for hotel bookings, Umrah group accommodation, property management services, and strategic partnerships in KSA.',
    titleAr: 'تواصل معنا واستفسارات الحجز | مجموعة فنادق جار البيت',
    descAr: 'تواصل مع مجموعة فنادق جار البيت لحجوزات الفنادق، وإسكان مجموعات العمرة والحج، وخدمات إدارة وتشغيل الفنادق، وبناء الشراكات الاستثمارية في المملكة.'
  },
  '/en/leadership/': {
    titleEn: 'Executive Leadership Team | Jar Al Bait Hotel Group',
    descEn: 'Meet the leadership team at Jar Al Bait Hotel Group driving hospitality operations, hotel asset growth, and service excellence in Saudi Arabia.',
    titleAr: 'القيادة التنفيذية والإدارة | مجموعة فنادق جار البيت',
    descAr: 'تعرّف على فريق القيادة في مجموعة فنادق جار البيت الذي يقود تطوير العمليات الفندقية وتنمية الأصول والارتقاء بتجربة الضيوف في المملكة العربية السعودية.'
  },
  '/en/search/': {
    titleEn: 'Search Hotels & Services | Jar Al Bait Hotel Group',
    descEn: 'Search Jar Al Bait Hotel Group for hotels in Makkah and Al Qunfudhah, hospitality management services, investment models, and latest KSA news.',
    titleAr: 'البحث في الفنادق والخدمات | مجموعة فنادق جار البيت',
    descAr: 'ابحث في موقع مجموعة فنادق جار البيت لاستكشاف فنادقنا في مكة المكرمة والقنفذة، وخدمات إدارة الفنادق، ونماذج الاستثمار، وآخر أخبار الضيافة بالسعودية.'
  },
  '/en/terms-and-conditions/': {
    titleEn: 'Terms & Conditions | Jar Al Bait Hotel Group KSA',
    descEn: 'Read the website terms and conditions of Jar Al Bait Hotel Group governing access to our hospitality platforms and hotel services in Saudi Arabia.',
    titleAr: 'الشروط والأحكام القانونية | مجموعة فنادق جار البيت',
    descAr: 'اطلع على شروط وأحكام استخدام المنصات الرقمية والخدمات الفندقية المقدمة من مجموعة فنادق جار البيت لعملائها وضيوفها في المملكة العربية السعودية.'
  },
  '/en/privacy-policy/': {
    titleEn: 'Privacy Policy & Data Care | Jar Al Bait Hotel Group',
    descEn: 'Learn how Jar Al Bait Hotel Group collects, protects, and manages your personal data and guest information across our Saudi hospitality platforms.',
    titleAr: 'سياسة الخصوصية وحماية البيانات | فنادق جار البيت',
    descAr: 'تعرّف على سياسة الخصوصية المعتمدة لدى مجموعة فنادق جار البيت وكيفية جمع وحماية ومعالجة البيانات الشخصية ومعلومات الضيوف في المملكة العربية السعودية.'
  },
  '/en/privacy-center/': {
    titleEn: 'Privacy Center & Requests | Jar Al Bait Hotel Group',
    descEn: 'Access the Jar Al Bait Hotel Group Privacy Center to manage your data preferences and learn how we protect guest information in Saudi Arabia.',
    titleAr: 'مركز الخصوصية وطلبات البيانات | فنادق جار البيت',
    descAr: 'تفضل بزيارة مركز الخصوصية التابع لمجموعة فنادق جار البيت لإدارة تفضيلات بياناتك الشخصية والتعرف على معايير حماية معلومات الضيوف في المملكة.'
  },
  '/en/awards/': {
    titleEn: 'Awards & Recognition | Jar Al Bait Hotel Group KSA',
    descEn: 'Explore the hospitality achievements, operational milestones, and industry recognition earned by Jar Al Bait Hotel Group across Saudi Arabia.',
    titleAr: 'الجوائز والإنجازات الفندقية | مجموعة فنادق جار البيت',
    descAr: 'استكشف الإنجازات الفندقية، والنجاحات التشغيلية، وشهادات التقدير التي حققتها مجموعة فنادق جار البيت في قطاع الضيافة بالمملكة العربية السعودية.'
  },
  '/en/careers/': {
    titleEn: 'Hospitality Careers in KSA | Jar Al Bait Hotel Group',
    descEn: 'Join Jar Al Bait Hotel Group and build your hospitality career in hotel management, guest operations, and reservations across Saudi Arabia.',
    titleAr: 'الوظائف والفرص المهنية | مجموعة فنادق جار البيت',
    descAr: 'انضم إلى فريق مجموعة فنادق جار البيت وابنِ مسيرتك المهنية في مجالات إدارة وتشغيل الفنادق وخدمة الضيوف والحجوزات في المملكة العربية السعودية.'
  },
  '/en/governance/': {
    titleEn: 'Corporate Governance | Jar Al Bait Hotel Group KSA',
    descEn: 'Discover how Jar Al Bait Hotel Group upholds corporate governance, transparency, operational accountability, and quality across Saudi Arabia.',
    titleAr: 'الحوكمة المؤسسية والشفافية | مجموعة فنادق جار البيت',
    descAr: 'تعرّف على منظومة الحوكمة المؤسسية والشفافية والمسؤولية التشغيلية ومعايير الجودة المعتمدة لدى مجموعة فنادق جار البيت في المملكة العربية السعودية.'
  },
  '/en/partnerships/': {
    titleEn: 'Strategic Partnerships | Jar Al Bait Hotel Group KSA',
    descEn: 'Build long-term hospitality and commercial partnerships with Jar Al Bait Hotel Group across Makkah, Al Qunfudhah, Jeddah, and Riyadh in KSA.',
    titleAr: 'الشراكات الاستراتيجية | مجموعة فنادق جار البيت',
    descAr: 'ابنِ شراكات فندقية وتجارية طويلة الأمد مع مجموعة فنادق جار البيت في مكة المكرمة والقنفذة وجدة والرياض ومختلف مناطق المملكة العربية السعودية.'
  },
  '/en/media-center/smart-hospitality-technology-central-reservations-saudi-hotels/': {
    titleEn: 'Smart Hospitality & Booking KSA | Jar Al Bait Hotels',
    descEn: 'Discover how Jar Al Bait Hotel Group combines central reservations, digital hospitality solutions, and guest care across Makkah and Al Qunfudhah in KSA.',
    titleAr: 'الضيافة الذكية والحجوزات المركزية | فنادق جار البيت',
    descAr: 'اكتشف كيف تجمع مجموعة فنادق جار البيت بين أنظمة الحجوزات المركزية والحلول التقنية الفندقية وخدمة الضيوف في مكة المكرمة والقنفذة بالمملكة.'
  },
  '/en/media-center/makkah-hotel-accommodation-al-aziziyah-jar-al-bait/': {
    titleEn: 'Makkah Al Aziziyah Hotel Guide | Jar Al Bait Hotels',
    descEn: 'Stay at Jar Al Bait Hotel in Al Aziziyah, Makkah. Jar Al Bait Hotel Group offers spacious rooms, family suites, and Umrah pilgrim hospitality.',
    titleAr: 'فندق جار البيت بالعزيزية مكة | مجموعة فنادق جار البيت',
    descAr: 'استمتع بإقامة مريحة في فندق جار البيت بحي العزيزية في مكة المكرمة. توفر مجموعة فنادق جار البيت غرفاً رحبة وأجنحة عائلية وخدمات متكاملة للمعتمرين.'
  },
  '/en/media-center/al-qunfudhah-red-sea-hotels-oz-park-al-jawhara/': {
    titleEn: 'Al Qunfudhah Red Sea Hotels | Jar Al Bait Hotel Group',
    descEn: 'Discover Oz Park Hotel and Al Jawhara Hotel in Al Qunfudhah by Jar Al Bait Hotel Group, offering coastal comfort for families and business guests.',
    titleAr: 'فنادق القنفذة أوز بارك والجوهرة | فنادق جار البيت',
    descAr: 'اكتشف فندق أوز بارك وفندق الجوهرة في محافظة القنفذة على البحر الأحمر بإدارة مجموعة فنادق جار البيت، لإقامة مريحة للعائلات والسياح وزوار الأعمال.'
  },
  '/en/media-center/hotel-management-operations-saudi-vision-2030/': {
    titleEn: 'Saudi Hotel Management & Ops | Jar Al Bait Hotels',
    descEn: 'See how Jar Al Bait Hotel Group elevates hotel management, guest satisfaction, and asset performance across Saudi Arabia under Vision 2030.',
    titleAr: 'إدارة وتشغيل الفنادق بالسعودية | فنادق جار البيت',
    descAr: 'تعرّف على منهجية مجموعة فنادق جار البيت في إدارة وتشغيل الفنادق وتعظيم العوائد والارتقاء بتجربة الضيوف في المملكة العربية السعودية وفق رؤية 2030.'
  },
  '/en/media-center/umrah-hajj-group-accommodation-solutions-saudi-arabia/': {
    titleEn: 'Umrah & Group Accommodation KSA | Jar Al Bait Hotels',
    descEn: 'Coordinate seamless Umrah, Hajj, and corporate group accommodation, catering, and transport in Makkah with Jar Al Bait Hotel Group in Saudi Arabia.',
    titleAr: 'إيواء مجموعات العمرة والحج | مجموعة فنادق جار البيت',
    descAr: 'تقدم مجموعة فنادق جار البيت حلول إيواء متكاملة لمجموعات العمرة والحج والشركات في مكة المكرمة تشمل الغرف الفندقية والإعاشة والنقل والخدمات اللوجستية.'
  },
  '/en/media-center/hospitality-investment-strategic-hotel-partnerships-saudi-arabia/': {
    titleEn: 'Saudi Hospitality Investment | Jar Al Bait Hotels',
    descEn: 'Explore hospitality investment and five flexible hotel operating models in Saudi Arabia with Jar Al Bait Hotel Group for sustainable owner returns.',
    titleAr: 'الاستثمار والشراكات الفندقية | فنادق جار البيت',
    descAr: 'استكشف فرص الاستثمار الفندقي ونماذج الشراكة والتشغيل الخمسة المرنة لدى مجموعة فنادق جار البيت لتحقيق عوائد مستدامة لملاك الفنادق في السعودية.'
  }
};

function makeFallbackMetaEn(routeObj) {
  // Derive a clean topic from the route or existing title, and format within <= 55 chars (title) and <= 155 chars (desc) with Jar Al Bait
  const suffix = ' | Jar Al Bait Hotels'; // 21 chars -> leaves 34 chars for topic!
  let topic = (routeObj.title || '')
    .replace(/\|.*$/g, '')
    .replace(/Red Sea Global('s)?/gi, 'Jar Al Bait')
    .replace(/\bRSG\b/g, 'Jar Al Bait')
    .replace(/The Red Sea/gi, 'Saudi Hospitality')
    .replace(/AMAALA/gi, 'Saudi Hospitality')
    .replace(/\s+/g, ' ')
    .trim();

  if (!topic || topic.toLowerCase() === 'jar al bait') {
    const slug = routeObj.localRoute.split('/').filter(Boolean).pop() || 'Hospitality';
    topic = slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }

  // If topic already contains Jar Al Bait, we can use shorter suffix if needed
  const maxTopicLen = 55 - suffix.length; // 34 chars
  if (topic.length > maxTopicLen) {
    // Trim cleanly at word boundary
    const cut = topic.slice(0, maxTopicLen);
    const lastSpace = cut.lastIndexOf(' ');
    topic = (lastSpace > 14 ? cut.slice(0, lastSpace) : cut).replace(/[,:;–—-]+$/, '').trim();
  }
  const titleEn = `${topic}${suffix}`;

  const baseDesc = `Explore ${topic} with Jar Al Bait Hotel Group, delivering trusted hotel management, operations, and guest accommodation across Saudi Arabia.`;
  let descEn = baseDesc.replace(/\s+/g, ' ').trim();
  if (descEn.length > 155) {
    descEn = `Discover ${topic} with Jar Al Bait Hotel Group, your trusted partner for hotel management and hospitality across Saudi Arabia.`;
  }
  if (descEn.length > 155) {
    descEn = descEn.slice(0, 152).replace(/\s+\S*$/, '') + '.';
  }
  return { titleEn, descEn };
}

import { fileURLToPath } from 'node:url';
import { load } from 'cheerio';

export { CORE_META, makeFallbackMetaEn };

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const routes = JSON.parse(await fs.readFile('routes.json', 'utf8'));
  if (process.argv.includes('--verify')) {
    let errors = 0;
    let checked = 0;
    for (const r of routes) {
      if (r.redirectTo) continue;
      for (const lang of ['en', 'ar']) {
        const routePath = lang === 'ar' ? r.localRoute.replace(/^\/en\//, '/ar/') : r.localRoute;
        const htmlPath = `dist${routePath}index.html`;
        const html = await fs.readFile(htmlPath, 'utf8');
        const $ = load(html);
        const title = $('title').text().trim();
        const desc = ($('meta[name="description"]').attr('content') || '').trim();
        const ogTitle = ($('meta[property="og:title"]').attr('content') || '').trim();
        const ogDesc = ($('meta[property="og:description"]').attr('content') || '').trim();
        const hasCompany = lang === 'en' ? /Jar Al Bait/i.test(title) && /Jar Al Bait/i.test(desc) : /جار البيت/.test(title) && /جار البيت/.test(desc);
        const hasRsg = /Red Sea Global/i.test(title) || /Red Sea Global/i.test(desc);
        checked++;
        if (
          !title ||
          title.length > 55 ||
          !desc ||
          desc.length > 155 ||
          !hasCompany ||
          hasRsg ||
          ogTitle !== title ||
          ogDesc !== desc
        ) {
          errors++;
          console.error('FAIL:', routePath, {
            title,
            titleLen: title.length,
            desc,
            descLen: desc.length,
            hasCompany,
            hasRsg,
            ogTitleMatch: ogTitle === title,
            ogDescMatch: ogDesc === desc
          });
        }
      }
    }
    console.log(`Verified ${checked} built pages (EN + AR). Errors: ${errors}`);
    for (const [k, v] of Object.entries(CORE_META)) {
      console.log(
        `${k} => EN Title (${v.titleEn.length}): "${v.titleEn}" | EN Desc (${v.descEn.length}): "${v.descEn}"`
      );
      console.log(
        `   AR => AR Title (${v.titleAr.length}): "${v.titleAr}" | AR Desc (${v.descAr.length}): "${v.descAr}"`
      );
    }
    if (errors > 0) process.exit(1);
  } else {
    for (const r of routes) {
      if (r.redirectTo) continue;
      if (CORE_META[r.localRoute]) {
        r.title = CORE_META[r.localRoute].titleEn;
        r.description = CORE_META[r.localRoute].descEn;
      } else {
        const { titleEn, descEn } = makeFallbackMetaEn(r);
        r.title = titleEn;
        r.description = descEn;
      }
    }

    await fs.writeFile('routes.json', JSON.stringify(routes, null, 2) + '\n', 'utf8');
    console.log('Updated routes.json with <=55 char titles and <=155 char descriptions including Jar Al Bait.');
  }
}
