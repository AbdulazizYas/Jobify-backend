const express = require("express");
const app = express();
const db = require("./models");

// const sequelize = new Sequelize("Jobify", "admin", "admin", {
//     host: "127.0.0.1",
//     dialect: "mysql"
// });

// module.exports = sequelize;
// global.sequelize = sequelize;

const jobRoutes = require("./routes/Job.router");
const seekerRoutes = require("./routes/Jobseeker.router");
const companyRoutes = require("./routes/Company.router");

var port = 3000;

//www.jobify.com/
app.get("/", (req, res) => {
    res.json({page: "homePage"});
});

app.get("/login", (req, res) => {
    res.json({page: "login page"});
});

app.get("/sign-up", (req, res) => {
    res.json({page: "sign-up page"});
});

//www.jobify.com/?
app.use("/jobs", jobRoutes);
app.use("/seekers", seekerRoutes);
app.use("/companies", companyRoutes);

app.use((req, res) => {
    res.sendStatus(404);
});

db.sequelize
    .sync()
    .then((req) => {
        app.listen(port, function () {
            console.log(`Server listening on port http://127.0.0.1:${port}!`);
        });
    })
    .catch((err) => console.log(err));