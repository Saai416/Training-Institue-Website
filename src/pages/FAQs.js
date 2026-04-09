import React, { useState } from 'react';
import '../styles/FAQs.css';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What classes do you offer tuitions for?',
      answer: 'We offer tuitions for LKG to 12th standard, covering both CBSE and State Board curriculum.'
    },
    {
      question: 'What are your batch sizes?',
      answer: 'We maintain small batch sizes to ensure individual attention and concept clarity for every student.'
    },
    {
      question: 'Do you provide trial classes?',
      answer: 'Yes, we offer free trial/demo classes. Please contact us on WhatsApp to schedule yours.'
    },
    {
      question: 'What subjects do you specialize in?',
      answer: 'We specialize in Mathematics, Science (Physics, Chemistry, Biology), English, Hindi, and Social Studies.'
    },
    {
      question: 'Where are you located?',
      answer: 'We are conveniently located at No 11, Murugappa St, Muthiyal Reddy Nagar, Vanuvampet, Madipakkam, Chennai – making it easy for nearby students to attend safely.'
    },
    {
      question: 'How do you track student progress?',
      answer: 'We conduct regular weekly assessments and provide monthly progress reports to parents to ensure academic improvement.'
    },
    {
      question: 'Are your teachers qualified?',
      answer: 'Absolutely. All our teachers are highly experienced and specialize in their respective subjects to deliver top-notch education.'
    },
    {
      question: 'What are your timings?',
      answer: 'We operate mostly in the evenings from 4:00 PM to 9:00 PM to accommodate regular school hours.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-page">
      <section className="faqs-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our services and how we can help you.</p>
        </div>
      </section>

      <section className="faqs-section">
        <div className="container">
          <div className="faqs-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="toggle-icon">{activeIndex === index ? '−' : '+'}</span>
                </button>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
