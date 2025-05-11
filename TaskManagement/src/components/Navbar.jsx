import React from "react";
import { Link } from "react-router-dom"; // Use Link for navigation
import "../Styles/Navbar.css"; // Include any required styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        {/* About Link */}
        <li><Link to="/about">About</Link></li>

        {/* Login Button that links to the Login page */}
        <li><Link to="/login" className="login-btn">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
