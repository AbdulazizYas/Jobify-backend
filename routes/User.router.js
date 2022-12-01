const express = require("express");
const router = express.Router();
var userCon = require("../controllers/User.controler");

router.get("/", userCon.getAllUser);

router.get("/:userName", userCon.getAUser);

module.exports = router;