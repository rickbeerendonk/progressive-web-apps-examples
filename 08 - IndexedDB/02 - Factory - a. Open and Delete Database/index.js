// European Union Public License version 1.2
// Copyright © 2018 Rick Beerendonk

const dbname = 'test_database_delete';

// Create/open and close database

const openRequest = window.indexedDB.open(dbname);
openRequest.onsuccess = function(e) {
  database = this.result;
  document.writeln(
    `Database <em>${database.name}</em> created/opened successfully.<br>`
  );

  database.close();
};

// Delete database

const deleteRequest = window.indexedDB.deleteDatabase(dbname);
deleteRequest.onerror = function(event) {
  document.writeln('Error deleting database.<br>');
};
deleteRequest.onsuccess = function(event) {
  document.writeln('Database deleted successfully.<br>');
};
