let db = require("../models");
var administrator = db.administrator;

const statusS = {
    Status: 'successful'
}
// const statusF = {
//     Status: 'Failed'
// }

const SJSON = JSON.stringify(statusS);
//const FJSON = JSON.stringify(statusF);
exports.update = async (req, res) => {
    var admin_id = req.body.admin_id
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    let data = [admin_id, firstName, lastName];
    let sql = `UPDATE Administrator
            SET admin_id = ?, firstName = ?, lastName = ?
            WHERE admin_id = ?`;
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

exports.getAlladministrators = async (req, res) => {
    let sql = `SELECT * FROM Administrator `;

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

exports.getAadministrator = async (req, res) => {

    var admin_id = req.body.admin_id
    let data = [admin_id];
    let sql = `SELECT * FROM Administrator WHERE admin_id= ?`;

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