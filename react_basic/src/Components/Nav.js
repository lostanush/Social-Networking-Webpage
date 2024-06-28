import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
