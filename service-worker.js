const CACHE_NAME = 'solar-system-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  'https://science.nasa.gov/wp-content/uploads/2023/09/sun-blasting-a-flare-web.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});