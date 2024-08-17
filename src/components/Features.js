import React from 'react';
import './Features.css'; // Import the CSS file for styling
import RowImageOne from '../assets/image4.png'; // Replace with your actual image
import RowImageTwo from '../assets/image24.png'; // New image for the right box in row-box-two
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome

const Features = () => {
  return (
    <section className="features">
      <div className="row-box-one">
        <h1>FEATURES</h1>
        <div className="boxes-container">
          <div className="left-box">
            <img src={RowImageOne} alt="Feature" />
          </div>
          <div className="right-box">
            <div className="text-box">
              <h2>Professional Looking Personalized Invoices</h2>
              <p>Personalize your invoices to reflect your brand by adding your logo, changing colors, and fonts. Choose from a variety of templates with flexible options.</p>
            </div>
            <div className="text-box">
              <h2>Automated GST Compliance</h2>
              <p>Navigate the GST compliance maze with ease. Find and assign applicable tax rates to your products using our efficient HSN/SAC code search. Save time by generating e-invoices and filing GST online all in one place!</p>
            </div>
            <div className="text-box">
              <h2>Enjoy Steady Cashflows with Recurring Invoices</h2>
              <p>
                Do you run a subscription business or bill customers at regular intervals?
                No problem! <strong>MOCHA</strong> offers recurring invoices that can be easily set up for any frequency you desire.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row-box-two">
        <div className="left-box-two">
          <div className="text-container">
            <div className="horizontal-box">
              <h2>Manage Returns and Refunds</h2>
              <p>Handle customer returns and refunds with credit notes. Relax, because the 	next time you generate an invoice, we will notify you of any outstanding 	credit notes! </p>
            </div>
            <div className="horizontal-box">
              <h2>Get Paid on Time</h2>
              <p>Tired of chasing payments?  Mocha offers automated reminders for invoices. We will send them automated follow-ups, so you can save valuable time.</p>
            </div>
          </div>
        </div>
        <div className="right-box-two">
          <img src={RowImageTwo} alt="Feature" />
        </div>
      </div>

      <div className="button-on-the-z-axis">
        <button>Try for FREE NOW <i className="fas fa-arrow-right"></i></button>
      </div>
    </section>
  );
};

export default Features;
