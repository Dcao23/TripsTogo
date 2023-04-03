import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="Header">
      <nav>
        <li>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/">My Trips</Link>
        </li>
        <li>
          <Link to="/">Plan a trip</Link>
        </li>
      </nav>

      <Link className="profile-avatar" to="/SignIn">
        JC
      </Link>
    </div>
  );
};