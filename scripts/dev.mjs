import fs from'node:fs';import{spawn}from'node:child_process';
await import('./build.mjs');await import('./serve.mjs');
let timer,running=false;
for(const dir of['source','public'])fs.watch(dir,{recursive:true},()=>{clearTimeout(timer);timer=setTimeout(()=>{if(running)return;running=true;const child=spawn(process.execPath,['scripts/build.mjs'],{stdio:'inherit'});child.on('exit',()=>running=false);},300)});
console.log('Watching source/ and public/. Reload the browser after rebuilds.');
