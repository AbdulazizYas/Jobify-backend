const express = require("express");
const router = express.Router();
var path = require('path');
var jobModel = require("../controllers/Job.controler");

//
router.get("/", (req, res) => {
    res.json(jobModel.getAlljobs);
});

router.get("/:job_id", (req, res) => {
    res.json(jobModel.getAjob(req));
});
//

module.exports = router;