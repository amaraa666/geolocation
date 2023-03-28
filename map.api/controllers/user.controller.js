
const User = require('../models/user.model');

exports.create = async (req, res) => {
    try {
        const result = await User.create(req.body);
        res.json({ status: false, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.getAll = async (req, res) => {
    try {
        const result = await User.find({});
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};