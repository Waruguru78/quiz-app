import React from 'react';
import './Result.css';

const Result = ({ score, total }) => {
  return (
    <div className="result">
      <h2>Quiz Finished!🥳🥳🥳</h2>
      <p>
        You scored {score} out of {total}
      </p>
      <button onClick={() => window.location.reload()}>Restart Quiz</button>
    </div>
  );
};

export default Result;
