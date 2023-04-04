const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    trips: [Trip]!
  }
  
  type Trip {
    _id: ID
    creator: String
    name: String
    description: String
    location: String
    image: String
    createdAt: String
  }
  
  type Comment {
    _id: ID
    commentText: String
    commentCreator: String
    createdAt: String
  }
  
  input UserTrip {
    creator: String!
    name: String!
    description: String!
    location: String!
    image: String
  }
  
  type Query {
    users: [User]
    user(userId: ID!): User
    me: User
    trips: [Trip]
    userTrips(username: String!): [Trip]
    trip(tripId: ID!): Trip
  }
  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createTrip(input: UserTrip!): Trip
    addComment(tripId: ID!, commentText: String!, commentCreator: String!): Comment
    deleteTrip(tripId: ID!): Boolean
    deleteComment(tripId: ID!, commentId: ID!): Boolean 
  }
  
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;

