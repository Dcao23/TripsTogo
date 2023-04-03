import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user($username: $username) {
      _id
      username
      email
      userTrips {
        _id
        tripCreator
        tripName
        tripDescription
        location
        image
        createdAt
      }
    }
  }
`;

export const QUERY_TRIPS = gql`
  query getTrips {
    trips {
      _id
      tripCreator
      tripName
      tripDesription
      location
      image
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_USER_TRIPS = gql``
