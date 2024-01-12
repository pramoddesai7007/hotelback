const mongoose = require('mongoose');

// Define Waiter Schema
const waiterSchema = new mongoose.Schema({
    waiterName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    contactNumber: {
        type: String,
        required: true,
    },
});

// Create Waiter model
const Waiter = mongoose.model('Waiter', waiterSchema);

module.exports = Waiter;
