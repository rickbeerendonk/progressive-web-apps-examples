# Service Worker

## Specification

* [Published](https://www.w3.org/TR/service-workers/)
* [Nightly](https://w3c.github.io/ServiceWorker/)

## Examples

### Availability

```javascript
if ('serviceWorker' in navigator) {
    ...
}
```

### Registration

#### Initial

```javascript
navigator.serviceWorker.register('sw.js')
    .then(registration => {
        ...
    })
    .catch(error => {
        ...
    });
```

#### Update

```javascript
navigator.serviceWorker.register('sw.js')
    .then(registration => {
        registration.addEventListener('updatefound', () => {
            ...
        });
    });
```

#### Why can registration fail?

1. Not running the application through https (or localhost).
2. Path to the server worker file must be relative to the origin, not to the application root.
So if the app root is ```https://www.demo.org/test``` and the service worker is at ```https://www.demo.org/test/sw.js``` then the path should be ```/test/sw.js``` and not ```/sw.js```.
3. The service worker has a different origin than the application.

### Unregister

```javascript
navigator.serviceWorker.register('sw.js')
    .then(registration => {
        registration.unregister()
        .then(unregistered => {
            ...
        })
        .catch(error => {
            ...
        });
    })
```

---

Copyright © 2018 Rick Beerendonk
