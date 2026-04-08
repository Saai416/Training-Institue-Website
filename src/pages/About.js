import React from 'react';
import '../styles/About.css';

const About = () => {
  const testimonials = [
    {
      text: "Excel Institute completely transformed my preparation strategy. The faculty's personal attention and rigorous test series helped me secure my dream rank in NEET.",
      name: "Aditya Verma",
      outcome: "AIR 15, NEET 2023",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop"
    },
    {
      text: "The programming bootcamp was intense, but exactly what I needed. I went from zero coding knowledge to placing at Amazon within 8 months.",
      name: "Sneha Kapoor",
      outcome: "SDE at Amazon",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
      text: "I struggled with JEE Advanced physics until I joined Excel. Their unique conceptual approach makes even the toughest problems solvable.",
      name: "Rahul Desai",
      outcome: "IIT Bombay, CS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  const milestones = [
    { year: "2010", text: "Founded with a vision to redefine competitive exam preparation." },
    { year: "2015", text: "Produced our first Top 10 All India Rankers in Engineering and Medicine." },
    { year: "2018", text: "Expanded into IT coding bootcamps and achieved 100% placement records." },
    { year: "2023", text: "Crossed 50,000+ total students mentored with an industry-leading success rate." }
  ];

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>Empowering Minds, Shaping Futures</h1>
          <p>Excel Institute is a premier educational platform dedicated to helping ambitious students achieve their academic and professional dreams.</p>
        </div>
      </div>

      <div className="about-content">
        <section className="mission-section">
          <div className="mission-text">
            <h2>Our Mission & Vision</h2>
            <p>Our mission is to provide world-class education through exceptional educators, innovative teaching methodologies, and a competitive yet nurturing environment.</p>
            <p>We envision a future where high-quality education is the standard, enabling students across the country to unlock their true potential and lead the way in their chosen fields.</p>
          </div>
          <div className="mission-image">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" alt="Students studying" />
          </div>
        </section>

        <section className="timeline-section">
          <h2>Our Journey to Excellence</h2>
          <div className="timeline">
            {milestones.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-text">{item.text}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="testimonials-section">
        <div className="testimonials-header">
          <h2>Student Testimonials</h2>
          <p>Hear from the students who chose Excel Institute and achieved their dreams.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <div key={index} className="testimonial-card">
              <p className="test-text">"{test.text}"</p>
              <div className="test-author">
                <img src={test.image} alt={test.name} />
                <div className="test-author-info">
                  <h4>{test.name}</h4>
                  <span>{test.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
