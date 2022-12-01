module.exports = (sequelize, DataTypes) => {
  var sqlite3 = require('sqlite3');

  var db = new sqlite3.Database('database.db');

  db.serialize(function () {
    // Create a table
    db.run("CREATE TABLE IF NOT EXISTS administrator (admin_id INTEGER PRIMARY KEY IDENTITY(1,1) , firstName VARCHAR(20) NOT NULL, lastName VARCHAR(20) NOT NULL,userName VARCHAR(30) NOT NULL, FOREIGN KEY (userName) REFERENCES User(userName)");
    // Insert data into the table

    // Query data from the table

  });
};