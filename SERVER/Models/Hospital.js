
const mongoose = require('mongoose');

const Hospital = new mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    hospital: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('hospital', Hospital);