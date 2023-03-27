
const { default: mongoose } = require('mongoose');

const RestaurantsSchema = new mongoose.Schema({
    restaurantsName: String,
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
},
    { collection: 'Restaurants', timestamps: true }
);

const Restaurants = mongoose.model('Restaurants', RestaurantsSchema);

Restaurants.collection.getIndexes('2dsphere');

module.exports = Restaurants;