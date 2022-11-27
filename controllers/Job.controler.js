let db = require("../models");
var Job = db.Job;
const statusS = {
    Status: 'successful'

}
const statusF = {
    Status: 'Failed'
}
const SJSON = JSON.stringify(statusS);
const FJSON = JSON.stringify(statusF);
exports.create = async (req, res) => {

    var job_id = req.body.job_id
    var jobName = req.body.jobName
    var location = req.body.location
    var datePosted = req.body.datePosted
    var locationType = req.body.locationType
    var entryLevel = req.body.entryLevel
    var jobType = req.body.jobType
    db.run('INSERT INTO Job (job_id, jobName,location,datePosted,locationType,entryLevel,jobType) VALUES ?', [job_id, jobName, location, datePosted, locationType, entryLevel, jobType], function (err, result) {
        if (err) {
            res.send(FJSON);
        }
        else {
            res.send(SJSON);
        }
    });
    db.close();
    //await Job.create(req.body).catch((error) => res.send(error));
    //return res.redirect("Back");
};

exports.update = async (req, res) => {
    var job_id = req.body.job_id
    var jobName = req.body.jobName
    var location = req.body.location
    var datePosted = req.body.datePosted
    var locationType = req.body.locationType
    var entryLevel = req.body.entryLevel
    var jobType = req.body.jobType
    let data = [job_id, jobName, location, datePosted, locationType, entryLevel, jobType, job_id];
    let sql = `UPDATE Job
            SET job_id = ?, jobName = ?, location = ?, datePosted = ?, locationType = ?, entryLevel = ?, jobType = ?
            WHERE job_id = ?`;
    db.run(sql, data, function (err) {
        if (err) {
            res.send(FJSON);
        }
    });
    db.close();

    //await Job.update(req.body, { where: { id } }).catch((error) => res.send(error));
    //return res.redirect("Back");
};

exports.delete = async (req, res) => {
    var job_id = req.body.job_id
    var jobName = req.body.jobName
    var location = req.body.location
    var datePosted = req.body.datePosted
    var locationType = req.body.locationType
    var entryLevel = req.body.entryLevel
    var jobType = req.body.jobType
    let sql = `DELETE FROM Job WHERE job_id= ?`;
    db.run(sql, data, function (err) {
        if (err) {
            res.send(FJSON);
        }
    });
    db.close();



    //await Job.delete({ where: { id } }).catch((error) => res.send(error));
    //return res.redirect("Back");
};

exports.getAlljobs = async (req, res) => {
    var job = await Job.findAll({}).catch((error) => res.send(error));
};