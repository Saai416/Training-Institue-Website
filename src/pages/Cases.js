import React, { useEffect, useState, useRef } from 'react';
import '../styles/Cases.css';

const Cases = () => {
  const highlightResults = [
    { rank: 'School Rank 1', exam: 'CBSE 10th', name: 'Aarav Sharma', score: '98.5%' },
    { rank: 'District Top', exam: 'State Board 12th', name: 'Rohan Gupta', score: '585/600' },
    { rank: 'A1 Grade', exam: 'CBSE Maths', name: 'Sanya Verma', score: '100/100' },
    { rank: 'Full Marks', exam: 'Class 8 Science', name: 'Karan Singh', score: 'A+' }
  ];

  return (
    <div className="results-page">
      <div className="results-header">
        <h1>Consistent Top Performers.</h1>
        <p>Year after year, Achievers Academy students score top marks and gain subject mastery in CBSE and State Board exams.</p>
      </div>

      <div className="results-container">
        <div className="hall-of-fame">
          <h2>🏆 Hall of Fame</h2>
          <div className="achievers-grid">
            {highlightResults.map((result, index) => (
              <div key={index} className="achiever-card slide-up">
                <div className="achiever-avatar">
                  {result.name.charAt(0)}
                </div>
                <h3>{result.name}</h3>
                <div className="achiever-stats">
                  <span className="rank-badge">{result.rank}</span>
                  <span className="exam-text">{result.exam}</span>
                  <span className="score-text">Score: {result.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="results-counters">
          <h2>Our Legacy in Numbers</h2>
          <div className="counters-wrapper">
            <Counter value={50000} label="Students Mentored" prefix="+" />
            <Counter value={1500} label="Top 100 Ranks" prefix="+" />
            <Counter value={98} label="Success Rate" prefix="%" isRight />
            <Counter value={25} label="Cities Covered" prefix="+" />
          </div>
        </div>
      </div>

      <div className="results-cta">
        <h2>Ready to boost your child's academic performance?</h2>
        <a href="https://wa.me/0000000000?text=Hi%2C%20I%20saw%20Achievers%20Academy%20online.%20I%20want%20to%20know%20about%20classes." className="btn btn-primary pulse-btn">Join Achievers Academy</a>
      </div>
    </div>
  );
};

// Animated Counter Component
const Counter = ({ value, label, prefix, isRight }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const end = parseInt(value);
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            clearInterval(timer);
            setCount(end);
          } else {
            setCount(Math.round(start));
          }
        }, 16);
        observer.disconnect();
      }
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="counter-item glass-box" ref={counterRef}>
      <div className="counter-number">
        {isRight ? '' : '+'}{count}{isRight ? prefix : ''}
      </div>
      <div className="counter-label">{label}</div>
    </div>
  );
};

export default Cases;
