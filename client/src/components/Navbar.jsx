// src/components/Navbar.jsx
import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavBar.scss";

function NavBar() {
  const navRef = useRef();

  const toggleNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="logo">MySite</div>

      <nav ref={navRef} className="nav-links">
        <button className="nav-close-btn" onClick={toggleNav}>
          <FaTimes />
        </button>
        <a href="#courses">Courses</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <button className="auth-btn">Log in</button>
      </nav>

      <button className="nav-btn" onClick={toggleNav}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
