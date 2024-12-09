import { useEffect, useState } from "react";

function QuestionTimer({timeout,onTimeOut}){
    const [remainingTime,setRemainingTime]=useState(timeout);
    useEffect(()=>{ 
        console.log("setting timeout")
        const clearTimer=setTimeout(onTimeOut, timeout)
        return ()=>{
            clearTimeout(clearTimer)
        }
    },[onTimeOut,timeout])
    useEffect(()=>{
        console.log("setting Interval")
        const clearTimer=setInterval(() => {
            setRemainingTime(prevTimeRemaining=>prevTimeRemaining-100)
        }, 100) 
        return ()=>{
            clearInterval(clearTimer);
        }
    },[]
    )
   return <progress id="question-time" value={remainingTime} max={timeout}></progress> 
}
export default QuestionTimer;