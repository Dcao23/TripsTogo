import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;

export const CREATE_USER = gql`
mutation AddUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;

export const CREATE_TRIP = gql`
mutation CreateTrip($input: UserTrip!) {
  createTrip(input: $input) {
    name
    description
    location
    image
  }
}
`;

