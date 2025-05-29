import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Mathify</h3>
          <p className="footer-description">
            A comprehensive platform for learning mathematics at all levels.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/practice">Practice</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <ul className="footer-links">
            <li>
              <a href="mailto:contact@mathify.k2lang.org">contact@mathify.k2lang.org</a>
            </li>
            <li>
              <a href="https://github.com/yourusername/mathify" target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Mathify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;