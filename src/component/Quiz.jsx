import { useCallback, useRef, useState } from "react";
import quizCompleted from "../assets/quiz-complete.png";
import QUESTION from "../questions.js";
import Question from "./Question.jsx";
function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex =
    answerState === "" ? userAnswer.length : userAnswer.length - 1;
  console.log(userAnswer);
  console.log(activeQuestionIndex);
  const handleUserAnswer = useCallback(
    function handleUserAnswer(selectedAnswer) {
      console.log(selectedAnswer);
      setAnswerState("answered");

      setUserAnswer((prevUserAnswer) => {
        return [...prevUserAnswer, selectedAnswer];
      });
      setTimeout(() => {
        if (selectedAnswer === QUESTION[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );
  const handleSkipAnswer = useCallback(
    () => handleUserAnswer(null),
    [handleUserAnswer]
  );

  const quizIsCompleted = QUESTION.length === activeQuestionIndex;
  if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={quizCompleted} alt="Quiz Completed" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <div id="question">
        <Question
          key={activeQuestionIndex}
          handleSkipAnswer={handleSkipAnswer}
          questionIs={QUESTION[activeQuestionIndex].text}
          answers={QUESTION[activeQuestionIndex].answers}
          selectedAnswer={userAnswer[userAnswer.length - 1]}
          answerState={answerState}
          handleUserAnswer={handleUserAnswer}
        ></Question>
      </div>
    </div>
  );
}
export default Quiz;
