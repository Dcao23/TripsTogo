const { User, Post, Comment, Trip } = require('./models');

const resolvers = {
    Query: {
    //fetch all users
    users: async () => {
        return await User.find().populate('myTrips');
    },
    //fetch a user by id
    user: async (_, { username }) => {
        return await User.findOne(username).populate('myTrips');
    },
    //fetch all trips
    trips: async () => {
        return await Trip.find();
    },
    //fetch a trip by id
    trip: async (_, { id }) => {
        return await Trip.findById(id);
    },
},

Mutation: {
    createUser: async (_, { userInput }) => {
        try {
            const user = new User({
                username: userInput.username,
                email: userInput.email,
                password: userInput.password,
                bio: userInput.bio,
                profilePic: userInput.profilePic,
            });
            const result = await user.save();

            return { ...result._doc, password: null };
        } catch (err) {
            throw err;
        }
    },
    createPost: async (_, { postInput }, { req }) => {
        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }
        try {
            const post = new Post({
                title: postInput.title,
                content: postInput.content,
                imageUrl: postInput.imageUrl,
                creator: req.userId,
            });

            const result = await post.save();
            const user = await User.findById(req.userId);

            if (!user) {
                throw new Error('User not found.');
            }

            user.posts.push(post);
            await user.save();

            return {
                ...result._doc,
                _id: result.id,
                createdAt: result.createdAt.toISOString(),
                updatedAt: result.updatedAt.toISOString(),
            };
            } catch (err) {
                throw err;
            }
        },
        createComment: async (_, { commentInput }, { req }) => {
            if (!req.isAuth) {
                throw new Error('Unauthenticated!');
            }
            try {
                const comment = new Comment({
                    content: commentInput.content,
                    post: commentInput.postId,
                    creator: req.userId,
                });

                const result = await comment.save();
                const post = await Post.findById(commentInput.postId);

                if (!post) {
                    throw new Error('Post not found.');
                }

                post.comments.push(comment);
                await post.save();

                return {
                    ...result._doc,
                    _id: result.id,
                    createdAt: result.createdAt.toISOString(),
                    updatedAt: result.updatedAt.toISOString(),
                };
            } catch (err) {
                throw err;
            }
        },
        createTrip: async (_, { tripInput }, { req }) => {
            if (!req.isAuth) {
                throw new Error('Unauthenticated!');
            }
            try {
                const trip = new Trip({
                    title: tripInput.title,
                    startDate: tripInput.startDate,
                    endDate: tripInput.endDate,
                    description: tripInput.description,
                    creator: req.userId,
                });
                const result = await trip.save();
                const user = await User.findById(req.userId);

                if (!user) {
                    throw new Error('User not found.');
                }

                user.trips.push(trip);
                await user.save();

                return {
                    ...result._doc,
                    _id: result.id,
                    startDate: result.startDate.toISOString(),
                    endDate: result.endDate.toISOString(),
                    createdAt: result.createdAt.toISOString(),
                    updatedAt: result.updatedAt.toISOString(),
                };
            } catch (err) {
                throw err;
            }
        },
    },
};

module.exports = resolvers;
