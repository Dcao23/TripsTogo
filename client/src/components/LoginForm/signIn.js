import React, { useState } from "react";
function signIn() {

return (
    <div className="form bg-blue-500">
        <h2>Sign In</h2>
        <form>
            <fieldset>
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
        <p>No account?</p>
        <button>SignUp</button>
    </div>
)
}

export default signIn;