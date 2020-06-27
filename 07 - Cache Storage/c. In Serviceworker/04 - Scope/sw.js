// European Union Public License version 1.2
// Copyright © 2018 Rick Beerendonk

const cacheName = 'cache4-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll([
        '.',
        'index.html',
        'hyacinth.html',
        'narcissus.html',
        'tulips.html',
        'img/hyacinth.png',
        'img/narcissus.png',
        'img/tulips.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  console.log(event.request.url);

  event.respondWith(
    caches.open(cacheName).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return (
          response ||
          fetch(event.request).then(function (response) {
            cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});
