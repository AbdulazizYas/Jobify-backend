let db = require("../models");
var administrator = db.administrator;

exports.create = async (req, res) => {
    await administrator.create(req.body).catch((error) => res.send(error));
    return res.redirect("Back");
};

exports.update = async (req, res) => {
    var id = req.params.id;
    await administrator.update(req.body, { where: { id } }).catch((error) => res.send(error));
    return res.redirect("Back");
};

exports.delete = async (req, res) => {
    var id = req.params.id;
    await administrator.delete({ where: { id } }).catch((error) => res.send(error));
    return res.redirect("Back");
};

exports.getAlladministrator = async (req, res) => {
    var administrator = await administrator.findAll({}).catch((error) => res.send(error));
};