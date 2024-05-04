import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { PiBellThin } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import "./NavbarHome.css";
export default function NavbarHome() {
  const toggleHandler = () => {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("slide");
  };

  return (
    <>
      <nav className="navBar">
        <div className="logo">
          <NavLink to="/home" className="navbar-leftside">
            <img src="/images/logo.0b8d00dc33b5773961348211261b0a9b.svg" />
            <span className="navbar-leftside-text">ENBARR</span>
          </NavLink>
        </div>

        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Messages">Messages</NavLink>
          </li>
          <li>
            <NavLink to="/MyFavoriteHourse">My Horses</NavLink>
          </li>
          <li>
            <NavLink to="/Setting">Settings</NavLink>
          </li>
        </ul>
        <div className="right-side-icons">
          <button className="navbar-home-icon">
            <IoSearchOutline />
          </button>
          <NavLink to="/notifications" className="navbar-home-icon">
            <PiBellThin />
          </NavLink>
          <NavLink to="/Setting/profile">
            <img
              src="/images/profileimage.713a51c0eb709f20c441.png"
              className="navbar-home-img"
            />
          </NavLink>
        </div>

        <div className="menu-toggle" onClick={toggleHandler}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
}
