const {Seeker} = require("../models");
const {Job} = require("../models");

exports.create = async (req, res) => {

    await Seeker.create(req.params)
        .catch((error) => res.json({ starus: error }));

    return res.json({ status: "ok" });

};

exports.update = async (req, res) => {
    
    const username = req.params.username;
    const seeker = await Seeker.findOne({where: {username}}).catch((err) => res.json({status:err}));

    await seeker.update(req.params)
    .catch((error) => res.json({starus:error}));

    return res.json({status: "ok"});

};

exports.delete = async (req, res) => {

    const username = req.params.username;
    const seeker = await Seeker.findOne({ where: { username } }).catch((err) => res.json({ status: err }));

    await seeker.destroy()
        .catch((error) => res.json({ starus: error }));

    return res.json({ status: "ok" });

};

exports.getAllSeekeres = async (req, res) => {
    
    const seeker = await Seeker.findAll().catch((err) => res.json({ status: err }));
    return res.json(seeker);

};

exports.getSeeker = async (req, res) => {

    const username = req.params.username;
    const seeker = await Seeker.findOne({where: {username}}).catch((err) => res.json({status:err}));

    if (seeker === null) {
      return res.json({status: "not-found"});
    }

    return res.json(seeker);

};

exports.getAllApplications = async (req, res) => {
    
    const username = req.params.username;
    const seeker = await Seeker.findOne({where: {username}, include: Job}).catch((err) => res.json({status:err}));

    // const applicants = await job.getApplicants();
    return res.json(seeker.Jobs);

};