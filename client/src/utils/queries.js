import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query User($userId: ID!) {
  user(userId: $userId) {
    _id
    trips {
      _id
      creator
      name
      description
      location
      image
    }
    username
  }
}
`;

export const QUERY_TRIPS = gql`
query Trips {
  trips {
    _id
    creator
    name
    description
    location
    image
    createdAt
  }
}
`;

export const QUERY_ME = gql`
query Query {
  me {
    username
    trips {
      _id
      creator
      name
      description
      location
      image
      createdAt
    }
    _id
  }
}
`

// export const QUERY_USER_TRIPS = gql``
