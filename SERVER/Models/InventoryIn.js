
const mongoose = require('mongoose');

const inventoryIn = new mongoose.Schema({
    bloodGroup: {
        type: String,
        required: true
    },
    inventoryType: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('inventoryIn', inventoryIn)