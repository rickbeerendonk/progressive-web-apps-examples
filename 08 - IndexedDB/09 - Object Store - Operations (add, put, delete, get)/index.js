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
  players.createIndex('year', 'year', { unique: false });

  //debugger;
};
request1.onsuccess = function(event) {
  // Start a new transaction
  let db = this.result;

  let tx1 = db.transaction(['players'], 'readwrite');
  let players = tx1.objectStore('players');

  // Object Store: Add
  players.add({ name: 'Rafael Nadal', year: 1986, grandslamsTitles: 16 });
  players.add({
    name: 'Roger Federer',
    year: 1981,
    grandslamsTitles: 20
  });
  players.add({
    name: 'Serena Williams',
    year: 1981,
    grandslamsTitles: 23
  });
  players.add({
    name: 'Lleyton Hewitt',
    year: 1981,
    grandslamsTitles: 2
  });
  document.writeln('Players added.<br />');

  // Object Store: Put (update data)
  players.put({ name: 'Rafael Nadal', year: 1986, grandslamsTitles: 17 });
  document.writeln('Player updated.<br />');

  // Object Store: Delete
  players.delete('Lleyton Hewitt');
  document.writeln('Player deleted.<br />');

  let tx2 = db.transaction('players', 'readonly');
  let players2 = tx2.objectStore('players');
  let index = players2.index('year');

  // Object Store: Get
  let player = players2.get('Rafael Nadal');
  player.onsuccess = function() {
    document.writeln(
      'Get Rafael Nadal:',
      JSON.stringify(player.result),
      '.<br />'
    );
  };

  // Query the data
  let players1981 = index.getAll(1981);

  players1981.onsuccess = function() {
    document.writeln(
      'Players born in 1981: ',
      JSON.stringify(players1981.result),
      '.<br />'
    );
  };

  // Close the db when the transaction is done
  db.close();
  // Delete database
  window.indexedDB.deleteDatabase(dbname);
};
