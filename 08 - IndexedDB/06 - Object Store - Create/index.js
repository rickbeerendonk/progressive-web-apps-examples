// European Union Public License version 1.2
// Copyright © 2018 Rick Beerendonk

const dbname = 'test_database_upgrade';

// Create database

const request1 = window.indexedDB.open(dbname, 1);
request1.onupgradeneeded = function(event) {
  // Create dabase variable
  const db = this.result;
  // Create Object Stores
  db.createObjectStore('players', { keyPath: 'name' });
  db.createObjectStore('grandslams', { autoIncrement: 'true' });
  // Log names of the Object Stores
  document.writeln(
    'Object stores created:',
    JSON.stringify(db.objectStoreNames)
  );
};
request1.onsuccess = function(event) {
  // Close database
  this.result.close();
  // Delete database
  window.indexedDB.deleteDatabase(dbname);
};
