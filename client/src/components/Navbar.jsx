// src/components/NavBar.jsx
import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

function NavBar() {
  const navRef = useRef();

  const toggleNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <h2>School X</h2>
        </Link>

        <nav ref={navRef} className="nav-links">
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button className="auth-btn">Log in</button>
          <button className="auth-btn">Sign up</button>

          {/* Close button (X) */}
          <button
            className="nav-btn nav-close-btn"
            onClick={toggleNav}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </nav>

        {/* Burger icon */}
        <button className="nav-btn" onClick={toggleNav} aria-label="Open menu">
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default NavBar;
