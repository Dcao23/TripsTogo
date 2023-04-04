const db = require('../config/connection');
const { User, Post, Comment, Trip } = require('../models');
const userSeed = require('./userSeed.json');
const postSeed = require('./postSeed.json');
const commentSeed = require('./commentSeed.json');
const tripSeed = require('./tripSeed.json');
require('dotenv').config();

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Post.deleteMany({});
        await Comment.deleteMany({});
        await Trip.deleteMany({});
    
        await User.create(userSeed);
        await Post.create(postSeed);
        await Comment.create(commentSeed);
        await Trip.create(tripSeed);

        for (let i = 0; i < userSeed.length; i++) {
            const { _id, username, email, password } = userSeed[i];
            const user = await User.findOneAndUpdate(
                { username: username },
                { $set: { username, email, password } },
                { new: true }
            );

            for (let i = 0; i < postSeed.length; i++) {
                const { _id, title, postText, createdAt, username } = postSeed[i];
                const post = await Post.findOneAndUpdate(
                    { _id: _id },
                    { $set: { title, postText, createdAt, username } },
                    { new: true }
                );

                for (let i = 0; i < commentSeed.length; i++) {
                    const { _id, content, createdAt, username } = commentSeed[i];
                    const comment = await Comment.findOneAndUpdate(
                        { _id: _id },
                        { $set: { content, createdAt, username } },
                        { new: true }
                    );

                    for (let i = 0; i < tripSeed.length; i++) {
                        const { _id, tripName, tripDescription, location, createdAt } = tripSeed[i];
                        const trip = await Trip.findOneAndUpdate(
                            { _id: _id },
                            { $set: { tripName, tripDescription, location, createdAt } },
                            { new: true }
                        );
                    }
                }
            }
        }
    
        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
    });