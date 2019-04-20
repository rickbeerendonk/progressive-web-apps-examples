// European Union Public License version 1.2
// Copyright © 2018 Rick Beerendonk

const dbname = 'test_database_open-and-close';
const request = window.indexedDB.open(dbname);
request.onsuccess = function(e) {
  // this = request
  const database = this.result;
  document.writeln(
    `Database <em>${database.name}</em> successfully opened (version: ${
      database.version
    }).<br>`
  );

  database.onclose = function(e) {
    // new in v2.0
    // Online fires if the connection closes abnormally.
    debugger;
    document.writeln(`Database ${database.name} closed.<br>`);
  };

  // Close normally: Doesn't fire onclose event.
  // Returns immediately, but will close in a separate thread.
  database.close();
  document.writeln(`Database ${database.name} closing.<br>`);
};
