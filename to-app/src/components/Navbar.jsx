import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <Link to="/" className="site-title">
          TO-DO
        </Link>
      </div>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
