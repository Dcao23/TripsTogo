import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Home from './pages/Home';
import Profilepage from './pages/Profilepage';
import PlanTrip from './pages/PlanTrip';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import auth from './utils/auth';

const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bear ${token}` : "",
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const token = localStorage.getItem('id_token')

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <h1 className="text-3xl font-bold text-blue-500">
          TripsToGo
        </h1>
        <nav>
          {!token ? (
          <><Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link></>) :
            (<><Link to='/profile'>Profile</Link>
              <div onClick={() => auth.logout()}>Logout</div></>)
          }
        </nav>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/login'
            element={<LogIn />}
          />
          <Route
            path='/signup'
            element={<SignUp />}
          />
          <Route
            path='/profile'
            element={<Profilepage />}
          />
          <Route
            path='/addTrip'
            element={<PlanTrip />}
          />
        </Routes>
      </Router>
    </ApolloProvider>
    // <div>
    //   <h1 className="text-3xl font-bold text-blue-500">
    //     TripsToGo
    //   </h1>,
    //   <div className='signin'>
    //     <SignIn/>
    //   </div>,
    //   <div className='signup'>
    //     <SignUp/>
    //   </div>
    // </div>
  );
}

export default App;