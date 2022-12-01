module.exports = (sequelize, DataTypes) => {
    var sqlite3 = require('sqlite3');

    var db = new sqlite3.Database('database.db');

    db.serialize(function () {
        // Create a table
        db.run("CREATE TABLE IF NOT EXISTS Job (job_id INTEGER PRIMARY KEY IDENTITY(1,1) , jobName VARCHAR(20) NOT NULL, location VARCHAR(20) NOT NULL,datePosted VARCHAR(30) NOT NULL,locationType VARCHAR(30) NOT NULL,entryLevel,jobType VARCHAR(30) NOT NULL");
        // Insert data into the table

        // Query data from the table

    });
};