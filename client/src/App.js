import logo from './logo.svg';
import './App.css';
import SignIn from './components/LoginForm/signIn'
import SignUp from './components/LoginForm/signUp';
function App() {
  return (
    <h1 className="text-3xl font-bold text-blue-500">
      TripsToGo
    </h1>,
    <div className='signin'>
      <SignIn/>
    </div>,
    <div className='signup'>
      <SignUp />
    </div>
  );
}

export default App;
