import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  // Generate a random math joke
  const mathJokes = [
    "Why was the equal sign so humble? Because she knew she wasn't greater than or less than anyone else.",
    "Why did the mathematician spill all of his food in the oven? The directions said, 'Put it in the oven at 180°'.",
    "What do you call a number that can't keep still? A roamin' numeral.",
    "Why did the student get upset when his teacher called him average? It was a mean thing to say!",
    "Why don't mathematicians throw parties? Because you should never drink and derive.",
    "What's a mathematician's favorite season? Sum-mer!",
    "Why was the fraction apprehensive about marrying the decimal? Because he would have to convert.",
    "Why did the circle fail the math test? It studied 360° but the test was about squares!",
    "What do you call a teapot of boiling water on top of Mount Everest? A high-pot-in-use!",
    "Why was the math book sad? It had too many problems."
  ];
  
  const randomJoke = mathJokes[Math.floor(Math.random() * mathJokes.length)];

  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="error-code">
            <span className="digit">4</span>
            <span className="digit zero">0</span>
            <span className="digit">4</span>
          </div>
          
          <h1 className="not-found-title">Oops! Page Not Found</h1>
          
          <p className="not-found-message">
            It seems like the equation for this page doesn't compute! The page you're looking for might have been moved, 
            deleted, or perhaps it never existed in the first place (like √-1 in the real number system).
          </p>
          
          <div className="math-joke">
            <h3>Here's a math joke while you're here:</h3>
            <p className="joke-text">"{randomJoke}"</p>
          </div>
          
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary go-home-btn">
              Back to Home
            </Link>
            <Link to="/topics" className="btn btn-secondary topics-btn">
              Explore Topics
            </Link>
          </div>
          
          <div className="math-doodles">
            <div className="doodle">∑</div>
            <div className="doodle">π</div>
            <div className="doodle">∞</div>
            <div className="doodle">√</div>
            <div className="doodle">∫</div>
            <div className="doodle">≠</div>
            <div className="doodle">±</div>
            <div className="doodle">÷</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;