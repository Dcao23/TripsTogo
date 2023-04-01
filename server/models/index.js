const mongoose = require('mongoose');
const User = require('./User');
const Trip = require('./Trips');
const Comment = require('./comment');
const Post = require('./post');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

module.exports = { User, Trip, Comment, Post }