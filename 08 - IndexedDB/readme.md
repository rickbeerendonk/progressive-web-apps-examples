# IndexedDB

## Documentation

### Why?

Store larger amounts of data then Web Storage.

### What is it?

* Transactional
* Object-Oriented database
* Asynchronous operations only (syncronous API deprecated)

### How to?

1. Specifiy a database schema
2. Open a connection to your database
3. Retreive and Update data within transactions

## Examples

### Availability

```javascript
if (window.indexedDB) {
    ...
}
```

---

Copyright © 2018 Rick Beerendonk
