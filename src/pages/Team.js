import React from 'react';
import '../styles/Team.css';

const Team = () => {
  const faculty = [
    {
      name: 'Anand Kumar',
      subject: 'Science & Physics',
      bio: 'Highly experienced in simplifying core science concepts for middle and high school students.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
      experience: '15+ Years'
    },
    {
      name: 'Priya Sharma',
      subject: 'Mathematics',
      bio: 'Specialist in making Maths fun and removing exam fear through intense practice sessions.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
      experience: '12 Years'
    },
    {
      name: 'Rajesh Verma',
      subject: 'Social Studies & English',
      bio: 'Expert in comprehensive reading, creative writing, and board exam presentation techniques.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
      experience: '20+ Years'
    },
    {
      name: 'Neha Gupta',
      subject: 'Primary & Foundation',
      bio: 'Dedicated to building strong foundational academic skills for LKG to 5th standard students.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
      experience: '10 Years'
    },
    {
      name: 'Amit Patel',
      subject: 'Chemistry & Biology',
      bio: 'Mentoring 11th and 12th board students for maximum scores with structured revisions.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1974&auto=format&fit=crop',
      experience: '8 Years'
    },
    {
      name: 'Kavita Iyer',
      subject: 'Hindi Language',
      bio: 'Fluent Hindi linguist training students in grammar, literature, and spoken fluency.',
      image: 'https://images.unsplash.com/photo-1598550874175-4d0ef43ce5bb?q=80&w=1976&auto=format&fit=crop',
      experience: '7 Years'
    }
  ];

  return (
    <div className="faculty-page">
      <div className="faculty-header">
        <h1>Learn from Experienced Faculty</h1>
        <p>Our stellar teachers are the backbone of our students' outstanding board results. Meet our expert educators.</p>
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
        <h2>Experience our teaching firsthand</h2>
        <p>Join a free demo class to witness our effective teaching methods.</p>
        <a href="https://wa.me/0000000000?text=Hi%2C%20I%20saw%20Achievers%20Academy%20online.%20I%20want%20to%20know%20about%20classes." className="btn btn-primary pulse-btn">Book Free Demo</a>
      </div>
    </div>
  );
};

export default Team;
