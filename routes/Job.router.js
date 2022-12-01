const express = require("express");
const router = express.Router();
var path = require('path');
var jobCon = require("../controllers/Job.controler");

//
router.get("/", (req, res) => {
    console.log(jobCon.getAlljobs())
    res.json(jobCon.getAlljobs());
});

// router.get("/:job_id", (req, res) => {
//     res.json(jobCon.getAjob(req));
// });
//

module.exports = router;