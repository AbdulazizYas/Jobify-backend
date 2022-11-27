let db = require("../models");
var JobSeeker = db.JobSeeker;


exports.update = async (req, res) => {
    var id = req.params.id;
    await JobSeeker.update(req.body, { where: { id } }).catch((error) => res.send(error));
    return res.redirect("Back");
};

exports.delete = async (req, res) => {
    var id = req.params.id;
    await JobSeeker.delete({ where: { id } }).catch((error) => res.send(error));
    return res.redirect("Back");
};

exports.getAllJobSeeker = async (req, res) => {
    var JobSeeker = await JobSeeker.findAll({}).catch((error) => res.send(error));
};