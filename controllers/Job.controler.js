let db = require("../models");
var Job = db.Job;

exports.create = async (req, res) => {
    await Job.create(req.body).catch((error) => res.send(error));
    return res.redirect("Back");
};

exports.update = async (req, res) => {
    var id = req.params.id;
    await Job.update(req.body, { where: { id } }).catch((error) => res.send(error));
    return res.redirect("Back");
};

exports.delete = async (req, res) => {
    var id = req.params.id;
    await Job.delete({ where: { id } }).catch((error) => res.send(error));
    return res.redirect("Back");
};

exports.getAlljobs = async (req, res) => {
    var job = await Job.findAll({}).catch((error) => res.send(error));
};