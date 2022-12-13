const express = require("express");
const router = express.Router();
var companyCon = require("../controllers/Company.controller");

router.get("/", companyCon.getAllCompanies);

router.post("/", companyCon.create);

router.get("/:username", companyCon.getCompany);

router.get("/:username/jobs", companyCon.getCompanyJobs);

router.post("/:username/update", companyCon.update);

router.post("/:username/delete", companyCon.delete);

module.exports = router;