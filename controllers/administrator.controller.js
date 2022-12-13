const {administrator} = require("../models");

exports.create = async (req, res) => {

    await administrator.createJob(req.params)
        .catch((error) => res.json({ starus: error }));

    return res.json({ status: "ok" });

};

exports.update = async (req, res) => {
    const username = req.params.username;
    const admin = await administrator.findOne({ where: { username } }).catch((err) => res.json({ status: err }));

    await admin.update(req.params)
        .catch((error) => res.json({ starus: error }));

    return res.json({ status: "ok" });

};

exports.delete = async (req, res) => {

    const username = req.params.username;
    const admin = await administrator.findOne({ where: { username } }).catch((err) => res.json({ status: err }));

    await admin.destroy()
        .catch((error) => res.json({ starus: error }));

    return res.json({ status: "ok" });

};

exports.getAllAdministrators = async (req, res) => {

    const admin = await administrator.findAll().catch((err) => res.json({ status: err }));;
    return res.json(admin);
    
};

exports.getAdministrator = async (req, res) => {

    const username = req.params.username;
    const admin = await administrator.findOne({ where: { username } }).catch((err) => res.json({ status: err }));

    if (admin === null) {
        return res.json({ status: "not-found" });
    }
    
    return res.json(admin);

}