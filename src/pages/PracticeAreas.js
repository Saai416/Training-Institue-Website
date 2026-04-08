import React from 'react';
import '../styles/PracticeAreas.css';

const PracticeAreas = () => {
  const courses = [
    {
      title: 'NEET Excellence Program',
      description: 'Comprehensive 2-year classroom program for medical aspirants with intensive coaching and test series.',
      badge: 'Bestseller',
      icon: '🩺'
    },
    {
      title: 'JEE Advanced Batch',
      description: 'Rigorous training program designed for engineering aspirants focusing on advanced problem-solving.',
      badge: 'Top Rated',
      icon: '📐'
    },
    {
      title: 'Full-Stack Web Development',
      description: 'Master MERN stack with real-world projects and build a competitive portfolio for tech placements.',
      badge: 'New',
      icon: '💻'
    },
    {
      title: 'Data Science & Machine Learning',
      description: 'Learn Python, AI modeling, and big data to land high-paying roles in the analytics industry.',
      badge: 'Trending',
      icon: '📊'
    },
    {
      title: 'Foundation Course (Class 9 & 10)',
      description: 'Early preparation for competitive exams focusing on building strong fundamentals in Maths and Science.',
      badge: 'Core',
      icon: '🏫'
    },
    {
      title: 'Aptitude & Logical Reasoning',
      description: 'Essential training for company placements, entrance tests, and government exams.',
      badge: 'Placement',
      icon: '💡'
    }
  ];

  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>Transformative Training Programs</h1>
        <p>Explore our wide range of meticulously crafted courses designed to propel your career and academic journey.</p>
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
        <h2>Not sure which course is right for you?</h2>
        <p>Talk to our expert counselors today and get personalized guidance.</p>
        <a href="https://wa.me/910000000000" className="btn btn-primary primary-cta" target="_blank" rel="noreferrer">Request Career Counseling</a>
      </div>
    </div>
  );
};

export default PracticeAreas;
