import React, { useState } from "react";
import "./Navbar.css";
import dpImage from "./dp.jpeg"; // Adjust path as needed


function ResponsiveNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = ["Products", "Pricing", "Subjects"];
  const settings = ["Profile", "Account", "Dashboard", "Logout", "Login"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          HOME
        </a>

        <button className="menu-icon" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {pages.map((page) => (
            <li key={page}>
              <a href={`/${page.toLowerCase()}`} className="nav-item">
                {page}
              </a>
            </li>
          ))}
        </ul>

        <div className="user-menu">
          <img
            src={dpImage}
            alt="user avatar"
            className="avatar"
            onClick={toggleMenu}
          />
          <ul className={`dropdown-menu ${isMenuOpen ? "open" : ""}`}>
            {settings.map((setting) => (
              <li key={setting}>
                <a href={`/${setting.toLowerCase()}`} className="dropdown-item">
                  {setting}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ResponsiveNavBar;
