const CACHE_NAME = "normvpk-static-v1";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./assets/css/styles.css",
  "./assets/js/main.js",
  "./assets/js/team.js",
  "./assets/img/fonVPK.webp",
  "./assets/img/gerb.webp",
  "./news-data.json",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const isStatic = /\.(?:css|js|json|webp|png|jpg|jpeg|svg|gif)$/i.test(url.pathname);
  if (isStatic) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request)
          .then((response) => {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            return response;
          })
          .catch(() => caches.match("./assets/img/fonVPK.webp"));
      })
    );
    return;
  }

  if (url.pathname === "/" || url.pathname.endsWith(".html")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match("./index.html")))
    );
  }
});
