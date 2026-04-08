import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-info">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img src="/logo.png" alt="Excel Institute Logo" style={{ width: '50px', height: '50px', marginRight: '15px' }} />
                <h2 style={{ marginBottom: 0 }}>EXCEL INSTITUTE</h2>
              </div>
              <p>Top-tier education for competitive exams and tech placements. Empowering students with the skills and knowledge to succeed globally.</p>
              <div className="social-links">
                <a href="#" className="social-icon">📘</a>
                <a href="#" className="social-icon">🐦</a>
                <a href="#" className="social-icon">📸</a>
                <a href="#" className="social-icon">💼</a>
              </div>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">All Courses</Link></li>
                <li><Link to="/faculty">Meet the Faculty</Link></li>
                <li><Link to="/results">Our Results</Link></li>
                <li><Link to="/about">About Us</Link></li>
              </ul>
            </div>

            <div className="footer-courses">
              <h3>Popular Courses</h3>
              <ul>
                <li><Link to="/courses">NEET Preparation</Link></li>
                <li><Link to="/courses">JEE Mains & Advanced</Link></li>
                <li><Link to="/courses">MERN Stack Bootcamp</Link></li>
                <li><Link to="/courses">Data Science Masterclass</Link></li>
                <li><Link to="/courses">Class 9-10 Foundation</Link></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3>Reach Us</h3>
              <p><strong>Head Office:</strong> 123 Excel Tower, Knowledge Park, Chennai , Tamil Nadu, India 600001</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Email:</strong> [EMAIL_ADDRESS]</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Excel Institute. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
