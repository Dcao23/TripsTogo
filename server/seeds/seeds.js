const db = require('../config/connection');
const { User, Trip } = require('../models');

const userData = require('./userData.json');
const tripData = require('./tripsData.json');

db.once('open', async () => {
    try {
        await Trip.deleteMany({});
        await User.deleteMany({});
        await User.create(userData);

        for (let i = 0; i < tripData.length; i++) {
            const { _id, creator } = await Trip.create(tripData[i])
            console.log({_id, creator})
           const user = await User.findOneAndUpdate(
                { username: creator },
                {
                    $addToSet: {
                        trips: _id
                    }
                }
            )

            console.log(user)
        }


    } catch (e) {
        console.error(e)
        process.exit(1)
    }

    console.log('Seeding done!');
    process.exit(0);
});