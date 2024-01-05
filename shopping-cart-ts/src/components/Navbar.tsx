import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CiShop } from "react-icons/ci";

import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="links">
        <Link to="/">
          <CiShop  className="navbar-logo" />
        </Link>
        <Link to="/cart">
          <FaCartShopping  className="navbar-logo" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
