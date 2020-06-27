// European Union Public License version 1.2
// Copyright © 2018 Rick Beerendonk

const dbname = 'test_database_initialize';
const request = window.indexedDB.open(dbname);
request.onupgradeneeded = function (e) {
  document.writeln(
    `New database version: ${e.newVersion} (old version: ${e.oldVersion}).`
  );
};
request.onsuccess = function () {
  // Close database
  this.result.close();
  // Delete database
  window.indexedDB.deleteDatabase(dbname);
};
