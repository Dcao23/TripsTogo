import logo from './logo.svg';
import './App.css';
import SignIn from './components/signIn'
import SignUp from './components/signUp';
function App() {
  return (
    <h1 className="text-3xl font-bold text-blue-500">
      TripsToGo
    </h1>,
    <div className='signIn'>
      <SignIn/>
    </div>,
    <div className='signUp'>
      <SignUp />
    </div>
  );
}

export default App;
