const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    tripName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100,
    },
    tripCreator: {
      type: String,
      required: true,
      trim: true,
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
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    comments: [
      {
        commentText: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 280,
        },
        commentAuthor: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (timestamp) => dateFormat(timestamp),
        },
      },
    ],
  });


const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;