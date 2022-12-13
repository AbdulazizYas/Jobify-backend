const JobSeeker = require("../models/JobSeeker");

exports.create = async (req, res) => {

    await JobSeeker.create(req.body)
        .catch((error) => res.json({ starus: error }));

    return res.json({ status: "ok" });

};

exports.update = async (req, res) => {
    
    const userName = req.body.userName;
    const seeker = await JobSeeker.findOne({where: {userName}}).catch((err) => res.json({status:err}));

    await seeker.update(req.body)
    .catch((error) => res.json({starus:error}));

    return res.json({status: "ok"});

};

exports.delete = async (req, res) => {

    const username = req.body.username;
    const seeker = await JobSeeker.findOne({ where: { username } }).catch((err) => res.json({ status: err }));

    await seeker.destroy()
        .catch((error) => res.json({ starus: error }));

    return res.json({ status: "ok" });

};

exports.getAllseekeres = async (req, res) => {
    
    const seekers = await JobSeeker.findAll().catch((err) => res.json({status:err}));
    return res.json(seekers);

};

exports.getSeeker = async (req, res) => {

    const userName = req.body.userName;
    const seeker = await JobSeeker.findOne({where: {userName}}).catch((err) => res.json({status:err}));

    if (seeker === null) {
      return res.json({status: "not-found"});
    }

    return res.json(seeker);

}