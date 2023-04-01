import React, { useState } from "react";
import { checkPassword, validateEmail } from "../../utils/helpers";

function SignUp() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {
      
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'userName') {
        setUserName(inputValue);
      } else {
        setPassword(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
      
      e.preventDefault();

      console.log(password)
  
      
      if (!validateEmail(email) || !userName) {
        setErrorMessage('Email or username is invalid');
        
        return;
        
      }
      else if (!checkPassword(password)) {
        setErrorMessage(
          `Choose a more secure password for the account: ${userName}`
        );
        return;
      }
      alert(`Hello ${userName}`);
  
      setUserName('');
      setPassword('');
      setEmail('');
    };
    


return (
    <div className="form bg-white">
        <h2>SignUp</h2>
        <form>
            <fieldset>
                <label>
                    <p>username</p>
                    <input 
                        value={userName}
                        name="userName" 
                        onChange={handleInputChange}
                        type="text"
                        placeholder="username"
                    />
                </label>
                <label>
                    <p>email</p>
                    <input 
                        value={email}
                        name="email" 
                        onChange={handleInputChange}
                        type="email"
                        placeholder="email"
                    />
                </label>
                <label>
                    <p>password</p>
                    <input 
                        value={password}
                        name="password"
                        onChange={handleInputChange}
                        type="password"
                        placeholder="password" 
                    />
                </label>
                <button type="submit" onClick={handleFormSubmit}>Sign Up</button>
            </fieldset>
        </form>
        {errorMessage && (
            <div>
                <p className="error-message">{errorMessage}</p>
            </div>
        )}
        <p>Have an account already? Log in.</p>
        <button>Log In</button>
    </div>
)
}

export default SignUp;