// European Union Public License version 1.2
// Copyright © 2018 Rick Beerendonk

self.addEventListener('notificationclose', function(event) {
  var notification = event.notification;
  var primaryKey = notification.data.primaryKey;
  console.log('Closed notification: ' + primaryKey);
});

self.addEventListener('notificationclick', function(event) {
  var notification = event.notification;
  var action = event.action;
  if (action === 'stop') {
    notification.close();
  } else {
    clients.openWindow('http://www.oblicum.com');
  }
});
