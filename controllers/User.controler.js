let db = require("../models");
var User = db.User;

exports.create = async (req, res) => {
    await User.create(req.body).catch((error) => res.send(error));
    return res.redirect("Back");
};

exports.update = async (req, res) => {
    var id = req.params.id;
    await User.update(req.body, { where: { id } }).catch((error) => res.send(error));
    return res.redirect("Back");
};

exports.delete = async (req, res) => {
    var id = req.params.id;
    await User.delete({ where: { id } }).catch((error) => res.send(error));
    return res.redirect("Back");
};

exports.getAllUsers = async (req, res) => {
    var User = await User.findAll({}).catch((error) => res.send(error));
};