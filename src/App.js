import React, { useState } from 'react';
import Quiz from './components/Quiz'; // import quiz component
import Result from './components/Result'; // import result component
import LandingPage from './components/LandingPage'; // Import the Landing Page
import './App.css';

const quizData = [ // array of questions and answer
  { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
  { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo", "Marie Curie"], answer: "Albert Einstein" },
  { question: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Mars", "Saturn"], answer: "Jupiter" },
  { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Hydrogen", "Gold", "Iron"], answer: "Oxygen" },
  { question: "What is the fastest land animal?", options: ["Cheetah", "Lion", "Horse", "Kangaroo"], answer: "Cheetah" },
  { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8" },
  { question: "In which year did the Titanic sink?", options: ["1912", "1920", "1915", "1905"], answer: "1912" },
  { question: "Who painted the Mona Lisa?", options: ["Vincent Van Gogh", "Leonardo da Vinci", "Michelangelo", "Pablo Picasso"], answer: "Leonardo da Vinci" },
  { question: "Which country is home to the kangaroo?", options: ["South Africa", "Australia", "India", "Brazil"], answer: "Australia" },
  { question: "What is the chemical formula of water?", options: ["H2O", "CO2", "O2", "H2"], answer: "H2O" }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Track the current question
  const [score, setScore] = useState(0); // Track the user's score
  const [showResult, setShowResult] = useState(false); // Display the result screen when quiz ends
  const [quizStarted, setQuizStarted] = useState(false); // Track if the quiz has started

  const startQuiz = () => {
    setQuizStarted(true); // Start the quiz when the button is clicked
  };

  const handleAnswerSelection = (selectedOption) => {
    // Check if the selected answer is correct
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1); // Increment score if correct
    }

    const nextQuestion = currentQuestion + 1; // Calculate the next question index

    // Check if there are more questions
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion); // Move to the next question
    } else {
      setShowResult(true); // Show the result screen if there are no more questions
    }
  };

  return (
    <div className="App">
      {!quizStarted ? (
        <LandingPage startQuiz={startQuiz} /> // Show landing page if quiz hasn't started
      ) : showResult ? (
        <Result score={score} total={quizData.length} />
      ) : (
        <Quiz
          data={quizData[currentQuestion]} // Pass the current question's data
          currentQuestion={currentQuestion} // Pass the current question index
          totalQuestions={quizData.length} // Pass the total number of questions
          handleAnswerSelection={handleAnswerSelection} // Pass the function to handle answer selection
        />
      )}
    </div>
  );
}

export default App;
