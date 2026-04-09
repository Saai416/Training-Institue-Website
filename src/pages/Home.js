import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import '../styles/Home.css';

const Home = () => {

  const stats = [
    { number: '10,000+', label: 'Students Trained' },
    { number: '95%', label: 'Success Rate' },
    { number: '50+', label: 'Expert Faculty' },
    { number: '500+', label: 'Top Rankings' }
  ];

  const features = [
    {
      title: 'Experienced Faculty',
      description: 'Learn from highly qualified teachers dedicated to comprehensive academic improvement.'
    },
    {
      title: 'Small Batch Sizes',
      description: 'Limited students per batch ensuring a focused, distraction-free environment.'
    },
    {
      title: 'Individual Attention',
      description: 'Personalized mentoring to identify strengths and clarify concepts for every student.'
    },
    {
      title: 'Proven Board Results',
      description: 'Our students consistently secure top marks in CBSE and State Board examinations.'
    }
  ];

  return (
    <div className="home">
      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/0000000000?text=Hi%2C%20I%20saw%20Achievers%20Academy%20online.%20I%20want%20to%20know%20about%20classes." className="whatsapp-floating pulse" target="_blank" rel="noreferrer">
        <span className="wa-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </span>
      </a>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content fade-in-up">
          <div className="hero-text glass-panel">
            <h1>Boost Your Child's Academic Success</h1>
            <p>A trusted tuition centre in Chennai for CBSE & State Board. We provide concept clarity, personal attention, and proven exam results to help your child excel.</p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary primary-cta">Call Now</Link>
              <a href="https://wa.me/0000000000?text=Hi%2C%20I%20saw%20Achievers%20Academy%20online.%20I%20want%20to%20know%20about%20classes." className="btn btn-secondary secondary-cta">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="counter">{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="differences">
        <div className="container">
          <h2>Why Choose Achievers Academy?</h2>
          <p>We provide the ultimate learning environment tailored for outstanding board and school performance.</p>
          <div className="differences-grid">
            {features.map((feature, index) => (
              <div key={index} className="difference-card glass-card">
                <div className="feature-icon">✨</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-badges">
        <div className="container">
          <h3>Certified & Top Rated</h3>
          <div className="badges-grid">
            <div className="badge">🏆 #1 Excellence Award</div>
            <div className="badge">⭐ 4.9/5 Student Rating</div>
            <div className="badge">🎓 ISO Certified Institute</div>
            <div className="badge">💼 100% Educational Support</div>
          </div>
        </div>
      </section>

      {/* Document Download / Brochure CTA */}
      <section className="cta-section">
        <div className="cta-content glass-panel">
          <h2>Download Our Comprehensive Syllabus & Brochure</h2>
          <p>Get all the details about our curriculum, faculty, and past results.</p>
          <button className="btn btn-primary dwn-btn">📄 Download Brochure</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
