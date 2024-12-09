import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";
function Question({handleSkipAnswer,questionIs,answers,selectedAnswer,answerState,handleUserAnswer}){
    return<>
         <QuestionTimer  timeout={10000} onTimeOut={handleSkipAnswer} ></QuestionTimer>
        <h2>{questionIs}</h2>
        <Answer  answers={answers} selectedAnswer={selectedAnswer} answerState={answerState} onSlect={handleUserAnswer}></Answer>
    
    </>
}
export default Question;