let db = require("../models");
var Company = db.Company;


const statusS = {
    Status: 'successful'

}
const statusF = {
    Status: 'Failed'
}
const SJSON = JSON.stringify(statusS);
const FJSON = JSON.stringify(statusF);
exports.update = async (req, res) => {
    var companyName = req.body.companyName
    var password = req.body.password
    let data = [companyName, password, companyName];
    let sql = `UPDATE Company
            SET companyName = ?, location = ? 
            WHERE companyName = ?`;
    db.run(sql, data, function (err) {
        if (err) {
            res.send(FJSON);
        }
        res.send(statusS);

    });
    db.close();
};

exports.delete = async (req, res) => {

    var companyName = req.body.companyName
    var password = req.body.password
    let data = [companyName, password, companyName];
    let sql = `DELETE FROM Company WHERE companyName= ?`;
    db.run(sql, data, function (err) {
        if (err) {
            res.send(FJSON);
        }
        res.send(statusS);
    });
    db.close();
    //return res.redirect("Back");
};

exports.getAllCompanies = async (req, res) => {
    let sql = `SELECT * FROM Company `;

    db.run(sql, function (err, result) {
        if (err) {
            res.send(FJSON);
        }

        res.send(JSON.stringify(result));
    });

    db.close();
    var company = await Company.findAll({}).catch((error) => res.send(error));
};