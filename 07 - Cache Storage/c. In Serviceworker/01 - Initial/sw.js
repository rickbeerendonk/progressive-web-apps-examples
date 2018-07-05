// Mozilla Public License Version 2.0
// Copyright © 2018 Rick Beerendonk

const cacheName = 'cache1-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        '.',
        'index.html',
        'flowers.json',
        'img/tulips.png'
      ]);

      // Remark: We don't use the cached responses, so offline nothing is visible!
    })
  );
});
