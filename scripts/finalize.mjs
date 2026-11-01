import fs from 'node:fs/promises';import path from 'node:path';import{load}from'cheerio';import crypto from'node:crypto';
const routes=JSON.parse(await fs.readFile('routes.json','utf8'));
const aliases={
 '/en/testing/demo-dec/':'/en/',
 '/en/experiences/water-sports/':'/en/subsidiaries/sports-entertainment-company/',
 '/en/media-center/news/the-red-sea-becomes-first-ever-destinatiion-in-saudi-arabia-to-achieve-earthcheck-sustainable-destinations-certification/':'/en/media-center/news/the-red-sea-becomes-first-ever-destination-in-saudi-arabia-to-achieve-earthcheck-sustainable-destinations-certification/'
};
const external=routes.filter(r=>r.status==='external-microsite').map(r=>({route:r.localRoute,destination:r.externalDestination}));
for(const r of routes){
 if(aliases[r.localRoute]){r.status='redirect';r.type='redirect';r.redirectTo=aliases[r.localRoute];r.verification='Source redirect/broken-link behavior documented; local English equivalent linked';}
 const file='source/pages/'+r.file;const $=load(await fs.readFile(file,'utf8'),null,false);
 // Embedded third-party stories remain intentional external destinations, never iframed replicas.
 if($('.rsg-iframe').length){const raw=await fs.readFile(path.resolve('../../work/reference',r.file),'utf8');const match=raw.match(/<iframe[^>]*src="([^"]+)"/);if(match){r.status='external-microsite';r.externalDestination=match[1];r.verification='Source embeds a separately hosted story; retained as an explicit external destination';external.push({route:r.localRoute,destination:match[1]});$('.rsg-iframe').replaceWith(`<section class="external-story"><h1>${r.title}</h1><p>This interactive story is hosted on the original website.</p><div class="button"><a class="cmp-button" href="${match[1]}" target="_blank" rel="noopener noreferrer">Open interactive story ↗</a></div></section>`);}}
 if($('.external-story').length&&r.externalDestination&&!r.redirectTo){r.status=r.externalDestination.includes('onetrust.com')?'external-service':'external-microsite';if(r.status==='external-service'){$('.external-story h1').text('Privacy Center');$('.external-story p').text('Continue to the original privacy request service.');$('.external-story .cmp-button').text('Open Privacy Center ↗');}}
 $('a[href]').each((_,e)=>{let href=$(e).attr('href'),base=href.split('?')[0].replace(/\/$/,'')+'/';if(aliases[base])$(e).attr('href',aliases[base]);if(href.startsWith('?page=')){$(e).attr('href',r.sourceUrl+href).attr('target','_blank').attr('rel','noopener noreferrer external').attr('title','Open the original archive — historical pages are outside this local snapshot');}
 if(href==='#'){const text=$(e).text().trim().toLowerCase();if(text.includes('privacy'))$(e).attr('href','/en/privacy-policy/');else if(text.includes('terms'))$(e).attr('href','/en/terms-and-conditions/');else if(text==='go home')$(e).attr('href','/en/');else if($(e).closest('rsg-pagination').length){$(e).removeAttr('href').attr('role','link').attr('aria-disabled','true').attr('tabindex','-1');}else $(e).attr('href','/en/');}});
 // The regenerative tourism feature had an incorrect full-card destination in the source.
 $('.rsg-card__wrapper').each((_,e)=>{if($(e).find('h2').text().trim()==='Regenerative Tourism')$(e).find('.rsg-card__fullLink').attr('href','/en/regenerative-tourism/');});
 await fs.writeFile(file,$.html());
}
await fs.writeFile('routes.json',JSON.stringify(routes,null,2));await fs.writeFile('external-destinations.json',JSON.stringify(external,null,2));
console.log(`Finalized ${routes.length} routes; ${external.length} external stories; ${Object.keys(aliases).length} redirects`);
