const express = require("express");
const router = express.Router();
var jobCon = require("../controllers/Job.controler");

router.get("/", jobCon.getAlljobs);

router.get("/:job_id", jobCon.getAjob);

module.exports = router;