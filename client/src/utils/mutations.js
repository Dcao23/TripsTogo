import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!, bio: String, profilePic: String) {
    createUser(username: $username, email: $email, password: $password, bio: $bio, profilePic: $profilePic) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_TRIP = gql`
  mutation createTrip($tripCreator: String!,$tripName: String!, $tripDescription: String!, $location: String!, image: String) {
    createtrip(tripName: $tripName, tripDescription: $tripDescription: location: $location, image: $image) {
      _id
      tripName
      tripCreator
      tripDescription
      location
      image
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment(
    $tripId: ID!
    $commentText: String!
    $commentCreator: String!
  ) {
    createComment(
      tripId: $tripId
      commentText: $commentText
      commentCreator: $commentCreator
    ) {
      _id
      tripName
      tripCreator
      tripDescription
      location
      image
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

