import logo from './logo.svg';
import './App.css';
import SignIn from './components/signIn'
import SignUp from './components/signUp';
//import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
//import { Router } from 'express';

/*const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});*/

function App() {
  return (

  
    <div className='signup'>
      <SignIn />
    </div>


   /*<ApolloProvider client = {client}>
    <Router>
      <div className='flex-column justify-center align-center min-100-vh bg-primary'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/signin'
            element={<SignIn />}
          
          />
          <Route
            path='/signup'
            element={<SignUp/>}
          
          />
          <Route
          
          />

        </Routes>
      </div>
    </Router>
   </ApolloProvider>*/
  );
}

export default App;
