// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import Instigations from './components/Instigations';
import FAQ from './components/FAQ';
import ScheduleDemo from './components/ScheduleDemo';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Features />
      <Testimonials />
      <Benefits />
      <Instigations />
      <FAQ />
      <ScheduleDemo />
      <Footer />
    </div>
  );
};

export default App;
