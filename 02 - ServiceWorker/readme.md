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
