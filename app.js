const express = require("express");
const app = express();

const userRoutes = require("./routes/User.router");

app.listen(3000);

app.use(userRoutes)

app.use((req, res) => {
    res.status(404);
});

//https://www.youtube.com/watch?v=zW_tZR0Ir3Q&t=466s&ab_channel=TheNetNinja

//3000 = local host, we will change it later
//nodemon app - not working for some reason
// app.listen(3000);

// app.get("/", (req, res) => {
//     res.sendFile("./testing/home.html", {root: __dirname});
// });

// app.get("/about", (req, res) => {
//     res.sendFile("./testing/about.html", {root: __dirname});
// });

// app.use((req, res) => {
//     res.status(404);
// });