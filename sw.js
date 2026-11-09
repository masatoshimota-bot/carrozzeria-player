/* carrozzeria U2-PLUS drive-v1: old-display compatibility + reliable asset updates */
const CACHE='carrozzeria-u2plus-mic-drive-v5-pty-info-line';
const ASSETS=['./','./index.html','./faceplate.jpg','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.indexOf('carrozzeria-u2plus-mic-')===0&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
 const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 if(req.mode==='navigate'){event.respondWith(fetch(req).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return response}).catch(()=>caches.match(req).then(r=>r||caches.match('./index.html'))));return}
 event.respondWith(caches.match(req).then(hit=>hit||fetch(req)));
});
