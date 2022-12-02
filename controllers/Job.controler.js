const Company = require("../models/Company");
const Job = require("../models/Job");
const Applicant = require("../models/Applicant");

exports.create = async (req, res) => {

    const registration_id = req.body.registration_id;
    const company = await Company.findOne({where: {registration_id}}).catch((err) => res.json({status:err}));

    await company.createJob(req.body)
    .catch((error) => res.json({starus:error}));

    return res.json({status: "ok"});

};

exports.update = async (req, res) => {

    const job_id = req.body.job_id;
    const job = await Job.findOne({where: {job_id}}).catch((err) => res.json({status:err}));

    await job.update(req.body)
    .catch((error) => res.json({starus:error}));

    return res.json({status: "ok"});

};

exports.delete = async (req, res) => {

    const job_id = req.body.job_id;
    const job = await Job.findOne({where: {job_id}}).catch((err) => res.json({status:err}));

    await job.destroy()
    .catch((error) => res.json({starus:error}));

    return res.json({status: "ok"});

};

exports.getAlljobs = async (req, res) => {

    const jobs = await Job.findAll().catch((err) => res.json({status:err}));
    return res.json(jobs);

};

exports.getAjob = async (req, res) => {

    const job_id = req.body.job_id;
    const job = await Job.findOne({where: {job_id}}).catch((err) => res.json({status:err}));

    if (job === null) {
        return res.json({status: "not-found"});
    }
    
    return res.json(job);

};

exports.getAllApplicant = async (req, res) => {
    
    const job_id = req.body.job_id;
    const job = await Job.findOne({where: {job_id}}).catch((err) => res.json({status:err}));

    const applicants = await job.getApplicants({where: {job}});
    return res.json(applicants);

};