const sqlite3 = require("sqlite3").verbose();
// const db = new sqlite3.Database("./mock.db", sqlite3.OPEN_READWRITE, (err) => {
//     if(err) return console.error(err.message);
//     console.log("connection succeddful");
// });

const express = require("express");
const app = express();
app.use(express.json());

const x = {
    userName: "sniperxx",
    password: "123",
    email: "d70me@gmail.com",
    type: "Company",
    companyName: "xxx",
    location: "dammam"
}

const y = JSON.stringify(x)

app.post("../User.controler/create", function (req, res) {
    res.json(y);
});

app.get("/User.controler/getAllUser", function (req, res) {
    console.log(res);
});

