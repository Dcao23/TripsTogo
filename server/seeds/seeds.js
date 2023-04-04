const db = require('../config/connection');
const { User, Trip } = require('../models');

const userData = require('./userData.json');
const tripData = require('./tripsData.json');

db.once('open', async () => {
    await User.deleteMany({});
    await User.create(userData);

    console.log('New User has been created!');
    process.exit(0);
});

db.once('open', async () => {
    await Trip.deleteMany({});
    await Trip.create(tripData)
});

