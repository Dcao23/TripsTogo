import React, { useState } from "react";
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../../utils/mutations'
import { checkPassword, validateEmail } from "../../utils/helpers";
import AuthService from "../../utils/auth";
import { Link } from "react-router-dom";
function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { error, data }] = useMutation(LOGIN_USER)

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    return name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({
        variables: { email, password }
      })

      console.log(data.login.token)

      AuthService.login(data.login.token)

      setEmail("");
      setPassword("");
    } catch (e) {
      console.error(e)
    }

  };

  return (
    <div className="form bg-blue-500">
      <h2>Log In</h2>
      <form>
        <fieldset>
          <label>
            <p>Email</p>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="text"
              placeholder="Email"
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
            />
          </label>
          <button type="submit" onClick={handleFormSubmit}>
            Log In
          </button>
        </fieldset>
      </form>
      <p>No account?</p>
      <Link to='/signup'> <button>SignUp</button></Link>
    </div>
  );
}

export default LogIn;