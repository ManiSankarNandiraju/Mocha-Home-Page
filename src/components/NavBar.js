import React, { useState } from 'react';
import './NavBar.css';
import UserIcon from '../assets/user.png'; 
import VideoIcon from '../assets/video.png'; 
import Logo from '../assets/logo.png'; 

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" /> {/* Ensure this path is correct */}
      </div>
      <ul className="nav-links">
        <li
          className={activeLink === 'home' ? 'active' : ''}
          onClick={() => setActiveLink('home')}
        >
          Home
        </li>
        <li
          className={activeLink === 'features' ? 'active' : ''}
          onClick={() => setActiveLink('features')}
        >
          Features
        </li>
        <li
          className={activeLink === 'use-cases' ? 'active' : ''}
          onClick={() => setActiveLink('use-cases')}
        >
          Use Cases
        </li>
        <li
          className={activeLink === 'pricing' ? 'active' : ''}
          onClick={() => setActiveLink('pricing')}
        >
          Pricing
        </li>
        <li
          className={activeLink === 'resources' ? 'active' : ''}
          onClick={() => setActiveLink('resources')}
        >
          Resources
        </li>
        <li
          className={activeLink === 'about-us' ? 'active' : ''}
          onClick={() => setActiveLink('about-us')}
        >
          About Us
        </li>
        <li
          className={activeLink === 'contact-us' ? 'active' : ''}
          onClick={() => setActiveLink('contact-us')}
        >
          Contact Us
        </li>
      </ul>
      <div className="nav-buttons">
        <button className="signup-button">
          <img src={UserIcon} alt="User Icon" className="user-icon" /> Sign Up
        </button>
        <button className="demo-button">
          Schedule a Demo <img src={VideoIcon} alt="Video Icon" className="video-icon" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
