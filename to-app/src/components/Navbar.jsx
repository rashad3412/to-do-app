import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const onClick = () => {
    alert("Click Calendar below to update a new task.");
  };

  return (
    <nav className="nav">
      <div>
        <Link to="/" className="site-title" onClick={onClick}>
          TO-DO
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
