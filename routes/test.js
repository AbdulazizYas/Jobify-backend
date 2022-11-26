var express = require("express");
var router = express.Router();

var company = require("../controllers/Company.controller");

Router.post("/Company", company.delete);