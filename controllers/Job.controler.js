const Company = require("../models/Company");
const Job = require("../models/Job");

exports.create = async (req, res) => {

    const username = req.body.username;
    const company = await Company.findOne({ where: { username } }).catch((err) => res.json({ status: err }));

    await company.createJob(req.body)
        .catch((error) => res.json({ starus: error }));

    return res.json({ status: "ok" });

};

exports.update = async (req, res) => {

    const job_id = req.body.job_id;
    const job = await Job.findOne({ where: { job_id } }).catch((err) => res.json({ status: err }));

    await job.update(req.body)
        .catch((error) => res.json({ starus: error }));

    return res.json({ status: "ok" });

};

exports.delete = async (req, res) => {

    const job_id = req.body.job_id;
    const job = await Job.findOne({ where: { job_id } }).catch((err) => res.json({ status: err }));

    await job.destroy()
        .catch((error) => res.json({ starus: error }));

    return res.json({ status: "ok" });

};
{
    //     location:"xx",
    //     datePosted:"xx",
    //     locationType:"xx",
    //     entryLevel:"xx",
    //     jobType:"z",

    // }
    exports.getAllJobs = async (req, res) => {
        if (req.body === {}) {
            const jobs = await Job.findAll(
                {
                    where: {
                        location: req.body.location,
                        datePosted: req.body.datePosted,
                        Type: req.body.Type,
                        entryLevel: req.body.entryLevel,
                        jobType: req.body.jobType
                    }
                }
            ).catch((err) => res.json({ status: err }));
        }


        const jobs = await Job.findAll().catch((err) => res.json({ status: err }));
        return res.json(jobs);

    };

    exports.getJob = async (req, res) => {

        const job_id = req.body.job_id;
        const job = await Job.findOne({ where: { job_id } }).catch((err) => res.json({ status: err }));

        if (job === null) {
            return res.json({ status: "not-found" });
        }

        return res.json(job);

    };

    exports.getAllApplicants = async (req, res) => {

        const job_id = req.body.job_id;
        const job = await Job.findOne({ where: { job_id } }).catch((err) => res.json({ status: err }));

        const applicants = await job.getApplicants({ where: { job } });
        return res.json(applicants);

    };