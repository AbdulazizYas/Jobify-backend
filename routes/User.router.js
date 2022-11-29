const express = require("express");
const router = express.Router();
var path = require('path');
console.log(__dirname);
//
router.get("/", (req, res) => {
    res.sendFile(path.resolve("testing/home.html"));
});

router.get("/about", (req, res) => {
    res.sendFile(path.resolve("testing/about.html"));
});
//

module.exports = router;