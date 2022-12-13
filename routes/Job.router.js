const express = require("express");
const router = express.Router();
var jobCon = require("../controllers/Job.controller");

router.get("/", jobCon.getAllJobs);

router.post("/", jobCon.create);

router.get("/filterd", jobCon.getFilterdJobs);

router.get("/:job_id", jobCon.getJob);

router.post("/:job_id/update", jobCon.update);

router.get("/:job_id/applicants", jobCon.getAllApplicants);

router.post("/:job_id/delete", jobCon.delete);

module.exports = router;