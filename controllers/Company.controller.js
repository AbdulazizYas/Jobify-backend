let db = require("../models");
var Company = db.Company;

exports.create = async (req, res) => {
    await Copmany.create(req.body).catch((error) => res.send(error));
    return res.redirect("Back");
};

exports.update = async (req, res) => {
    var id = req.params.id;
    await Company.update(req.bode, {where: {id}}).catch((error) => res.send(error));
    return res.redirect("Back");
};

exports.delete = async (req, res) => {
    var id = req.params.id;
    await Company.delete({where: {id}}).catch((error) => res.send(error));
    return res.redirect("Back");
};

exports.getAllCompanies = async (req, res) => {
    var company = await Company.findAll({}).catch((error) => res.send(error));
}