let db = require("../models");
var User = db.User;
var CompanyDB = db.Company;

const statusS = {
    Status: 'successful'

}
const statusF = {
    Status: 'Failed'
}
const SJSON = JSON.stringify(statusS);
const FJSON = JSON.stringify(statusF);
exports.create = async (req, res) => {

    var userName = req.body.userName
    var password = req.body.password
    var type = req.body.type
    var email = req.body.email

    db.run('INSERT INTO User (userName, email,password,type) VALUES ?', [userName, email, password, type], function (err, result) {
        if (err) {
            res.send(FJSON);
        }
        else {
            res.send(SJSON);
        }
    });
    if (type === "Company") {
        var companyName = req.body.companyName
        var location = req.body.location
        db.run('INSERT INTO Company (companyName, location) VALUES ?', [companyName, location], function (err, result) {
            if (err) {
                res.send(FJSON);
            }
            else {
                res.send(SJSON);
            }
        });
    }
    else {
        var seeker_id = req.body.seeker_id
        var firstName = req.body.firstName
        var lastName = req.body.lastName
        var birthDate = req.body.birthDate

        db.run('INSERT INTO JopSeeker (seeker_id, firstName,lastName,birthDate) VALUES ?', [seeker_id, firstName, lastName, birthDate], function (err, result) {
            if (err) {
                res.send(FJSON);
            }
            else {
                res.send(SJSON);
            }
        });
    }
    db.close();

    //await User.create(req.body).catch((error) => res.send(error));
    return res.redirect("Back");
};

exports.update = async (req, res) => {
    var userName = req.body.userName
    var password = req.body.password
    var type = req.body.type
    var email = req.body.email
    let data = [userName, password, email, userName];
    let sql = `UPDATE User
            SET userName = ?, password = ? ,email = ? 
            WHERE userName = ?`;
    db.run(sql, data, function (err) {
        if (err) {
            res.send(FJSON);
        }

    });
    db.close();

};
exports.delete = async (req, res) => {
    var userName = req.body.userName
    let data = [userName];
    let sql = `DELETE FROM Users WHERE userName= ?`;
    db.run(sql, data, function (err) {
        if (err) {
            res.send(FJSON);
        }

    });
    db.close();
};

exports.getAllUsers = async (req, res) => {

    let sql = `SELECT * FROM Users `;

    db.run(sql, function (err, result) {
        if (err) {
            res.send(FJSON);
        }

        res.send(JSON.stringify(result));
    });

    db.close();
    var User = await User.findAll({}).catch((error) => res.send(error));
};