import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Achievers Academy Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
          ACHIEVERS ACADEMY
        </Link>
        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/courses" className="nav-link" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link to="/results" className="nav-link" onClick={() => setMenuOpen(false)}>Results</Link>
          <Link to="/faculty" className="nav-link" onClick={() => setMenuOpen(false)}>Faculty</Link>
          <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="nav-btn demo-btn" onClick={() => setMenuOpen(false)}>Book Free Demo</Link>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar-contact">
        <div className="contact-item">
          <span>📧 info@achieversacademy.in</span>
        </div>
        <div className="contact-item">
          <span>📍 Madipakkam, Chennai</span>
        </div>
        <div className="contact-item">
          <span>⏰ Mon-Sat: 4:00 PM - 9:00 PM</span>
        </div>
        <div className="contact-item">
          <span>📞 +91 00000 00000</span>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
