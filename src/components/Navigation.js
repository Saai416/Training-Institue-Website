import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Excel Institute Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
          EXCEL INSTITUTE
        </Link>
        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/courses" className="nav-link">Courses</Link>
          <Link to="/results" className="nav-link">Results</Link>
          <Link to="/faculty" className="nav-link">Faculty</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-btn demo-btn">Book Free Demo</Link>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar-contact">
        <div className="contact-item">
          <span>📧 info@excelinstitute.com</span>
        </div>
        <div className="contact-item">
          <span>📍 Chennai, Tamil Nadu</span>
        </div>
        <div className="contact-item">
          <span>⏰ Mon-Sat: 8:00 AM - 8:00 PM</span>
        </div>
        <div className="contact-item">
          <span>📞 +91 98765 43210</span>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
