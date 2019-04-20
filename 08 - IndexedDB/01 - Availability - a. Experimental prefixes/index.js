// European Union Public License version 1.2
// Copyright © 2018 Rick Beerendonk

window.indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;

window.IDBTransaction =
  window.IDBTransaction ||
  window.webkitIDBTransaction ||
  window.msIDBTransaction;
window.IDBKeyRange =
  window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if (window.indexedDB) {
  document.writeln('IndexedDB is available in this browser.');
} else {
  document.writeln('No IndexedDB support in this browser.');
}
