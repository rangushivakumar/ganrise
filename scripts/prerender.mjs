import { createServer, loadEnv } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const env=loadEnv('production',process.cwd(),'');
if(env.VITE_SITE_URL) process.env.VITE_SITE_URL=env.VITE_SITE_URL;
const siteUrl=(process.env.VITE_SITE_URL||'https://www.example.com').replace(/\/+$/,'');
const server=await createServer({optimizeDeps:{noDiscovery:true,include:[]},server:{middlewareMode:true},appType:'custom'});
try {
 const [{default:App},{PAGE_META,getSeoData}]=await Promise.all([server.ssrLoadModule('/src/App.jsx'),server.ssrLoadModule('/src/seo.js')]);
 const routes=Object.keys(PAGE_META); let shell=await readFile('dist/index.html','utf8');
 const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
 for(const route of routes){
  const seo=getSeoData(route),url=route==='/'?`${siteUrl}/`:`${siteUrl}${route}`;
  const html=renderToString(React.createElement(StaticRouter,{location:route},React.createElement(App)));
  const graph=seo.graph.map(item=>item['@type']==='Organization'?{...item,url:siteUrl,'@id':`${siteUrl}/#organization`,logo:`${siteUrl}/images/ganrise-transparent-logo.png`}:item);
  const tags=`<title>${escape(seo.title)}</title><meta name="description" content="${escape(seo.description)}"/><link rel="canonical" href="${escape(url)}"/><meta property="og:title" content="${escape(seo.title)}"/><meta property="og:description" content="${escape(seo.description)}"/><meta property="og:image" content="${escape(`${siteUrl}/og-image.png`)}"/><meta property="og:url" content="${escape(url)}"/><meta property="og:type" content="website"/><meta property="og:site_name" content="GANRISE Consulting"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${escape(seo.title)}"/><meta name="twitter:description" content="${escape(seo.description)}"/><meta name="twitter:image" content="${escape(`${siteUrl}/og-image.png`)}"/><script id="ganrise-jsonld" type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':graph})}</script>`;
  const output=shell.replace(/<title>[\s\S]*?<\/title>/,'').replace(/<meta name="description"[^>]*>/,'').replace(/<link rel="canonical"[^>]*>/,'').replace(/<meta (?:property="og:[^"]+"|name="twitter:[^"]+")[^>]*>/g,'').replace('</head>',`${tags}</head>`).replace('<div id="root"></div>',`<div id="root">${html}</div>`);
  const destination=route==='/'?'dist/index.html':path.join('dist',route.slice(1),'index.html'); await mkdir(path.dirname(destination),{recursive:true}); await writeFile(destination,output);
 }
 const locs=routes.map(route=>`  <url><loc>${siteUrl}${route==='/'?'/':route}</loc></url>`).join('\n');
 await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${locs}\n</urlset>\n`);
 await writeFile('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
 console.log(`Pre-rendered ${routes.length} routes for ${siteUrl}${env.VITE_SITE_URL?'':' (placeholder domain)'}`);
} finally { await server.close(); }
