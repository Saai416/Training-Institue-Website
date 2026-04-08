import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Excel Institute, I am ${formData.name}. I am interested in exploring the ${formData.course} course. My contact number is ${formData.phone}. Please connect with me!`;
    const whatsappUrl = `https://wa.me/910000000000?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Let's Connect and Build Your Career</h1>
        <p>Whether you need career counseling or course details, our expert advisors are here to help.</p>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          {/* Form Section */}
          <div className="contact-form-section glass-form">
            <h2>Book a Free Consultation</h2>
            <p>Fill out the form below and we will automatically direct you to a WhatsApp chat with our counselor.</p>
            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Course Interest</label>
                <select name="course" value={formData.course} onChange={handleChange} required>
                  <option value="" disabled>Select a course</option>
                  <option value="NEET">NEET Exellence</option>
                  <option value="JEE">JEE Advanced</option>
                  <option value="MERN Stack">Full Stack Web Dev</option>
                  <option value="Data Science">Data Science & AI</option>
                  <option value="Foundation">Foundation (Class 9-10)</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Connect via WhatsApp <span className="wa-icon-small">📱</span>
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="contact-info-section">
            <div className="info-card">
              <h3>Visit Our Campus</h3>
              <div className="info-item">
                <span className="icon">📍</span>
                <p>123 Excel Tower, Knowledge Park, Chennai, Tamil Nadu, India 600001</p>
              </div>
              <div className="info-item">
                <span className="icon">📧</span>
                <p>admissions@excelinstitute.com</p>
              </div>
              <div className="info-item">
                <span className="icon">📞</span>
                <p>+91 00000 00000 (Toll Free)</p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250821.57962919376!2d80.05201115858694!3d13.047814981105953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Excel Institute Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
