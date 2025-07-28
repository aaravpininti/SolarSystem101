const CACHE_NAME = 'solar-system-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/images/mercury.png',
  '/images/venus.png',
  '/images/earth.png',
  '/images/mars.png',
  '/images/jupiter.png',
  '/images/saturn.png',
  '/images/uranus.png',
  '/images/neptune.png',
  '/images/pluto.png',
  '/images/eris.png',
  '/images/ceres.png',
  '/images/makemake.png',
  '/images/haumea.png',
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
