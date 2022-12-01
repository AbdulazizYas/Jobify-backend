const Company = require("../models/Company");

exports.create = async (req, res) => {

    const registration_id = req.body.registration_id;
    const company = await Company.findOne({ where: { registration_id } }).catch((err) => res.json({ status: err }));

    await company.create(req.body)
        .catch((error) => res.json({ starus: error }));

    return res.json({ status: "ok" });

};

exports.update = async (req, res) => {

    const registration_id = req.body.registration_id;
    const Comp = await Company.findOne({ where: { registration_id } }).catch((err) => res.json({ status: err }));

    await Comp.update(req.body)
        .catch((error) => res.json({ starus: error }));

    return res.json({ status: "ok" });

};

exports.delete = async (req, res) => {

    const registration_id = req.body.registration_id;
    const Comp = await Company.findOne({ where: { registration_id } }).catch((err) => res.json({ status: err }));

    await Comp.destroy()
        .catch((error) => res.json({ starus: error }));

    return res.json({ status: "ok" });

};

exports.getAllcompanies = async (req, res) => {

    const registration_id = req.body.registration_id;
    const Comp = await Company.findOne({ where: { registration_id } }).catch((err) => res.json({ status: err }));
    res.json(Comp);

};

exports.getAcompany = async (req, res) => {

    const registration_id = req.body.registration_id;
    const Comp = await Company.findOne({ where: { registration_id } }).catch((err) => res.json({ status: err }));

    if (Comp === null) {
        res.json({ status: "not-found" });
    } else {
        res.json(Comp);
    }

    return res.json({ status: "ok" });

};
