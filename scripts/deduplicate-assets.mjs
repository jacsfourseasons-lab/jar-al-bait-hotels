import fs from'node:fs/promises';import path from'node:path';import crypto from'node:crypto';
const assetRoot=path.resolve('public/assets'),buildRoot=path.resolve('dist/assets');
const seen=new Map(),mapping=new Map();let bytes=0;
for(const name of await fs.readdir(assetRoot)){const p=path.join(assetRoot,name),data=await fs.readFile(p),hash=crypto.createHash('sha256').update(data).digest('hex');if(seen.has(hash)){mapping.set('/assets/'+name,'/assets/'+seen.get(hash));bytes+=data.length;}else seen.set(hash,name);}
const replace=text=>text.replace(/\/assets\/[A-Za-z0-9._-]+/g,p=>mapping.get(p)||p);
for(const dir of['public','public/assets','source/components','source/pages'])for(const f of await fs.readdir(dir))if(/\.(html|css|js|json)$/.test(f)){const p=path.join(dir,f);await fs.writeFile(p,replace(await fs.readFile(p,'utf8')));}
for(const f of['asset-manifest.json','asset-limitations.json'])await fs.writeFile(f,replace(await fs.readFile(f,'utf8')));
for(const [old]of mapping){const name=old.slice('/assets/'.length);for(const root of[assetRoot,buildRoot]){const p=path.resolve(root,name);if(path.dirname(p)!==root)throw Error('Unexpected asset path');try{await fs.unlink(p)}catch{}}}
console.log(`Deduplicated ${mapping.size} byte-identical asset files; recovered ${(bytes/1e6).toFixed(1)} MB per copy`);
