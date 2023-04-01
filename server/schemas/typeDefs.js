const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    myTrips: [userTrips]!
  }
  
  type userTrip {
    _id: ID
    user_id: String
    title: String
    description: String
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
  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    users: [User]
    user(username: String): User
    myTrips(username: String); [Trips]
    
  }
  
  type Mutations {
    
  }`

  