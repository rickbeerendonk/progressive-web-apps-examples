# IndexedDB

## Specification

* https://www.w3.org/TR/IndexedDB-2/

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

### Security concerns

#### Cross-directory attacks
Databases are access restricted by the host, not by pathname. So if a host is shared with other applications, the database is shared as well.

## Examples

### Availability

```javascript
if (window.indexedDB) {
    ...
}
```

### Factory - Open en Delete Database

To create or open a database, use the ```window.indexedDB``` factory's ```open()``` method.

```javascript
const openRequest = window.indexedDB.open('my-database');
openRequest.onsuccess = function (e) {
    database = this.result;
    console.log(`Database ${database.name}</em> created/opened successfully.`);
};
```

#### Factory - Open specific version

To open a specific version of a database, use the ```window.indexedDB``` factory's ```open()``` method with the version number as a second parameter, the version number. The version number must be an integer, not a float (don't use version 1.1 f.e.).

```javascript
const openRequest = window.indexedDB.open('my-database', 3);
openRequest.onsuccess = function (e) {
    database = this.result;
    console.log(`Database ${database.name} version ${database.version} opened successfully.`);
};
```

---

Copyright © 2018 Rick Beerendonk
