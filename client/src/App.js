import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/SignIn",
      element: (
        <div className="signin">
          <SignIn/>
        </div>
      ),
    },
    {
      path: "/SignUp",
      element: (
        <div className="signup">
          <SignUp/>
        </div>
      ),
    },
  ]);
  return (
<RouterProvider router={router}/>
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