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
let db= new sqlite3.Database('./mcu.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
        createDatabase();
        return;
        } else if (err) {
            console.log("Getting error " + err);
            exit(1);
    }
    runQueries(db);
});

function createDatabase() {
    var newdb = new sqlite3.Database('mcu.db', (err) => {
        if (err) {
            console.log("Getting error " + err);
            exit(1);
        }
        createTables(newdb);
    });
}

const x = {
    userName: "sniperxx",
    password: "123",
    email: "d70me@gmail.com",
    type: "Company",
    companyName: "xxx",
    location: "dammam"
}

const y = JSON.stringify(x)

app.post("/User.controler/create", function (req, res) {
    res.json(y);
});

    db.run(sql, x, function (err, result) {
        if (err) {
            res.send(Json.stringify(err));
        }
        else {
            res.send(SJSON);
        }
    });
    db.close();

    var jobModel = require("../controllers/Job.controler");
    console.log(jobModel.getAlljobs);