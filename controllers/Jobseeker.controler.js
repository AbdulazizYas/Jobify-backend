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
exports.update = async (req, res) => {
    var seeker_id = req.body.seeker_id
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var birthDate = req.body.birthDate
    let data = [seeker_id, firstName, lastName, birthDate];
    let sql = `UPDATE JobSeeker
            SET seeker_id = ?, firstName = ?, lastName = ?, birthDate = ?
            WHERE seeker_id = ?`;
    db.run(sql, data, function (err) {
        if (err) {
            res.send(Json.stringify(err));
        }
        else {
            res.send(SJSON);
        }

    });
    db.close();
};

exports.getAllseekeres = async (req, res) => {
    let sql = `SELECT * FROM JobSeeker `;

    db.run(sql, function (err, result) {
        if (err) {
            res.send(Json.stringify(err));
        }
        else {
            res.send(SJSON);
        }
    });

    db.close();
    //var company = await Company.findAll({}).catch((error) => res.send(error));
};

exports.getAseeker = async (req, res) => {

    var seeker_id = req.body.seeker_id
    let data = [seeker_id];
    let sql = `SELECT * FROM JobSeeker WHERE seeker_id= ?`;

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

}