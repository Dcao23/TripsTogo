const { User, Trip } = require('../models');

const resolvers = {
  Query: {
    // fetch all users
    users: async () => {
      return User.find().populate('userTrips');
    },
    // fetch a user by username
    user: async (_, { username }) => {
      return User.findOne({ username }).populate('userTrips');
    },
    // fetch all trips
    userTrips: async (_, { username }) => {
      const params = username ? { username } : {};
      return Trip.find(params).sort({ createdAt: -1 });
    },
    // fetch a trip by id
    trip: async (_, { tripId }) => {
      return Trip.findOne({ _id: tripId });
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    createTrip: async (parent, { tripName, tripDescription, location, img, tripCreator }) => {
      const newTrip = await Trip.create({ tripName, tripDescription, location, img });

      await User.findOneAndUpdate(
        { username: tripCreator },
        { $addToSet: { userTrips: newTrip._id } }
      );

      return newTrip;
    },
    addComment: async (parent, { tripId, commentText, commentCreator }) => {
      return Trip.findOneAndUpdate(
        { _id: tripId },
        { $addToSet: { comments: { commentText, commentCreator } } },
        { new: true, runValidators: true }
      );
    },
    deleteTrip: async (parent, { tripId }) => {
      return Trip.findOneAndDelete({ _id: tripId });
    },
    deleteComment: async (parent, { tripId, commentId }) => {
      return Trip.findOneAndUpdate(
        { _id: tripId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;