import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {load} from 'cheerio';
const root=process.cwd(), work=path.resolve(root,'../../work/reference');
await fs.mkdir('source/pages',{recursive:true}); await fs.mkdir('source/components',{recursive:true}); await fs.mkdir('public/assets',{recursive:true});
let manifest=[]; try {manifest=JSON.parse(await fs.readFile('asset-manifest.json','utf8'));} catch {}
const remote='https://www.redseaglobal.com';
const allowed=u=>u.startsWith(remote+'/content/')||u.startsWith(remote+'/etc.clientlibs/');
function filename(url){let n=decodeURIComponent(new URL(url).pathname.split('/').pop()).replace(/[^a-zA-Z0-9._-]/g,'-'); return crypto.createHash('sha1').update(url).digest('hex').slice(0,8)+'-'+n;}
for(const f of await fs.readdir(work)) if(f.startsWith('bundle')&&f.endsWith('.json')){
 const b=JSON.parse(await fs.readFile(path.join(work,f),'utf8'));
 for(const a of b.assets) if(allowed(a.url)&&!manifest.some(x=>x.sourceUrl===a.url&&x.localPath)){
  manifest=manifest.filter(x=>x.sourceUrl!==a.url);
  const localPath='/assets/'+filename(a.url); await fs.copyFile(a.path,'public'+localPath); manifest.push({sourceUrl:a.url,localPath,kind:a.kind,replacement:null});
 }
}
const lookup=u=>manifest.find(a=>a.sourceUrl===u)?.localPath;
const pending=new Set();
function local(u,base=remote){if(!u||u.startsWith('data:')||u.startsWith('#'))return u;let abs;try{abs=new URL(u,base).href;}catch{return u;} if(allowed(abs)){if(lookup(abs))return lookup(abs);pending.add(abs);return abs;}return u;}
let routes=[]; try{routes=JSON.parse(await fs.readFile('routes.json','utf8'));}catch{}
for(const file of await fs.readdir(work)) if(file.endsWith('.html')){
 if(process.argv.includes('--new-only')){try{await fs.access('source/pages/'+file);continue;}catch{}}
 const raw=await fs.readFile(path.join(work,file),'utf8'); const $=load(raw); if(!$('.root').length)continue;
 const route=file==='home.html'?'/en/':('/'+file.replace(/\.html$/,'').replaceAll('__','/')+'/');
 $('script,noscript,iframe,canvas,.mapboxgl-control-container,.mapboxgl-canary,.swiper-notification,#codex-browser-sidebar-comments-root,.g-recaptcha,#ot-sdk-cookie-policy').remove();
 // Keep the CMS's semantic, editable component structure, without production integrations or runtime snapshots.
 $('*').each((_,e)=>{for(const a of Object.keys(e.attribs||{})) if(a.startsWith('on')||/^data-(cmp|tracking|mapbox|resource|sitekey|recaptcha|cf-|asset)/.test(a))$(e).removeAttr(a);});
 $('.header').removeClass('mod--compact'); $('.header__mainNav').removeAttr('style');
 $('.mod--open,.mod--active-button').removeClass('mod--open mod--active-button');
 $('.rsg-map').removeClass('mod--active'); $('.map-box').removeClass('map-box--active map-box--expanded');
 $('.map-box__map').empty();
 $('.swiper').each((_,e)=>{const c=($(e).attr('class')||'').split(' ').filter(x=>!/^swiper-(initialized|horizontal|vertical|fade|creative|cards|3d|watch-progress|backface-hidden)$/.test(x));$(e).attr('class',c.join(' ')).removeAttr('style');});
 $('.swiper-wrapper,.swiper-slide').removeAttr('style');
 $('.swiper-slide').removeAttr('aria-hidden tabindex').removeClass('swiper-slide-active swiper-slide-next swiper-slide-prev swiper-slide-visible swiper-slide-fully-visible');
 $('.swiper-pagination').empty(); $('[disabled]').not('input,select,textarea').removeAttr('disabled aria-disabled tabindex');
 $('.rsg-hero-section__indexes__item').removeClass('rsg-hero-section__indexes__item--active');
 $('.rsg-hero-section__indexes__item__progress-bar__progress').removeAttr('style');
 $('[src],[poster],[style],[data-background-image]').each((_,e)=>{for(const attr of ['src','poster','data-background-image']) if($(e).attr(attr))$(e).attr(attr,local($(e).attr(attr)));let s=$(e).attr('style');if(s)$(e).attr('style',s.replace(/url\(["']?([^)'"\s]+)["']?\)/g,(_,u)=>`url("${local(u)}")`));});
 $('[srcset]').removeAttr('srcset');
 $('img').each((_,e)=>{if(!$(e).attr('alt')||$(e).attr('alt')==='undefined')$(e).attr('alt','');$(e).attr('decoding','async');});
 $('video').attr('preload','metadata');
 $('a[href]').each((_,e)=>{let href=$(e).attr('href');if(href.startsWith(remote+'/en/'))href=href.slice(remote.length);href=href.replace('/.html','/');if(href.startsWith('/ar/'))href=remote+href;$(e).attr('href',href);if(/^https?:/.test(href))$(e).attr('rel','noopener noreferrer');});
 $('form').removeAttr('action data-url');
 $('[data-map-config]').each((_,e)=>{try{const config=JSON.parse($(e).attr('data-map-config'));for(const p of config.items||[]) if(p.poi_image)p.poi_image=local(p.poi_image);$(e).attr('data-map-config',JSON.stringify(config));}catch{}});
 // Shared shell: page-specific interiors remain distinct.
 const header=$('.header').first(); const headerClass=header.attr('class')||'header'; const footer=$('[class*="cmp-experiencefragment--footer"]').first();
 if(file==='home.html'){
  await fs.writeFile('source/components/header.html',$.html(header));
  if(footer.length)await fs.writeFile('source/components/footer.html',$.html(footer));
 }
 header.replaceWith('<!--HEADER-->'); if(footer.length)footer.replaceWith('<!--FOOTER-->');
 const body=$.html($('.root').first());
 const title=$('title').text(); const meta={route,title,description:$('meta[name=description]').attr('content')||'',bodyClass:$('body').attr('class')||'',headerClass,file:file.replace('.html','')+'.html'};
 await fs.writeFile('source/pages/'+meta.file,body);
 const prior=routes.find(x=>x.localRoute===route);
 const row={sourceUrl:remote+route,localRoute:route,type:route==='/en/'?'homepage':route.includes('/news/')?'article':route.includes('/subsidiaries/')?'subsidiary':route.includes('/projects/')?'project':'content',status:'implemented',verification:prior?.verification||'DOM acquired; browser verification pending',...meta};
 if(prior)routes[routes.indexOf(prior)]=row;else routes.push(row);
}
for(const a of manifest.filter(x=>x.kind==='stylesheet')){
 const css=await fs.readFile('public'+a.localPath,'utf8');
 await fs.writeFile('public'+a.localPath,css.replace(/url\(["']?([^)'"\s]+)["']?\)/g,(m,u)=>u.startsWith('data:')?m:`url("${local(u,a.sourceUrl)}")`));
}
// Only public design files are eligible. Failed assets remain explicit in the manifest.
const queue=[...pending]; let index=0;
await Promise.all(Array.from({length:6},async()=>{while(index<queue.length){const u=queue[index++]; if(lookup(u))continue;try{const r=await fetch(u,{signal:AbortSignal.timeout(30000)});if(!r.ok||r.status===202||r.headers.get('content-type')?.includes('text/html'))throw Error('unavailable '+r.status);let p='/assets/'+filename(u);await fs.writeFile('public'+p,new Uint8Array(await r.arrayBuffer()));manifest.push({sourceUrl:u,localPath:p,kind:/woff/.test(u)?'font':'image',replacement:null});}catch(e){manifest.push({sourceUrl:u,localPath:null,kind:'asset',replacement:null,error:e.message});}}}));
// Replace URLs resolved by follow-up acquisition.
for(const dir of ['source/pages','source/components','public/assets'])for(const f of await fs.readdir(dir))if(/\.(html|css)$/.test(f)){let t=await fs.readFile(dir+'/'+f,'utf8');for(const a of manifest)if(a.localPath)t=t.replaceAll(a.sourceUrl,a.localPath);await fs.writeFile(dir+'/'+f,t);}
manifest=[...new Map(manifest.map(a=>[a.sourceUrl,a])).values()];
await fs.writeFile('asset-manifest.json',JSON.stringify(manifest,null,2)); await fs.writeFile('routes.json',JSON.stringify(routes,null,2));
console.log(`${routes.length} pages; ${manifest.filter(a=>a.localPath).length} local assets; ${manifest.filter(a=>!a.localPath).length} unresolved assets`);
