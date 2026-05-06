const CACHE_NAME = 'karangtaruna-cache-v3';
const urlsToCache = [
  './',
  './index.html',
  './styles.css?v=3',
  './app.js?v=3',
  './icon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      await cache.addAll(urlsToCache);
    } catch (error) {
      console.warn('Cache install gagal, lanjutkan tanpa semua asset:', error);
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames.map(name => (name !== CACHE_NAME ? caches.delete(name) : Promise.resolve()))
    );
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const requestUrl = new URL(event.request.url);
    const isSameOrigin = requestUrl.origin === self.location.origin;
    const forceNetwork = isSameOrigin && ['document', 'script', 'style'].includes(event.request.destination);

    if (forceNetwork) {
      try {
        const networkResponse = await fetch(event.request, { cache: 'no-store' });
        if (networkResponse && networkResponse.ok) {
          cache.put(event.request, networkResponse.clone()).catch(() => {});
        }
        return networkResponse;
      } catch (error) {
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) return cachedResponse;
        return new Response('', { status: 503, statusText: 'Service Unavailable' });
      }
    }

    try {
      const networkResponse = await fetch(event.request);
      if (isSameOrigin && networkResponse && networkResponse.ok) {
        cache.put(event.request, networkResponse.clone()).catch(() => {});
      }
      return networkResponse;
    } catch (error) {
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) return cachedResponse;
      return new Response('', { status: 503, statusText: 'Service Unavailable' });
    }
  })());
});
