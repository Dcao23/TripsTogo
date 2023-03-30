import React, { useState } from "react";

function SignUp() {


return (
    <div className="form bg-white">
        <h2>SignUp</h2>
        <form>
            <fieldset>
                <label>
                    <p>username</p>
                    <input username="username" />
                </label>
                <label>
                    <p>email</p>
                    <input email="email" />
                </label>
                <label>
                    <p>password</p>
                    <input password="password" />
                </label>
                <button type="submit">Sign In</button>
            </fieldset>
        </form>
        <p>Have an account already?</p>
        <button>Log In</button>
    </div>
)
}

export default SignUp;