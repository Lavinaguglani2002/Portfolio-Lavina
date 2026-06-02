

import React, { useState } from "react";
import LOGOO from "./LOGOO.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="custom-navbar">
      <div className="nav-container">

        {/* LOGO */}
        <div className="logo-section">
          <img src={LOGOO} alt="logo" className="logo-img" />
        </div>

        {/* MENU ICON */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>

          <li onClick={closeMenu}>
            <a href="/">
              <i className="fa fa-home"></i> Home
            </a>
          </li>

          <li onClick={closeMenu}>
            <a href="/about">
              <i className="fa fa-user"></i> About
            </a>
          </li>

          <li onClick={closeMenu}>
            <a href="/skills">
              <i className="fa fa-code"></i> Skills
            </a>
          </li>

          <li onClick={closeMenu}>
            <a href="/project">
              <i className="fas fa-project-diagram"></i> Projects
            </a>
          </li>

          <li onClick={closeMenu}>
            <a href="/contact">
              <i className="fa fa-envelope"></i> Contact
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;