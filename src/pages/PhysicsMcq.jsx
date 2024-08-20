import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import { useTheme } from '../components/ThemeContext';

const PhysicsMcq = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  useEffect(() => {
    const fetchQuestions = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get('http://localhost:4000/physicsquestions/');
        const data = response.data;

        if (Array.isArray(data)) {
          setQuestions(data);
          setSelectedOptions(new Array(data.length).fill(null));
        } else {
          throw new Error('Invalid data received for questions');
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
        setError('Failed to fetch questions. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleOptionChange = (questionIndex, optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const showResultsHandler = () => {
    setShowResults(true);
  };


  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      const correctOptionIndex = question.correctOption;
      if (selectedOptions[index] === correctOptionIndex) {
        correctCount++;
      }
    });

    const score = (correctCount / questions.length) * 100;
    return { correctCount, score };
  };

  const { correctCount, score } = calculateScore();

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
    <motion.div
      initial={{ opacity: 0, rotateY: 180 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: -180 }}
      transition={{ duration: 0.8 }}
    >
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-md w-full p-6 space-y-6 bg-white shadow-md dark:bg-zinc-800 dark:text-gray-300 rounded-md">
          {error && <div className="alert alert-danger">{error}</div>}
          {isLoading && <p className="text-center">Loading questions...</p>}

          {!isLoading && questions.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold text-center">Physics MCQs</h2>

              {questions.map((question, index) => (
                <div key={index} className="mb-4">
                  <p className="font-medium">{`${index + 1}. ${question.questionText}`}</p>
                  <ul className="list-disc ml-6">
                    {question.options.map((option, optionIndex) => (
                      <ul key={optionIndex}>
                        <input
                          type="radio"
                          id={`q${index}o${optionIndex}`}
                          name={`question${index}`}
                          checked={selectedOptions[index] === optionIndex}
                          onChange={() => handleOptionChange(index, optionIndex)}
                        />
                        <label htmlFor={`q${index}o${optionIndex}`}>{option}</label>
                      </ul>
                    ))}
                  </ul>
                </div>
              ))}

              <button
                onClick={showResultsHandler}
                className="w-full bg-[#3FE0A5] hover:bg-teal-400 hover:text-white text-black p-2 rounded-md"
              >
                Show Results
              </button>

              {showResults && (
                <>
                  <h2 className="text-2xl font-semibold text-center">Results</h2>
                  <p className="text-center">Here are the correct Answers and percentage</p>
                  <p>Correct Answers: {correctCount}</p>
                  <p>Score: {score}%</p>
                </>
              )}

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="w-full bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400"
              >
                Back
              </button>
            </>
          )}

          {!isLoading && questions.length === 0 && (
            <p className="text-center">No questions available.</p>
          )}
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default PhysicsMcq;
