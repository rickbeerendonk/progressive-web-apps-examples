// European Union Public License version 1.2
// Copyright © 2018 Rick Beerendonk

const dbname = 'test_database_upgrade';

// Create database

const request1 = window.indexedDB.open(dbname, 1);
request1.onupgradeneeded = function(event) {
  // Create dabase variable
  const db = this.result;
  // Create Object Stores
  let players = db.createObjectStore('players', { keyPath: 'name' });
  let grandslams = db.createObjectStore('grandslams', {
    autoIncrement: 'true'
  });
  // Create Index
  players.createIndex('year', 'yearOfBirth', { unique: false });
  // Log names of the Indexs
  document.writeln('Players indexes:', JSON.stringify(players.indexNames));

  //debugger;
};
request1.onsuccess = function(event) {
  // Close database
  this.result.close();
  // Delete database
  window.indexedDB.deleteDatabase(dbname);
};
