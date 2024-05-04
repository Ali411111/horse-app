import React from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
export default function NavBar() {
  const toggleHandler = () => {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("slide");
  };

  return (
    <nav className="navbar">
      <div className="Logo">
        <NavLink to="/" className="navbar-leftside">
          <img src="/images/logo.0b8d00dc33b5773961348211261b0a9b.svg" />
          <span className="navbar-leftside-text">ENBARR</span>
        </NavLink>
      </div>
      <ul>
        <li>
          <Link to="/about us" className="navbar-links">
            About us
          </Link>
        </li>
        <li>
          <Link to="/FAQ" className="navbar-links">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/contact us" className="navbar-links">
            Contact us
          </Link>
        </li>
      </ul>
      <div className="sign-up-login-button">
        <Link to="/sign up" className="navbar-login-btn">
          Sign up/Login
        </Link>
      </div>

      <div className="menu-toggle" onClick={toggleHandler}>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
