const express = require("express");
const router = express.Router();
var seekerCon = require("../controllers/Seeker.controller");

router.get("/", seekerCon.getAllSeekeres);

router.post("/", seekerCon.create);

router.get("/:username", seekerCon.getSeeker);

router.get("/:username/applications", seekerCon.getAllApplications);

router.post("/:username/update", seekerCon.update);

router.post("/:username/delete", seekerCon.delete);

module.exports = router;