const express = require("express");
const router = express.Router();
var path = require('path');

//
router.get("/", (req, res) => {
    res.sendStatus(404);
});

router.get("/:userName", (req, res) => {
    const userName = req.params.userName;
    
});
//

module.exports = router;