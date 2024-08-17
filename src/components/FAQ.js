// src/components/FAQ.js
import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <section className="faq">
      <div className="faq-container">
        <h2 className="faq-heading">Questions ?</h2>
        <p className="faq-text">
          Please visit our {''}
          <a href="/faq" className="faq-link">
            Frequently Asked Questions page
          </a>{''}for more information.
        </p>
      </div>
    </section>
  );
};

export default FAQ;
