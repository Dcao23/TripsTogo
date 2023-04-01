import React, { useState } from "react";
import { checkPassword, validateEmail  } from "../utils/helpers";
function SignIn() {
    const[error, setError] = useState({})
    const[submission, setSubmission]=useState(false)
    const show_Error_Msg = (name)=>
    name === show_Error_Msg.name && (<div className="error">{show_Error_Msg}</div>)
    const [userName, setUserName] = useState('');
    const [password, setPassword]= useState('');
  
      const handleInputChange = (e) => {

      const { name, value } = e.target;
  
      
      return name === 'userName' ? setUserName(value) : setPassword(value);
    };

    const render =(
        <div>

        </div>
    )
  
    const handleFormSubmit = (e) => {
      
      e.preventDefault();
      
      alert(`Hello ${userName}`);
      setUserName('');
      setPassword('')
    };

  

return (
    <div className="form bg-blue-500">
        <h2>Sign In</h2>
        <form>
            <fieldset>
                <label>
                    <p>Username</p>
                    <input 
                    value={userName}
                    name="userName" 
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Username"
                    {...show_Error_Msg("userName")}
                    />
                </label>
                <label>
                    <p>password</p>
                    <input 
                    value={password}
                    name="password"
                    onChange={handleInputChange} 
                    type="text"
                    placeholder="Password"
                    {...show_Error_Msg("password")}
                    />
                    
                </label>
                <button type="submit" onClick={handleFormSubmit}>Sign In</button>
            </fieldset>
        </form>
        <p>No account?</p>
        <button>SignUp</button>
    </div>
)
}

export default SignIn;