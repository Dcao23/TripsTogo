import React, { useState } from "react";
import { checkPassword, validateEmail } from "../../utils/newhelpers";
import { CREATE_USER } from '../../utils/mutations'
import { useMutation } from '@apollo/client'
import AuthService from "../../utils/auth";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [addUser] = useMutation(CREATE_USER)

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log(password);

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or username is invalid");

      return;
    } else if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }


    try {
     const {data} = await addUser({
        variables: {
          username: userName,
          email,
          password
        }
      })

      AuthService.login(data.login.token)
    } catch (e) {
      console.error(e)
    }

    setUserName("");
    setPassword("");
    setEmail("");
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
          <button type="submit" onClick={handleFormSubmit}>
            Sign Up
          </button>
        </fieldset>
      </form>
      {errorMessage && (
        <div>
          <p className="error-message">{errorMessage}</p>
        </div>
      )}
      <p>Have an account already? Log in.</p>
      <Link to='/login'><button>Log In</button></Link>
    </div>
  );
}

export default SignUp;
