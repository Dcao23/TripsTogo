const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    userTrips: [Trip]!
  }
  
  type Trip {
    _id: ID
    tripCreator: String
    tripName: String
    tripDescription: String
    location: String
    img: String
    createdAt: String
    comments: [Comment]!
  }
  
  type Comment {
    _id: ID
    commentText: String
    commentCreator: String
    createdAt: String
  }
  
  input UserTrip {
    tripCreator: String!
    tripName: String!
    tripDescription: String!
    location: String!
    img: String
    comments: [String]
  }
  
  type Query {
    users: [User]
    user(username: String!): User
    userTrips(username: String!): [Trip]
    trip(tripId: ID!): Trip
  }
  
  type Mutation {
    addUser(username: String!, email: String!, password: String!, bio: String!, profilePic: String!): User
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

  