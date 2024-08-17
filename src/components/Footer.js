import React from 'react';
import './Footer.css';
import Logo2 from '../assets/logo2.png';
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-left">
          <img src={Logo2} alt="Logo" className="footer-logo" />
          <p className="footer-description">A dedicated team committed to providing our clients peace of mind with innovative business solutions on a highly secure platform.   </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram-square"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube-square"></i>
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-column">
            <h4>Product</h4>
            <a href="/link1">Features</a>
            <a href="/link2">Pricing</a>
            <a href="/link3">Resources</a>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <a href="/link4">About</a>
            <a href="/link5">Vision</a>
            <a href="/link6">Our Values</a>
            <a href="/link6">Contact us</a>
            <a href="/link6">Careers</a>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <a href="/link7">Getting Started</a>
            <a href="/link8">Help Center</a>
            <a href="/link9">Request Support</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>
          Copyright © 2024 Mocha | All Rights Reserved |{' '}
          <a href="/terms-and-conditions">Terms and Conditions</a> |{' '}
          <a href="/privacy-policy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
