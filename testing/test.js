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

app.get("/User.controler/getAllusers", function (req, res) {
    // res.json(y);
});