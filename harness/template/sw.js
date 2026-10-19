// Cache-first app shell. Bump VERSION on every release.
const VERSION = '{{SLUG}}-v1';
const SHELL = ['./', 'index.html', 'assets/css/main.css', 'assets/js/app.js', 'assets/js/i18n.js', 'assets/icon.svg', 'manifest.webmanifest', 'assets/fonts/ibm-plex-sans-latin-400-normal.woff2', 'assets/fonts/ibm-plex-sans-latin-500-normal.woff2'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request)));
});
