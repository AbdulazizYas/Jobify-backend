const express = require("express");
const router = express.Router();
var seekerCon = require("../controllers/Jobseeker.controler");

router.get("/", seekerCon.getAllSeekeres);

router.get("/:job_id", seekerCon.getSeeker);

module.exports = router;