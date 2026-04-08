import React, { useState } from 'react';
import '../styles/FAQs.css';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is your consultation fee?',
      answer: 'Our initial consultation is completely free. We offer a comprehensive assessment of your case without any obligation.'
    },
    {
      question: 'How long have you been practicing law?',
      answer: 'Our firm has been serving clients since 1991, with over 120 combined years of legal experience across all practice areas.'
    },
    {
      question: 'Do you handle cases outside of Ontario?',
      answer: 'Yes, we have experience with cases across Canada and can provide referrals to trusted partners in other jurisdictions.'
    },
    {
      question: 'What payment options do you offer?',
      answer: 'We offer flexible fee arrangements including hourly rates, flat fees, and contingency fees depending on the case type.'
    },
    {
      question: 'How often will I hear from my lawyer?',
      answer: 'We believe in regular communication. You\'ll receive updates on your case and a lawyer will personally answer your calls and emails.'
    },
    {
      question: 'What areas of law do you specialize in?',
      answer: 'We specialize in Corporate Law, Real Estate Law, Personal Injury, Criminal Defense, Immigration Law, and Employment Law.'
    },
    {
      question: 'Can you represent me in court?',
      answer: 'Yes, our experienced attorneys have extensive courtroom experience and are fully qualified to represent you in all proceedings.'
    },
    {
      question: 'What should I bring to my consultation?',
      answer: 'Please bring any relevant documents, contracts, correspondence, or evidence related to your case for review.'
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
