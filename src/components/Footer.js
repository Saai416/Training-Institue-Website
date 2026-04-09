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
                <img src="/logo.png" alt="Achievers Academy Logo" style={{ width: '50px', height: '50px', marginRight: '15px' }} />
                <h2 style={{ marginBottom: 0 }}>ACHIEVERS ACADEMY</h2>
              </div>
              <p>Trusted tuition centre in Chennai for CBSE and State Board. If you are looking for the best 'CBSE tuition near me', your search ends here. We empower students with concept clarity and individual attention to boost exam results.</p>
              <div className="social-links">
                <a href="/" className="social-icon">📘</a>
                <a href="/" className="social-icon">🐦</a>
                <a href="/" className="social-icon">📸</a>
                <a href="/" className="social-icon">💼</a>
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
              <h3>Popular Tuition Classes</h3>
              <ul>
                <li><Link to="/courses">LKG to 5th Foundation</Link></li>
                <li><Link to="/courses">6th to 8th Concept Building</Link></li>
                <li><Link to="/courses">9th & 10th Board Prep</Link></li>
                <li><Link to="/courses">11th & 12th focused Tuitions</Link></li>
                <li><Link to="/courses">CBSE & State Board</Link></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3>Reach Us</h3>
              <p><strong>Location:</strong> No 11, Murugappa St, above Saravana Store, Muthiyal Reddy Nagar, Vanuvampet, Madipakkam, Chennai, Tamil Nadu 600091</p>
              <p><strong>Phone:</strong> +91 00000 00000</p>
              <p><strong>Email:</strong> info@achieversacademy.in</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Achievers Academy. All rights reserved.</p>
          <div className="footer-legal">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
