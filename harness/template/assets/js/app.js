// App entry. Keep it dependency-free. Build only what docs/ROADMAP.md marks NOW.
(function () {
  'use strict';

  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
})();
