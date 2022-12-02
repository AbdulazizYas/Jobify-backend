const administrator = require("../models/administrator");

exports.create = async (req, res) => {

    const admin_id = req.body.admin_id;
    const admin = await administrator.findOne({ where: { admin_id } }).catch((err) => res.json({ status: err }));

    await admin.createJob(req.body)
        .catch((error) => res.json({ starus: error }));

    return res.json({ status: "ok" });

};

exports.update = async (req, res) => {
    const admin_id = req.body.admin_id;
    const admin = await administrator.findOne({ where: { admin_id } }).catch((err) => res.json({ status: err }));

    await admin.update(req.body)
        .catch((error) => res.json({ starus: error }));

    return res.json({ status: "ok" });

};

exports.getAlladministrators = async (req, res) => {

    const admin = await administrator.findAll().catch((err) => res.json({ status: err }));;
    return res.json(admin);
    
};

exports.getAadministrator = async (req, res) => {

    const admin_id = req.body.admin_id;
    const admin = await administrator.findOne({ where: { admin_id } }).catch((err) => res.json({ status: err }));

    if (admin === null) {
        return res.json({ status: "not-found" });
    }
    
    return res.json(admin);

}