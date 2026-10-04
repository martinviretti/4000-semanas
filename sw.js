/* Cache de la app para que funcione offline. Subir VERSION cuando cambie cualquier archivo. */
const VERSION = "semanas-v1";
const FILES = ["./", "index.html", "styles.css", "app.js", "data.js", "manifest.webmanifest",
  "fonts/Inter-var.woff2", "fonts/SpaceGrotesk-var.woff2", "icons/icon-192.png", "icons/icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  // red primero (para ver cambios), cache si no hay conexión
  e.respondWith(
    fetch(e.request).then((r) => {
      const copy = r.clone();
      caches.open(VERSION).then((c) => c.put(e.request, copy));
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
