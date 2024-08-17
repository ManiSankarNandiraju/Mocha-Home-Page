// src/components/Instigations.js
import React from 'react';
import './Instigations.css';
import AwsLogo from '../assets/AWS.png';
import FinancialLogo from '../assets/Financial.png';

const Instigations = () => {
  return (
    <section className="instigations">
      <div className="instigations-content">
        <div className="instigations-text">
          <h2>Our Trusted Partners</h2>
        </div>
        <div className="instigations-logos">
          <img src={AwsLogo} alt="AWS Logo" />
          <img src={FinancialLogo} alt="Financial Logo" />
        </div>
      </div>
    </section>
  );
};

export default Instigations;
