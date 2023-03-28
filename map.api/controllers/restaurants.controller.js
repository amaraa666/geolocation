
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
    console.log(lat, long)
    try {
        const usercurrentloc = await User.findOne({
            location: {
                $geoIntersects: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lat, long],
                    },
                },
            },
        });
        console.log(usercurrentloc)
        const result = await Restaurants.find({
            location: {
                $near: {
                    $geometry: usercurrentloc.location
                }
            }
        })
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.create = async (req, res) => {
    try {
        const result = await Restaurants.create(req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
}