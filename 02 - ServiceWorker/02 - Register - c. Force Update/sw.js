// European Union Public License version 1.2
// Copyright © 2018 Rick Beerendonk

// Instructions:
// 1. Run the website once
// 2. Uncomment the last line in the service worker file.
// 3. Run the website again and observe the update.

// console.log('-- Service Worker updated file --');

self.addEventListener('install', event => {
  console.log('[install] Skip waiting for the new ServiceWorker.');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('[activate] Activating ServiceWorker.');
 
  console.log('[activate] Claiming this ServiceWorker.');
  event.waitUntil(self.clients.claim());
});