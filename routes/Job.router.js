const express = require("express");
const router = express.Router();
var jobCon = require("../controllers/Job.controler");

router.get("/", jobCon.getAllJobs);

router.get("/:job_id", jobCon.getJob);

router.get("/:job_id/applicants", jobCon.getAllApplicants);

module.exports = router;