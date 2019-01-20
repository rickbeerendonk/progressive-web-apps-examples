// European Union Public License version 1.2
// Copyright © 2018 Rick Beerendonk

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        throw error;
      })
  );
});
