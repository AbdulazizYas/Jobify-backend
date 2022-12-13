const {Company} = require("../models");
const {Job} = require("../models");
const {Seeker} = require("../models");

exports.create = async (req, res) => {

    const username = req.params.username;
    const company = await Company.findOne({where: {username}}).catch((err) => res.json({status:err}));

    await company.createJob(req.params)
    .catch((error) => res.json({starus:error}));

    return res.json({status: "ok"});

};

exports.update = async (req, res) => {

    const job_id = req.params.job_id;
    const job = await Job.findOne({where: {job_id}}).catch((err) => res.json({status:err}));

    await job.update(req.params)
    .catch((error) => res.json({starus:error}));

    return res.json({status: "ok"});

};

exports.delete = async (req, res) => {

    const job_id = req.params.job_id;
    const job = await Job.findOne({where: {job_id}}).catch((err) => res.json({status:err}));

    await job.destroy()
    .catch((error) => res.json({starus:error}));

    return res.json({status: "ok"});

};

exports.getAllJobs = async (req, res) => {

    const jobs = await Job.findAll().catch((err) => res.json({status:err}));
    return res.json(jobs);

};

exports.getFilterdJobs = async (req, res) => {

    const filter = req.body;

    const jobs = await Job.findAll(
        {
            where: {
            city: filter.city,
            datePosted: filter.datePosted,
            jobType: filter.jobType,
            entryLevel: filter.entryLevel,
            jobTime: filter.jobTime
        }
    }
    ).catch((err) => res.json({status:err}));
    return res.json(jobs);

};

exports.getJob = async (req, res) => {

    const job_id = req.params.job_id;
    const job = await Job.findOne({where: {job_id}}).catch((err) => res.json({status:err}));

    if (job === null) {
        return res.json({status: "not-found"});
    }
    
    return res.json(job);

};

exports.getAllApplicants = async (req, res) => {
    
    const job_id = req.params.job_id;
    const job = await Job.findOne({where: {job_id}, include: Seeker}).catch((err) => res.json({status:err}));

    // const applicants = await job.getApplicants();
    return res.json(job.Seekers);

};