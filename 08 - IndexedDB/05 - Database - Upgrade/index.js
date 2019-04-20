// European Union Public License version 1.2
// Copyright © 2018 Rick Beerendonk

const dbname = 'test_database_onVersionChange';

// Create database

const request1 = window.indexedDB.open(dbname, 1);
request1.onsuccess = function(e) {
  // Close database
  this.result.close();
};

// Upgrade database

const request2 = window.indexedDB.open(dbname, 2);
request2.onupgradeneeded = function(e) {
  document.writeln(
    `Database will upgrade from version ${e.oldVersion} to version ${
      e.newVersion
    }.`
  );
  // Upgrade database
  document.writeln(
    'The update commands can be defined in the onupgradeneeded event.'
  );
};
request2.onsuccess = function(e) {
  // Close database
  this.result.close();
  // Delete database
  window.indexedDB.deleteDatabase(dbname);
};
