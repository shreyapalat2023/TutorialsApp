import { useState } from "react";
import jsQuestions from "../QuizApis/JSQuestions.js"

export default function JavaScriptQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === jsQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    if (currentQuestion + 1 < jsQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container mt-5" style={{width:"600px"}}>
      <div className="card shadow p-4">
        {showScore ? (
          <div className="text-center">
            <h3>Your Score: {score} / {jsQuestions.length}</h3>
            <button className="btn btn-primary mt-3" onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowScore(false);
            }}>
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <h5>Question {currentQuestion + 1} of {jsQuestions.length}</h5>
            <h4 className="mt-3">{jsQuestions[currentQuestion].question}</h4>
            <div className="mt-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`btn btn-outline-primary d-block mb-2 w-100 text-start ${selectedOption === option ? "active" : ""}`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              className="btn btn-success mt-3 cursor-pointer"
              disabled={!selectedOption}
              onClick={handleNext}
            >
              {currentQuestion + 1 === jsQuestions.length ? "Finish" : "Next"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
