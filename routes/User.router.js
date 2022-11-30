const express = require("express");
const router = express.Router();
var path = require('path');
var userCon = require("../controllers/User.controler");

//
router.get("/", (req, res) => {
    res.json(userCon.getAllUser);
});

router.get("/:userName", (req, res) => {
    res.json(userCon.getAUser(req));
});
//

module.exports = router;