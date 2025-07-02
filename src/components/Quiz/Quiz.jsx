import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Quiz.css';
import { topics } from './Questions';

// Quiz component: Manages topic selection, quiz questions, and results
const Quiz = () => {
    // State variables
    const [currentTopic, setCurrentTopic] = useState(null); // Selected topic (null initially)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Current question number
    const [score, setScore] = useState(0); // User's score
    const [selectedAnswer, setSelectedAnswer] = useState(null); // User's selected answer
    const [showResult, setShowResult] = useState(false); // Show result screen or not
    const [userAnswers, setUserAnswers] = useState([]); // Array to store user's answers for all question

    // Handle topic selection
    const handleTopicSelect = (topic) => {
        setCurrentTopic(topic);
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setShowResult(false);
    };

    // Handle answer selection
    const handleAnswerClick = (option) => {
        setSelectedAnswer(option);
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestionIndex] = option;
        setUserAnswers(newUserAnswers);
        if (option === currentTopic.questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }
    };

    // Move to the next question or show results
    const handleNextQuestion = () => {
        if (currentQuestionIndex < currentTopic.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
        } else {
            setShowResult(true);
        }
    };

    // Restart the quiz for the same topic
    const handleRestartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setShowResult(false);
    };

    // Go back to topic selection
    const handleBackToTopics = () => {
        setCurrentTopic(null);
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setShowResult(false);
    };

    // Render topic selection screen
    const renderTopicSelection = () => (
        <div className="quiz-container">
            <div className="quiz-card">
                <div className="quiz-card-header">
                    <h3>Select a Quiz Topic</h3>
                </div>
                <div className="quiz-card-body">
                    <div className="quiz-list-group">
                        {topics.map((topic, index) => (
                            <button
                                key={index}
                                className="quiz-list-item"
                                onClick={() => handleTopicSelect(topic)}
                            >
                                {topic.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    // Render quiz question screen
    const renderQuiz = () => (
        <div className="quiz-container">
            <div className="quiz-card">
                <div className="quiz-card-header">
                    <h3>
                        {currentTopic.name} - Question {currentQuestionIndex + 1} of {currentTopic.questions.length}
                    </h3>
                </div>
                <div className="quiz-card-body">
                    <h4 className="quiz-card-title">{currentTopic.questions[currentQuestionIndex].question}</h4>
                    <div className="quiz-list-group">
                        {currentTopic.questions[currentQuestionIndex].options.map((option, index) => (
                            <button
                                key={index}
                                className={`quiz-list-item ${selectedAnswer === option
                                    ? option === currentTopic.questions[currentQuestionIndex].correctAnswer
                                        ? 'list-group-item-success'
                                        : 'list-group-item-danger'
                                    : ''
                                    }`}
                                onClick={() => handleAnswerClick(option)}
                                disabled={selectedAnswer !== null}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {selectedAnswer && (
                        <button
                            className="btn btn-primary quiz-btn-primary mt-3"
                            onClick={handleNextQuestion}
                        >
                            {currentQuestionIndex < currentTopic.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                        </button>
                    )}
                    <button
                        className="btn btn-secondary quiz-btn-secondary mt-3 ms-2"
                        onClick={handleBackToTopics}
                    >
                        Back to Topics
                    </button>
                </div>
            </div>
        </div>
    );

    // Render result screen
    const renderResult = () => (
        <div className="quiz-container">
            <div className="quiz-card text-center">
                <div className="quiz-card-body">
                    <h2 className="quiz-card-title">Quiz Completed!</h2>
                    <p className="quiz-card-text">
                        Your Score: {score} out of {currentTopic.questions.length}
                    </p>
                    <h4 className="quiz-card-title mt-4">Your Answers:</h4>
                    {currentTopic.questions.map((question, index) => (
                        <div key={index} className="quiz-result-item">
                            <p>
                                <strong>Question {index + 1}:</strong> {question.question}
                            </p>
                            <p>
                                <strong>Your Answer:</strong>{' '}
                                {userAnswers[index] !== null ? (
                                    userAnswers[index] === question.correctAnswer ? (
                                        <span className="text-success">Correct - {userAnswers[index]}</span>
                                    ) : (
                                        <span className="text-danger">Wrong - {userAnswers[index]}</span>
                                    )
                                ) : (
                                    <span className="text-warning">Not Answered</span>
                                )}
                            </p>
                            <p>
                                <strong>Correct Answer:</strong>{' '}
                                <span className="text-success">{question.correctAnswer}</span>
                            </p>
                            <hr />
                        </div>
                    ))}
                    <button
                        className="btn btn-primary quiz-btn-primary me-2 mt-3"
                        onClick={handleRestartQuiz}
                    >
                        Restart Quiz
                    </button>
                    <button
                        className="btn btn-secondary quiz-btn-secondary mt-3"
                        onClick={handleBackToTopics}
                    >
                        Back to Topics
                    </button>
                </div>
            </div>
        </div>
    );

    // Main render: Decide which screen to show
    return (
        <>
            {!currentTopic
                ? renderTopicSelection()
                : showResult
                    ? renderResult()
                    : renderQuiz()}
        </>
    );
};

export default Quiz;