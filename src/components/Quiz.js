import React, { useState, useEffect } from 'react';
import './Quiz.css';

const Quiz = ({ data, currentQuestion, totalQuestions, handleAnswerSelection }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Reset selectedAnswer when currentQuestion changes
  useEffect(() => {
    setSelectedAnswer(null); // Reset the selected answer when a new question loads
  }, [currentQuestion]);

  const handleClick = (option) => {
    setSelectedAnswer(option); // Update selected answer
    handleAnswerSelection(option); // Pass the selected answer to the parent component (App.js)
  };

  return (
    <div className="quiz">
      <div className="progress">
        Question {currentQuestion + 1} of {totalQuestions}
      </div>
      <h2>{data.question}</h2>
      <div className="options">
        {data.options.map((option, index) => (
          <button
            key={index}
            className={selectedAnswer === option ? (option === data.answer ? 'correct' : 'incorrect') : ''}
            onClick={() => handleClick(option)} // Handle option click
            disabled={selectedAnswer !== null} // Disable the buttons after a selection
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
