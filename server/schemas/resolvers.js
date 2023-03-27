const { Trip } = require('../models');

const resolvers = {
    Query: {
        trips: async () => {
            const trips = await Trip.find({});
            return trips;
        },
        trip : async (_, { id }) => {
            const trip = await Trip.findbyId(id);
            return trip;
        },
    },
    Mutation: {
        createTrip: async (_, { input }) => {
            const trip = new Trip(input);
            await trip.save();
            return trip;
        },
        updateTrip: async (_, { id, input }) => {
            const trip = await Trip.findbyIdAndUpdate(id, input, { new: true });
            return trip;
            },
        deleteTrip: async (_, { id }) => {
            const trip = await Trip.findByIdAndDelete(id);
            return trip;
        },
    },
};

module.exports = resolvers;
