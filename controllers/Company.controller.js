const Company = require("../models/Company");

exports.create = async (req, res) => {

    await Company.create(req.body)
        .catch((error) => res.json({ starus: error }));

    return res.json({ status: "ok" });

};

exports.update = async (req, res) => {

    const username = req.body.username;
    const Comp = await Company.findOne({ where: { username } }).catch((err) => res.json({ status: err }));

    await Comp.update(req.body)
        .catch((error) => res.json({ starus: error }));

    return res.json({ status: "ok" });

};

exports.delete = async (req, res) => {

    const username = req.body.username;
    const Comp = await Company.findOne({ where: { username } }).catch((err) => res.json({ status: err }));

    await Comp.destroy()
        .catch((error) => res.json({ starus: error }));

    return res.json({ status: "ok" });

};

exports.getAllCompanies = async (req, res) => {

    const Comp = await Company.findAll().catch((err) => res.json({ status: err }));
    return res.json(Comp);

};

exports.getCompany = async (req, res) => {

    const username = req.body.username;
    const Comp = await Company.findOne({ where: { username } }).catch((err) => res.json({ status: err }));

    if (Comp === null) {
        return res.json({ status: "not-found" });
    }

    return res.json(Comp);

};
