//require dependancies
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');

//require typeDefs and resolvers
const {typeDefs, resolvers} = require('./schema');

//create express server
const app = express();

//port
const PORT = process.env.PORT || 3001;

//connect to mongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/apollo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//create apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers
});

//apply middleware
server.applyMiddleware({ app });

//apply cors
app.use(cors());

//enable express to parse json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to port
app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});