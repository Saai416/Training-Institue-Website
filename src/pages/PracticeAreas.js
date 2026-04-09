import React from 'react';
import '../styles/PracticeAreas.css';

const PracticeAreas = () => {
  const courses = [
    {
      title: 'Pre-Primary & Primary',
      description: 'Classes LKG to 5th. Building strong foundational skills in English, Maths, and Environmental Sciences.',
      badge: 'Core',
      icon: '🧒'
    },
    {
      title: 'Middle School',
      description: 'Classes 6th to 8th. Focus on concept clarity and developing analytical skills across all main subjects.',
      badge: 'Popular',
      icon: '📚'
    },
    {
      title: 'High School (Board Prep)',
      description: 'Classes 9th & 10th. Intensive coaching for CBSE and State Board examinations to ensure top scores.',
      badge: 'Top Rated',
      icon: '🎓'
    },
    {
      title: 'Higher Secondary',
      description: 'Classes 11th & 12th. Specialized board classes for Maths, Physics, Chemistry, Biology & Commerce streams.',
      badge: 'Expert',
      icon: '🔬'
    },
    {
      title: 'Maths Special',
      description: 'Targeted practice and advanced problem-solving techniques specifically designed to remove the fear of Maths.',
      badge: 'Focused',
      icon: '📐'
    },
    {
      title: 'Languages',
      description: 'Expert coaching in English and Hindi to improve fluency, comprehensive reading, and creative writing.',
      badge: 'Essential',
      icon: '✍️'
    }
  ];

  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>CBSE & State Board Tuitions</h1>
        <p>Explore our meticulous tuition classes designed for LKG to 12th standard, covering key subjects like Maths, Science, English, and Hindi.</p>
      </div>

      <div className="courses-container">
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card fade-in">
              <div className="course-badge">{course.badge}</div>
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-ctas">
                <button className="btn btn-outline">View Details</button>
                <button className="btn btn-enroll">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="courses-footer">
        <h2>Not sure which program fits your child?</h2>
        <p>Talk to our expert teachers today and get personalized guidance.</p>
        <a href="https://wa.me/0000000000?text=Hi%2C%20I%20saw%20Achievers%20Academy%20online.%20I%20want%20to%20know%20about%20classes." className="btn btn-primary primary-cta" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
      </div>
    </div>
  );
};

export default PracticeAreas;
