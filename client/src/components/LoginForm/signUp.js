import React, { useState } from "react";
import { checkPassword, validateEmail } from "../../utils/helpers";

function SignUp() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'userName') {
        setUserName(inputValue);
      } else {
        setPassword(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
      if (!validateEmail(email) || !userName) {
        setErrorMessage('Email or username is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
        // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
      }
      if (!checkPassword(password)) {
        setErrorMessage(
          `Choose a more secure password for the account: ${userName}`
        );
        return;
      }
      alert(`Hello ${userName}`);
  
      // If everything goes according to plan, we want to clear out the input after a successful registration.
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
                        name="username" 
                        onChange={handleInputChange}
                        type="text"
                        placeholder=""

                    />
                </label>
                <label>
                    <p>email</p>
                    <input 
                        value={email}
                        name="email" 
                        onChange={handleInputChange}
                        type="email"
                        placeholder=""
                    />
                </label>
                <label>
                    <p>password</p>
                    <input 
                        value={password}
                        name="password"
                        onChange={handleInputChange}
                        type="password"
                        placeholder="" 
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
        <p>Have an account already?</p>
        <button>Log In</button>
    </div>
)
}

export default SignUp;