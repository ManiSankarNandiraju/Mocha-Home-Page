import React from 'react';
import icon1 from '../assets/Icon1.png';
import icon2 from '../assets/Icon2.png';
import icon3 from '../assets/Icon3.png';
import './Benefits.css';


const Benefits = () => {
  return (
    <section className="benefits">
      <h2 className="benefits-heading">Why MOCHA ?</h2>
      <div className="benefits-card">
        <div className="benefits-box">
          <img src={icon1} alt="Icon 1" className="benefits-icon" />
          <h3 className="benefits-title">Reduce Compliance Efforts</h3>
          <p className="benefits-text">Save big on time and resources with GST compliant invoices and online GST filing.</p>
        </div>
        <div className="benefits-box">
          <img src={icon2} alt="Icon 2" className="benefits-icon" />
          <h3 className="benefits-title">Keep Revenue Rolling</h3>
          <p className="benefits-text">Maintain a steady cashflow with automated invoice reminders and recurring invoices.</p>
        </div>
        <div className="benefits-box">
          <img src={icon3} alt="Icon 3" className="benefits-icon" />
          <h3 className="benefits-title">Insights for Business Success</h3>
          <p className="benefits-text">Track KPI and financial trends using Mocha’s Dashboard feature.</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
