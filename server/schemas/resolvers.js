const { User, Post, Comment, Trip } = require('./models');

const resolvers = {
    Query: {
    //fetch all users
    users: async () => {
        return User.find().populate('userTrips');
    },
    //fetch a user by id
    user: async (_, { username }) => {
        return User.findOne(username).populate('userTrips');
    },
    //fetch all trips
    userTrips: async (_, {username}) => {
        const params = username ? { username } : {};
        return Trip.find(params),sort({ createdAt: -1 });
    },
    //fetch a trip by id
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
    createTrip: async (parent, { tripName, tripDescription, location, img}) => {
      const newTrip = await Trip.create({ tripName, tripDescription, location, img });
  
      await User.findOneAndUpdate(
        { username: tripCreator },
        { $addToSet: { userTrips: newTrip._id } }
      );
  
      return newTrip;
    },
    // createComment: async (_, { commentInput }, { req }) => {
        //     if (!req.isAuth) {
        //         throw new Error('Unauthenticated!');
        //     }
        //     try {
        //         const comment = new Comment({
        //             content: commentInput.content,
        //             post: commentInput.postId,
        //             creator: req.userId,
        //         });

        //         const result = await comment.save();
        //         const post = await Post.findById(commentInput.postId);

        //         if (!post) {
        //             throw new Error('Post not found.');
        //         }

        //         post.comments.push(comment);
        //         await post.save();

        //         return {
        //             ...result._doc,
        //             _id: result.id,
        //             createdAt: result.createdAt.toISOString(),
        //             updatedAt: result.updatedAt.toISOString(),
        //         };
        //     } catch (err) {
        //         throw err;
        //     }
        // },
        // createTrip: async (_, { tripInput }, { req }) => {
        //     if (!req.isAuth) {
        //         throw new Error('Unauthenticated!');
        //     }
        //     try {
        //         const trip = new Trip({
        //             title: tripInput.title,
        //             startDate: tripInput.startDate,
        //             endDate: tripInput.endDate,
        //             description: tripInput.description,
        //             creator: req.userId,
        //         });
        //         const result = await trip.save();
        //         const user = await User.findById(req.userId);

        //         if (!user) {
        //             throw new Error('User not found.');
        //         }

        //         user.trips.push(trip);
        //         await user.save();

        //         return {
        //             ...result._doc,
        //             _id: result.id,
        //             startDate: result.startDate.toISOString(),
        //             endDate: result.endDate.toISOString(),
        //             createdAt: result.createdAt.toISOString(),
        //             updatedAt: result.updatedAt.toISOString(),
        //         };
        //     } catch (err) {
        //         throw err;
        //     }
        // },
        addComment: async (parent, { tripId, commentText, commentCreator }) => {
            return Thought.findOneAndUpdate(
              { _id: tripId },
              {
                $addToSet: { comments: { commentText, commentCreator } },
              },
              {
                new: true,
                runValidators: true,
              }
            );
          },
          deleteThought: async (parent, { tripId }) => {
            return Thought.findOneAndDelete({ _id: tripId });
          },
          deleteComment: async (parent, { tripId, commentId }) => {
            return Thought.findOneAndUpdate(
              { _id: tripId },
              { $pull: { comments: { _id: commentId } } },
              { new: true }
            );
          },
    },
};

module.exports = resolvers;
