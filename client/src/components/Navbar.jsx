// src/components/Navbar.jsx
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.scss';

const Navbar = () => {
    const navRef = useRef(null);

    const toggleNavbar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle('responsive_nav');
        }
    };

    return (
        <header className="navbar">
            <h2 className="logo">LOGO</h2>
            <nav ref={navRef} className="nav-links">
                <a href="#">About Us</a>
                <a href="#">Work with us</a>
                <a href="#">Contact</a>
                <button className="auth-btn"><a href="#">Log in</a></button>
                <button className="auth-btn"><a href="#">Sign up</a></button>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={toggleNavbar}
                    aria-label="Fechar menu"
                >
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={toggleNavbar}
                aria-label="Abrir menu"
            >
                <FaBars />
            </button>
        </header>
    );
};

export default Navbar;