import React from 'react';
import './ScheduleDemo.css';
import Demo from '../assets/demo.png';
import MessageQuestion from '../assets/message-question.png';
import Calendar from '../assets/calendar.png';

const ScheduleDemo = () => {
  return (
    <section className="schedule-demo">
      <div className="demo-container">
        <div className="demo-image">
          <img src={Demo} alt="Demo" />
        </div>
        <div className="demo-content">
          <h2>Schedule a Demo</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes. </p>
          <div className="demo-buttons">
            <button className="btn book-btn">
              Schedule a Demo <img src={Calendar} alt="Book Icon" className="icon" />
            </button>
            <button className="btn ask-btn">
              Ask a Question <img src={MessageQuestion} alt="Ask Icon" className="icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleDemo;
