// European Union Public License version 1.2
// Copyright © 2018 Rick Beerendonk

self.addEventListener('fetch', function (event) {
  console.log('[fetch] Handling ', event.request.url);

  event.respondWith(
    fetch(event.request)
      .then(function (response) {
        console.log('[fetch] Response:', response);
        return response;
      })
      .catch(function (error) {
        console.error('[fetch] Failed:', error);
        throw error;
      })
  );
});
