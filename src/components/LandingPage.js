import React from 'react';
import './LandingPage.css';

const LandingPage = ({ startQuiz }) => {
  return (
    <div className="landing-page">
      <div className="text-content">
        <h1>Ultimate Quiz Challenge</h1>
        <p>Are you ready to test your knowledge? Compete with yourself or challenge your friends!</p>
        <button onClick={startQuiz} className="start-btn">Start Quiz</button>
      </div>
    </div>
  );
};

export default LandingPage;
