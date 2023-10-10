import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const onClick = () => {
    alert("Add an Item to do below");
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
