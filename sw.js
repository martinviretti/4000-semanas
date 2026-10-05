/* Cache de la app para que funcione offline. Al publicar: subir VERSION acá y el ?v= de index.html (styles/app/data). */
const VERSION = "semanas-v8";
const FILES = ["./", "index.html", "styles.css?v=8", "app.js?v=8", "data.js?v=8", "manifest.webmanifest",
  "fonts/Inter-var.woff2", "fonts/SpaceGrotesk-var.woff2", "icons/icon-192.png", "icons/icon-512.png",
  "video/poster_es.jpg", "video/poster_en.jpg"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  // el video se pide por rangos (respuestas 206, no cacheables): directo a la red
  if (e.request.headers.has("range") || url.pathname.endsWith(".mp4")) return;
  // red primero (para ver cambios), cache si no hay conexión
  e.respondWith(
    fetch(e.request).then((r) => {
      if (r.ok && r.status === 200) {
        const copy = r.clone();
        caches.open(VERSION).then((c) => c.put(e.request, copy));
      }
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
