import React from 'react';
import '../styles/About.css';

const About = () => {
  const testimonials = [
    {
      text: "Achievers Academy completely transformed my child's preparation strategy. The faculty's personal attention helped my son score 95% in his CBSE 10th boards.",
      name: "Aditya Verma (Parent)",
      outcome: "CBSE 10th - 95%",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop"
    },
    {
      text: "The small batch sizes and focus on concept clarity made a huge difference. Highly recommend Achievers Academy to all students and parents.",
      name: "Sneha Kapoor (Parent)",
      outcome: "State Board 12th Top Scorer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
      text: "I struggled with Mathematics until I joined here. Their unique teaching style makes even the toughest problems solvable, removing my fear completely.",
      name: "Rahul Desai",
      outcome: "Class 9 Student",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  const milestones = [
    { year: "2010", text: "Founded with a vision to redefine after-school tuitions." },
    { year: "2015", text: "Produced our first batch of School Toppers in CBSE and State Board." },
    { year: "2018", text: "Expanded to higher secondary tuitions focusing on comprehensive board prep." },
    { year: "2023", text: "Crossed 5,000+ total students mentored with a consistent record of academic improvement." }
  ];

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>Chennai's Most Trusted Tuition Centre</h1>
          <p>Achievers Academy is dedicated to helping CBSE & State Board students achieve academic excellence through personalized attention.</p>
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
          <h2>Parent & Student Testimonials</h2>
          <p>Hear from the families who chose Achievers Academy and achieved their academic goals.</p>
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
