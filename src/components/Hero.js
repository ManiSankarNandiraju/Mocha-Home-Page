import React from 'react';
import './Hero.css'; // Make sure to import your CSS file
import HeroImage from '../assets/HeroImages.png';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1>Effortless GST Compliant Invoicing</h1>
          <p>Mocha Accounting software accurately assigns applicable taxes, generates professional, customized invoices, and generates automated reminders to save you valuable time.</p>
          <button className="hero-button">
            Try for FREE NOW <i className="fas fa-arrow-right"></i>
          </button>
          <span className="hero-button-text">No Credit Card Required</span>
        </div>
        <div className="hero-right">
          <img src={HeroImage} alt="Illustration of Mocha Accounting software" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
