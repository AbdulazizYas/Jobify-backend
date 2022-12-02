const User = require("../models/User");

exports.create = async (req, res) => {

    const userName = req.body.userName;
    const user = await User.findOne({where: {userName}}).catch((err) => res.json({status:err}));

    await user.create(req.body)
    .catch((error) => res.json({starus:error}));

    return res.json({status: "ok"});

};

exports.update = async (req, res) => {



};
exports.delete = async (req, res) => {
    


};

exports.getAllUser = async (req, res) => {



};

exports.getAUser = async (req, res) => {



};