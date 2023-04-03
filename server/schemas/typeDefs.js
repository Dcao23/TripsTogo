const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    userTrips: [Trips]!
  }
  
  type Trip {
    _id: ID
    tripCreator: String
    tripName: String
    tripDescription: String
    location: String
    image: String
    createdAt: String
    comments: [Comment]!
  }
  type Comment {
    _id: ID
    commentText: String
    user_id: String
    createdAt: String
  }
  input UserTrip {
    tripId: String
    tripCreator: String
    tripName: String
    tripDescription: String
    location: String
    image: String
    createdAt: String
    comments: [Comment]!
  }
  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    users: [User]
    user(username: String): User
    trips(username: String); [Trip]
    trip(tripId: ID!): Trip
    
  }
  
  type Mutations {
    createUser: (username: String1, email: String!, password: String!, bio: String, profilePic: String): Auth
    login(email: String!, password: String!): Auth
    createTrip(tripCreator: String!, tripName: String!, tripDescription!: String!, location: String!, image: String,): userTrip
    createComment(
      tripId: ID!
      commentText: String!
      commentCreator: String!
    ): Trip
    deleteTrip(tripId: Id!): Trip
    deleteComment(thoughtId: ID!, commentId: ID!): Trip
    
  }
`;

module.exports = typeDefs;

  