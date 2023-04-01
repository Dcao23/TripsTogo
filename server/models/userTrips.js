const { Schema, model } = require('mongoose');

const userTripSchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },

    comments: [
      {
        commentText: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 280,
        },
        user_id: {
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

module.exports = userTripSchema;