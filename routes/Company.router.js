const express = require("express");
const router = express.Router();
var companyCon = require("../controllers/Company.controler");

router.get("/", companyCon.getAllCompanies);

router.get("/:userName", companyCon.getCompany);

module.exports = router;