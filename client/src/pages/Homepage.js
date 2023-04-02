import React from 'react',
import { useQuery } from '@apollo/client';

import tripPosts from '../components/Homepage/index';
import LoginForm from '../components/LoginForm'

import { QUERY_tripPosts } from '../utils/queries';

const Homepage = () {
    const { loading, data } = useQuery(QUERY_tripPosts);
    const user = data?.user || [];
}

return ()

export default Homepage;