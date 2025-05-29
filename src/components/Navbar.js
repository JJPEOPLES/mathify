import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Mathify</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/topics" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Topics
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/practice" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Practice
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calculator" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Calculator
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;