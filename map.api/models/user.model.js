

const { default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
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
    { collection: "User", timestamps: true }
);
const User = mongoose.model('user', userSchema);

User.collection.getIndexes('2dsphere');

module.exports = User;