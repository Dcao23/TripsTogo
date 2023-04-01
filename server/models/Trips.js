const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    tripName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100,
    },
    tripDescription: {
        type: String,
        required: true,
        trim: true,
        maxLength: 1000,
    },
    location: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;