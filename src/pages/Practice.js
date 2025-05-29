import React, { useState } from 'react';
import './Practice.css';

const Practice = () => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [difficulty, setDifficulty] = useState('medium');
  const [questionCount, setQuestionCount] = useState(5);
  const [practiceStarted, setPracticeStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [questions, setQuestions] = useState([]);

  // Sample topics for the dropdown
  const topics = [
    { id: 'addition', name: 'Addition' },
    { id: 'subtraction', name: 'Subtraction' },
    { id: 'multiplication', name: 'Multiplication' },
    { id: 'division', name: 'Division' },
    { id: 'fractions', name: 'Fractions' },
    { id: 'algebra', name: 'Basic Algebra' },
  ];

  // Function to generate random questions based on selected topic and difficulty
  const generateQuestions = () => {
    let generatedQuestions = [];
    
    // This is a simplified example - in a real app, you'd have more sophisticated question generation
    for (let i = 0; i < questionCount; i++) {
      let question = {};
      
      switch (selectedTopic) {
        case 'addition':
          const num1 = difficulty === 'easy' ? Math.floor(Math.random() * 10) : 
                      difficulty === 'medium' ? Math.floor(Math.random() * 100) :
                      Math.floor(Math.random() * 1000);
          const num2 = difficulty === 'easy' ? Math.floor(Math.random() * 10) : 
                      difficulty === 'medium' ? Math.floor(Math.random() * 100) :
                      Math.floor(Math.random() * 1000);
          question = {
            id: i,
            text: `${num1} + ${num2} = ?`,
            answer: (num1 + num2).toString(),
          };
          break;
        case 'subtraction':
          const a = difficulty === 'easy' ? Math.floor(Math.random() * 10) + 5 : 
                  difficulty === 'medium' ? Math.floor(Math.random() * 100) + 50 :
                  Math.floor(Math.random() * 1000) + 500;
          const b = difficulty === 'easy' ? Math.floor(Math.random() * 5) : 
                  difficulty === 'medium' ? Math.floor(Math.random() * 50) :
                  Math.floor(Math.random() * 500);
          question = {
            id: i,
            text: `${a} - ${b} = ?`,
            answer: (a - b).toString(),
          };
          break;
        case 'multiplication':
          const factor1 = difficulty === 'easy' ? Math.floor(Math.random() * 10) : 
                        difficulty === 'medium' ? Math.floor(Math.random() * 12) :
                        Math.floor(Math.random() * 20);
          const factor2 = difficulty === 'easy' ? Math.floor(Math.random() * 5) : 
                        difficulty === 'medium' ? Math.floor(Math.random() * 12) :
                        Math.floor(Math.random() * 20);
          question = {
            id: i,
            text: `${factor1} × ${factor2} = ?`,
            answer: (factor1 * factor2).toString(),
          };
          break;
        case 'division':
          const divisor = difficulty === 'easy' ? Math.floor(Math.random() * 5) + 1 : 
                        difficulty === 'medium' ? Math.floor(Math.random() * 10) + 1 :
                        Math.floor(Math.random() * 12) + 1;
          const quotient = difficulty === 'easy' ? Math.floor(Math.random() * 5) + 1 : 
                          difficulty === 'medium' ? Math.floor(Math.random() * 10) + 1 :
                          Math.floor(Math.random() * 12) + 1;
          const dividend = divisor * quotient;
          question = {
            id: i,
            text: `${dividend} ÷ ${divisor} = ?`,
            answer: quotient.toString(),
          };
          break;
        case 'fractions':
          // Simplified fraction questions
          const denom = difficulty === 'easy' ? 2 + Math.floor(Math.random() * 3) : 
                      difficulty === 'medium' ? 2 + Math.floor(Math.random() * 8) :
                      2 + Math.floor(Math.random() * 10);
          const numer = 1 + Math.floor(Math.random() * (denom - 1));
          question = {
            id: i,
            text: `What is ${numer}/${denom} as a decimal? (Round to 2 decimal places if needed)`,
            answer: (numer / denom).toFixed(2),
          };
          break;
        case 'algebra':
          // Simple algebra equations like x + 5 = 12
          const result = difficulty === 'easy' ? 5 + Math.floor(Math.random() * 10) : 
                        difficulty === 'medium' ? 10 + Math.floor(Math.random() * 20) :
                        20 + Math.floor(Math.random() * 50);
          const constant = difficulty === 'easy' ? 1 + Math.floor(Math.random() * 5) : 
                          difficulty === 'medium' ? 5 + Math.floor(Math.random() * 10) :
                          10 + Math.floor(Math.random() * 20);
          const x = result - constant;
          question = {
            id: i,
            text: `Solve for x: x + ${constant} = ${result}`,
            answer: x.toString(),
          };
          break;
        default:
          question = {
            id: i,
            text: 'Please select a topic to generate questions.',
            answer: '',
          };
      }
      
      generatedQuestions.push(question);
    }
    
    return generatedQuestions;
  };

  // Start practice session
  const startPractice = () => {
    if (!selectedTopic) {
      alert('Please select a topic first!');
      return;
    }
    
    const newQuestions = generateQuestions();
    setQuestions(newQuestions);
    setPracticeStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswer('');
    setShowResults(false);
  };

  // Check the user's answer and move to the next question
  const submitAnswer = () => {
    if (userAnswer.trim() === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer('');
    } else {
      setShowResults(true);
    }
  };

  // Reset the practice session
  const resetPractice = () => {
    setPracticeStarted(false);
    setSelectedTopic('');
    setDifficulty('medium');
    setQuestionCount(5);
    setShowResults(false);
  };

  return (
    <div className="practice-page">
      <div className="container">
        <header className="practice-header">
          <h1 className="practice-title">Practice Problems</h1>
          <p className="practice-description">
            Test your math skills with interactive practice problems. Select a topic, difficulty level, and number of
            questions to get started.
          </p>
        </header>

        {!practiceStarted ? (
          <div className="practice-setup">
            <div className="setup-form">
              <div className="form-group">
                <label htmlFor="topic">Select Topic:</label>
                <select
                  id="topic"
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="form-control"
                >
                  <option value="">-- Select a Topic --</option>
                  {topics.map((topic) => (
                    <option key={topic.id} value={topic.id}>
                      {topic.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="difficulty">Difficulty Level:</label>
                <select
                  id="difficulty"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="form-control"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="questionCount">Number of Questions:</label>
                <select
                  id="questionCount"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                  className="form-control"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
              </div>

              <button onClick={startPractice} className="btn btn-primary start-btn">
                Start Practice
              </button>
            </div>
          </div>
        ) : showResults ? (
          <div className="practice-results">
            <h2>Practice Results</h2>
            <div className="results-card">
              <div className="score-display">
                <div className="score-circle">
                  <span className="score-number">{score}</span>
                  <span className="score-total">/{questions.length}</span>
                </div>
              </div>
              <p className="score-message">
                {score === questions.length
                  ? 'Perfect score! Excellent work!'
                  : score >= questions.length * 0.8
                  ? 'Great job! You\'re doing well!'
                  : score >= questions.length * 0.6
                  ? 'Good effort! Keep practicing!'
                  : 'Keep practicing to improve your skills!'}
              </p>
              <div className="results-buttons">
                <button onClick={startPractice} className="btn btn-primary">
                  Try Again
                </button>
                <button onClick={resetPractice} className="btn btn-secondary">
                  New Practice
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="practice-questions">
            <div className="question-progress">
              Question {currentQuestion + 1} of {questions.length}
            </div>
            <div className="question-card">
              <h2 className="question-text">{questions[currentQuestion].text}</h2>
              <div className="answer-form">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="answer-input"
                  placeholder="Your answer..."
                  autoFocus
                />
                <button onClick={submitAnswer} className="btn btn-primary submit-btn">
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Practice;