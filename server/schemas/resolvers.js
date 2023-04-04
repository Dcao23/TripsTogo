const { User, Trip } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    // fetch all users
    users: async () => {
      return User.find().populate('trips');
    },
    // fetch a user by username
    user: async (_, { userId }) => {
      return User.findById(userId).populate('trips');
    },
    me: async (_, __, { user }) => {
      if (user) {
        return User.findById(user._id).populate('trips')
      }
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
    trips: async () => {
      return Trip.find();
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
    createTrip: async (parent, { input }, { user }) => {
      if (user) {
        console.log("Username", user)
        const { name, description, location, image, creator } = input;
        const newTrip = await Trip.create({ name, description, location, image, creator });

        await User.findByIdAndUpdate(
          user._id,
          { $addToSet: { trips: newTrip._id } }
        );

        return newTrip;
      }
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