import fs from 'node:fs/promises';import path from 'node:path';import{load}from'cheerio';
const routes=JSON.parse(await fs.readFile('routes.json','utf8')),known=new Set(routes.map(r=>r.localRoute.toLowerCase().replace(/\/$/,'')));
const brokenAssets=[],unimplemented=new Map(),dead=[],runtime=[];
for(const r of routes){const html=await fs.readFile(path.join('dist',r.localRoute,'index.html'),'utf8');const $=load(html);
 if($('script[src]').toArray().some(e=>!$(e).attr('src').startsWith('/')))runtime.push(r.localRoute);
 for(const e of $('img[src],source[src],video[poster],link[rel=stylesheet]')){const u=$(e).attr('src')||$(e).attr('poster')||$(e).attr('href');if(u?.startsWith('/'))try{await fs.access('dist'+u)}catch{brokenAssets.push({page:r.localRoute,asset:u})}}
 for(const e of $('a[href]')){const u=$(e).attr('href');if(u==='#')dead.push({page:r.localRoute,text:$(e).text().trim()});if(u.startsWith('/en/')){const url=new URL(u,'http://local'),key=url.pathname.replace(/\/$/,'');if(!known.has(key.toLowerCase()))unimplemented.set(url.pathname,{sourceUrl:'https://www.redseaglobal.com'+url.pathname,localRoute:url.pathname,text:$(e).text().trim(),from:r.localRoute});}}
}
const report={routes:routes.length,brokenLocalAssets:brokenAssets,unimplementedInternalLinks:[...unimplemented.values()],deadHashLinks:dead,remoteScriptPages:runtime};
await fs.writeFile('verification.json',JSON.stringify(report,null,2));console.log(JSON.stringify({routes:routes.length,brokenLocalAssets:brokenAssets.length,additionalLinkedRoutes:unimplemented.size,deadHashLinks:dead.length,remoteScriptPages:runtime.length},null,2));
if(brokenAssets.length||runtime.length)process.exitCode=1;
