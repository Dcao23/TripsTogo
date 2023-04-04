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
    addTrip: async (parent, { newTrip }) => {
      const updatedTrip = await Trip.create({ newTrip });

      await User.findOneAndUpdate(
        { username: tripCreator },
        { $addToSet: { userTrips: updatedTrip._id } },
        {new: true}
      );

      return updatedTrip;
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