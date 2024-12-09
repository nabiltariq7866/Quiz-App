import { useRef } from "react";
function Answer({answers,selectedAnswer,answerState,onSlect}){
    const shufleAnswer=useRef();
    if(!shufleAnswer.current){
        shufleAnswer.current= [...answers];
    shufleAnswer.current.sort(()=>Math.random()-0.5);
    }
    return    <ul id="answers">
    {
      shufleAnswer.current.map(answer=>{
        const isSelected=selectedAnswer===answer;
        let classes;
        if(answerState==="answered" &&  isSelected){
            console.log("answered");
            classes="selected";
        }else  if(answerState==="correct"  &&  isSelected){
            console.log("correct");
            classes="correct";
        }else  if(answerState==="wrong"  &&  isSelected){
            console.log("not correct");
            classes="wrong";
        }

      return<li key={answer} className="answer" ><button onClick={()=>onSlect(answer)} className={classes} >{answer}</button></li>})
    }
</ul>
}
export default Answer;