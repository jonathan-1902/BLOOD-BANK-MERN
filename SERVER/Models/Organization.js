
const mongoose = require('mongoose');

const Organization = new mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    organization: {
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

module.exports = mongoose.model('organization', Organization);