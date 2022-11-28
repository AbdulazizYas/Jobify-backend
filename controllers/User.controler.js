const { json } = require("sequelize");
let db = require("../models");
// var User = db.User;
// var CompanyDB = db.Company;

const statusS = {
    Status: 'successful'
}

// const statusF = {
//     Status: 'Failed'
// }

const SJSON = JSON.stringify(statusS);
//const FJSON = JSON.stringify(statusF);

exports.create = async (req, res) => {

    var userName = req.body.userName
    var password = req.body.password
    var type = req.body.type
    var email = req.body.email

    let sql = 'INSERT INTO User (userName, email,password,type) VALUES ?';
    let data = [userName, email, password, type];

    db.run(sql, data, function (err, result) {
        if (err) {
            res.send(Json.stringify(err));
        }
        else {
            res.send(SJSON);
        }
    });

    db.close();

    if (type === "Company") {
        var companyName = req.body.companyName
        var location = req.body.location

        let sql = 'INSERT INTO Company (companyName, location) VALUES ?';
        let data = [companyName, location];

        db.run(sql, data, function (err, result) {
            if (err) {
                res.send(Json.stringify(err));
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

        let sql = 'INSERT INTO JopSeeker (seeker_id, firstName,lastName,birthDate) VALUES ?';
        let data = [seeker_id, firstName, lastName, birthDate];

        db.run(sql, data, function (err, result) {
            if (err) {
                res.send(Json.stringify(err));
            }
            else {
                res.send(SJSON);
            }
        });
    }

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
            res.send(Json.stringify(err));
        }
        else {
            res.send(SJSON);
        }

    });
    db.close();

};
exports.delete = async (req, res) => {
    var userName = req.body.userName
    let data = [userName];
    let sql = `DELETE FROM User WHERE userName= ?`;
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

exports.getAllUser = async (req, res) => {

    let sql = `SELECT * FROM User `;

    db.run(sql, function (err, result) {
        if (err) {
            res.send(Json.stringify(err));
        }
        else {
            res.send(SJSON);
        }

        res.send(JSON.stringify(result));
    });

    db.close();
    //var User = await User.findAll({}).catch((error) => res.send(error));
};

exports.getAUser = async (req, res) => {

    var userName = req.body.userName
    let data = [userName];
    let sql = `SELECT * FROM User WHERE userName= ?`;

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
    //var User = await User.findAll({}).catch((error) => res.send(error));
};