// European Union Public License version 1.2
// Copyright © 2018 Rick Beerendonk

const dbname = 'test_database_delete';
const dbversion = 3; // Must be an integer!

// Create/open and close database

const openRequest = window.indexedDB.open(dbname, dbversion);
openRequest.onsuccess = function(e) {
  database = this.result;
  document.writeln(
    `Database <em>${database.name}</em> version <em>${
      database.version
    }</em> opened successfully.<br>`
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
