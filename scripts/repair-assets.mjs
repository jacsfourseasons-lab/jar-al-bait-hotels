import fs from'node:fs/promises';import{load}from'cheerio';
const manifest=JSON.parse(await fs.readFile('asset-manifest.json','utf8')),routes=JSON.parse(await fs.readFile('routes.json','utf8'));
const normalize=u=>decodeURIComponent(u.split('/').pop()).toLowerCase().replace(/\.(jpeg|jpg|png|webp|svg)$/,'').replace(/[^a-z0-9]/g,'');
const valid=manifest.filter(a=>a.localPath);const missing=manifest.filter(a=>!a.localPath);
for(const a of missing){const exact=valid.find(b=>normalize(b.sourceUrl)===normalize(a.sourceUrl));if(exact){a.localPath=exact.localPath;a.replacement={type:'accessible rendition of same named original asset',sourceUrl:exact.sourceUrl};}}
const cache=new Map();for(const r of routes)cache.set(r.localRoute,load(await fs.readFile('source/pages/'+r.file,'utf8'),null,false));
for(const r of routes){const $=cache.get(r.localRoute);
 $('img[src]').each((_,e)=>{const url=$(e).attr('src'),a=manifest.find(x=>x.sourceUrl===url);if(!a||a.localPath)return;const card=$(e).closest('.rsg-card__wrapper'),href=card.find('a[href^="/en/"]').first().attr('href'),target=cache.get(href?.replace(/\/$/,'')+'/');if(target){const image=target('.rsg-hero-section img[src^="/assets/"],.rsg-media-center-heading img[src^="/assets/"],img[src^="/assets/"]').first().attr('src');if(image){a.localPath=image;a.replacement={type:'same article feature-image fallback for unavailable legacy thumbnail',route:href};}}});
 $('video').each((_,e)=>{const sources=$(e).find('source[src]');const failed=sources.toArray().filter(s=>manifest.some(a=>a.sourceUrl===$(s).attr('src')&&!a.localPath));if(!failed.length)return;const image=$(e).closest('.rsg-hero-section-item').find('img[src^="/assets/"]').first().attr('src')||$('img[src^="/assets/"]').first().attr('src');if(image){$(e).attr('poster',image);for(const s of failed){const a=manifest.find(a=>a.sourceUrl===$(s).attr('src'));a.replacement={type:'still image from the same page; original video unavailable',poster:image,page:r.localRoute};$(s).remove();}$(e).removeAttr('autoplay').attr('preload','none');}});
 $('track').filter((_,e)=>$(e).attr('src')?.includes('test%20subtitles')).remove();
 const replacements=new Map(manifest.filter(a=>a.localPath).map(a=>[a.sourceUrl,a.localPath]));
 $('[src],[poster]').each((_,e)=>{for(const key of['src','poster']){const value=$(e).attr(key);if(replacements.has(value))$(e).attr(key,replacements.get(value));}});
 await fs.writeFile('source/pages/'+r.file,$.html());
}
const icons={
 'icon-play-circle.svg':'<circle cx="12" cy="12" r="10"/><path d="m10 7 7 5-7 5z"/>',
 'icon-volume-max.svg':'<path d="M3 9h4l5-5v16l-5-5H3zM16 8a6 6 0 0 1 0 8M19 5a10 10 0 0 1 0 14"/>',
 'icon-maximize.svg':'<path d="M3 9V3h6M15 3h6v6M21 15v6h-6M9 21H3v-6"/>',
 'icon-minimize.svg':'<path d="M3 9h6V3M15 3v6h6M21 15h-6v6M9 21v-6H3"/>'};
for(const a of manifest.filter(a=>!a.localPath)){const name=a.sourceUrl.split('/').pop();if(icons[name]){a.localPath='/assets/'+name;a.replacement={type:'local SVG icon reconstruction'};await fs.writeFile('public'+a.localPath,`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.4">${icons[name]}</svg>`);}if(name==='%23clip'){a.kind='fragment';a.replacement={type:'internal SVG fragment; not a downloadable asset'};}}
for(const dir of['source/components','source/pages','public/assets'])for(const f of await fs.readdir(dir))if(/\.(html|css)$/.test(f)){let text=await fs.readFile(dir+'/'+f,'utf8');for(const a of manifest)if(a.localPath)text=text.replaceAll(a.sourceUrl,a.localPath);text=text.replaceAll('https://www.redseaglobal.com/etc.clientlibs/redsea-rsc/clientlibs/clientlib-site/css/%23clip','#clip');await fs.writeFile(dir+'/'+f,text);}
await fs.writeFile('asset-manifest.json',JSON.stringify(manifest,null,2));
await fs.writeFile('asset-limitations.json',JSON.stringify(manifest.filter(a=>a.replacement||(!a.localPath&&a.kind!=='fragment')),null,2));
console.log(`${manifest.filter(a=>a.replacement).length} recorded asset repairs/fallbacks; ${manifest.filter(a=>!a.localPath&&a.kind!=='fragment').length} original files remain unavailable`);
