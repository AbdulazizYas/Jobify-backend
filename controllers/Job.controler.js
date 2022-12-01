var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('database.db');
const statusS = {
    Status: 'successful'

}
// const statusF = {
//     Status: 'Failed'
// }
const SJSON = JSON.stringify(statusS);
//const FJSON = JSON.stringify(statusF);
exports.create = async (req, res) => {

    var job_id = req.body.job_id
    var jobName = req.body.jobName
    var location = req.body.location
    var datePosted = req.body.datePosted
    var locationType = req.body.locationType
    var entryLevel = req.body.entryLevel
    var jobType = req.body.jobType

    let sql = 'INSERT INTO Job (job_id, jobName,location,datePosted,locationType,entryLevel,jobType) VALUES ?';
    let data = [job_id, jobName, location, datePosted, locationType, entryLevel, jobType]

    db.run(sql, data, function (err, result) {
        if (err) {
            res.send(Json.stringify(err));
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
            res.send(Json.stringify(err));
        }
        else {
            res.send(SJSON);
        }
    });
    db.close();

    //await Job.update(req.body, { where: { id } }).catch((error) => res.send(error));
    //return res.redirect("Back");
};

exports.delete = async (req, res) => {
    var job_id = req.body.job_id
    let data = [job_id];

    let sql = `DELETE FROM Job WHERE job_id= ?`;
    db.run(sql, data, function (err) {
        if (err) {
            res.send(Json.stringify(err));
        }
        else {
            res.send(SJSON);
        }
    });
    db.close();



    //await Job.delete({ where: { id } }).catch((error) => res.send(error));
    //return res.redirect("Back");
};

exports.getAlljobs = async (req, res) => {

    // Requiring fs module
    const fs = require("fs");

    // Storing the JSON format data in myObject
    var data = fs.readFileSync("data.json");
    var myObject = JSON.parse(data)
    let sql = `SELECT * FROM Job `;

    db.all(sql, function (err, result) {
        if (err) {
            res.send(Json.stringify(err));
        }
        result.forEach(rows => {
            myObject.push(rows);
        })

        // else {
        //     res.send({ status:'successful'});
        // }
        //res.send(result);
    });
    res.send(myObject);
    // db.all(`SELECT * FROM Job `, [], (err, rows) => {
    //     if (err) return console.error(err.message);
    //     res.send(Json.stringify(rows))
    // });
    //db.close();

};

exports.getAjob = async (req, res) => {

    var job_id = req.body.job_id
    let data = [job_id];
    let sql = `SELECT * FROM Job WHERE job_id= ?`;

    db.run(sql, data, function (err, result) {
        if (err) {
            res.send(Json.stringify(err));
        }
        else {
            res.send(SJSON);
        }

        res.send(JSON.stringify(result));
    });

    db.close();

};

// exports.getAllApplicant = async (req, res) => {
    
//     let sql = `SELECT * FROM Job, JobSeeker
//                 WHERE JobSeeker`;

//     db.run(sql, function (err, result) {
//         if (err) {
//             res.send(Json.stringify(err));
//         }
//         else {
//             res.send(SJSON);
//         }

//         res.send(JSON.stringify(result));
//     });

//     db.close();

// };