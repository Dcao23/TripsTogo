
import React, { useState } from "react";
function SignIn() {

    const [userName, setUserName] = useState('');
    const [password, setPassword]= useState('');
  
      const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = e.target;
  
      
      return name === 'userName' ? setUserName(value) : setPassword(value);
    };
  
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
                    />
                </label>
                <label>
                    <p>password</p>
                    <input 
                    value={password}
                    password="password"
                    onChange={handleInputChange} 
                    type="text"
                    placeholder="Password"
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