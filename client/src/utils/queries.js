import { gql } from '@apollo/client';

export const QUERY_TRIPS = gql`
  query allTrips {
    trip {
      Destination
      Shared Experience
    }
  }
`;
