import React from 'react';
import '../styles/Team.css';

const Team = () => {
  const faculty = [
    {
      name: 'Dr. Anand Kumar',
      subject: 'Physics Head',
      bio: 'Ex-IITian with 15+ years of experience in mentoring top 100 JEE rankers.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
      experience: '15+ Years'
    },
    {
      name: 'Priya Sharma',
      subject: 'Chemistry Expert',
      bio: 'Ph.D. in Organic Chemistry. Known for her unique mnemonic-based teaching style.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
      experience: '12 Years'
    },
    {
      name: 'Rajesh Verma',
      subject: 'Mathematics',
      bio: 'Author of bestselling mathematics guides. Specialized in advanced problem solving.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
      experience: '20+ Years'
    },
    {
      name: 'Dr. Neha Gupta',
      subject: 'Biology (Botany & Zoology)',
      bio: 'Former medical researcher turned educator. Instrumental in producing 50+ AIIMS selects.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
      experience: '10 Years'
    },
    {
      name: 'Amit Patel',
      subject: 'Computer Science',
      bio: 'Ex-Google SDE. Mentoring students for top placements in FAANG companies.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1974&auto=format&fit=crop',
      experience: '8 Years'
    },
    {
      name: 'Kavita Iyer',
      subject: 'Aptitude & Reasoning',
      bio: 'CAT 99.9%iler. Training students for competitive and placement exams.',
      image: 'https://images.unsplash.com/photo-1598550874175-4d0ef43ce5bb?q=80&w=1976&auto=format&fit=crop',
      experience: '7 Years'
    }
  ];

  return (
    <div className="faculty-page">
      <div className="faculty-header">
        <h1>Learn from the Core Experts</h1>
        <p>Our stellar faculty is the backbone of our outstanding results. Meet the mentors who will guide your journey.</p>
      </div>

      <div className="faculty-container">
        <div className="faculty-grid">
          {faculty.map((member, index) => (
            <div key={index} className="faculty-card">
              <div className="faculty-image-container">
                <img src={member.image} alt={member.name} />
                <div className="faculty-overlay">
                  <h4>{member.experience} Experience</h4>
                  <p>{member.bio}</p>
                </div>
              </div>
              <div className="faculty-info">
                <h3>{member.name}</h3>
                <span className="faculty-subject">{member.subject}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="faculty-cta">
        <h2>Experience their teaching firsthand</h2>
        <p>Join a free masterclass to witness our expert pedagogy.</p>
        <button className="btn btn-primary pulse-btn">Book Free Masterclass</button>
      </div>
    </div>
  );
};

export default Team;
