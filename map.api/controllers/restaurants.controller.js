
const Restaurants = require('../models/restaurants.model');
const User = require('../models/user.model');

exports.getAll = async (req, res) => {
    try {
        const result = await Restaurants.find({});
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.get = async (req, res) => {
    const { _id } = req.params;
    try {
        const result = await Restaurants.findById({ _id });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.getResbyNear = async (req, res) => {
    const { lat, long } = req.body;
    try {
        const usercurrentloc = await User.findOne({
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [long, lat],
                    },
                },
            },
        });

        const result = await Restaurants.find({
            location: {
                $near: {
                    $geometry: usercurrentloc.$geometry
                }
            }
        })
        res.json({ status: true, result });
    } catch (err) {
        res.json({ statis: false, message: err });
    };
};