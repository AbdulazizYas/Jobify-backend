// const sqlite3 = require("sqlite3");
// // const db = new sqlite3.Database("./mock.db", sqlite3.OPEN_READWRITE, (err) => {
// //     if(err) return console.error(err.message);
// //     console.log("connection succeddful");
// // });

// const express = require("express");
// //const { INSERT } = require("sequelize/types/query-types");
// const db = require("../models");
// const app = express();
// app.use(express.json());

// new sqlite3.Database('./mcu.db', sqlite3.OPEN_READWRITE, (err) => {
//     if (err && err.code == "SQLITE_CANTOPEN") {
//         createDatabase();
//         return;
//         } else if (err) {
//             console.log("Getting error " + err);
//             exit(1);
//     }
//     runQueries(db);
// });

var sqlite3 = require('sqlite3');
let db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
        createDatabase();
        return;
    } else if (err) {
        console.log("Getting error " + err);
        exit(1);
    }

});

function createDatabase() {
    var newdb = new sqlite3.Database('./database.db', (err) => {
        if (err) {
            console.log("Getting error " + err);
            exit(1);
        }
        createTables(newdb);
    });
}

// const y = JSON.stringify(x)

// app.post("/User.controler/create", function (req, res) {
//     res.json(y);
// });

//     db.run(sql, x, function (err, result) {
//         if (err) {
//             res.send(Json.stringify(err));
//         }
//         else {
//             res.send(SJSON);
//         }
//     });
//     db.close();

//     var jobModel = require("../controllers/Job.controler");
// const db = require('../models');
var sqlite3 = require('sqlite3');

db = new sqlite3.Database('database.db');
// Insert data into the table
db.run("CREATE TABLE IF NOT EXISTS Job (job_id INTEGER PRIMARY KEY AUTOINCREMENT, jobName VARCHAR(20) NOT NULL, location VARCHAR(20) NOT NULL,datePosted VARCHAR(30) NOT NULL,locationType VARCHAR(30) NOT NULL,entryLevel VARCHAR(30) NOT NULL,jobType VARCHAR(30) NOT NULL)");

db.run("INSERT INTO Job (jobName,location,datePosted,locationType,entryLevel,jobType) VALUES ('drubky','ee','w','w','w','we')");
db.run("INSERT INTO Job (jobName,location,datePosted,locationType,entryLevel,jobType) VALUES ('drubasasky','ee','aaw','w','w','we')");

db.all(`SELECT * FROM Job `, [], (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach(rows => {
        console.log(rows);
    })
});
