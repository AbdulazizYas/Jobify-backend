const JobSeeker = require("../models/JobSeeker");

exports.update = async (req, res) => {
    
    const seeker_id = req.body.seeker_id;
    const seeker = await JobSeeker.findOne({where: {seeker_id}}).catch((err) => res.json({status:err}));

    await seeker.update(req.body)
    .catch((error) => res.json({starus:error}));

    return res.json({status: "ok"});

};

exports.getAllseekeres = async (req, res) => {
    
    const seekers = await JobSeeker.findAll().catch((err) => res.json({status:err}));
    res.json(seekers);

};

exports.getAseeker = async (req, res) => {

    const seeker_id = req.body.seeker_id;
    const seeker = await JobSeeker.findOne({where: {seeker_id}}).catch((err) => res.json({status:err}));

    if (seeker === null) {
        res.json({status: "not-found"});
      } else {
        res.json(seeker);
      }

    return res.json({status: "ok"});

}