import React, { useState } from 'react';
import './Testimonials.css'; // Import the CSS file for styling
import image1 from '../assets/image3.png';
import image3 from '../assets/ImagePlaceholder.png';
import image2 from '../assets/ImagePlaceholder2.png';


const testimonialsData = [
  {
    image: image1,
    review: 'Mocha Accounting Software is easy to learn and simple to use and has more functionalities than other software in the market.',
    name: 'ANISHA HINDOCHA',
    position: 'Lawyer and Business Owner',
  },
  {
    image: image2,
    review: 'Mocha Accounting Software is easy to learn and simple to use and has more functionalities than other software in the market.',
    name: 'NIRMITI NIMKAR',
    position: 'Accountant',
  },
  {
    image: image3,
    review: 'Mocha Accounting Software is easy to learn and simple to use and has more functionalities than other software in the market.',
    name: 'BHUMISH SHETH',
    position: 'Entrepreneur',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="testimonials">
      <h2>What Our Clients Have To Say</h2>
      <div className="testimonial-box">
        <button className="arrow left" onClick={handlePrev}>
          &lt;
        </button>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${
              index === currentIndex ? 'highlighted' : ''
            }`}
          >
            <img
              src={testimonial.image}
              alt="Client"
              className="client-image"
            />
            <p className="review-text">
              {testimonial.review}
            </p>
            <div className="client-info">
              <p className="client-name">{testimonial.name}</p>
              <p className="client-position">{testimonial.position}</p>
            </div>
          </div>
        ))}
        <button className="arrow right" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
