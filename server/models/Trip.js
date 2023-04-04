const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100,
    },
    creator: {
      type: String,
      required: true
    },
    description: {
        type: String,
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
        text: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 280,
        },
        author: {
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


