import "../stylesheets/progressupdate.css"
import React,{useState} from "react"
import { useQuestions } from "../core_pages/ChartContext";
const ProgressSection=(props)=>{
    const {questionsSolved,updateContext}=useQuestions();
    const [toggle,setToggle]=useState(false);
    function onSlide(e){
        setToggle(false);
        updateContext(e.currentTarget.name,e.currentTarget.value);
    }
    return (
        <div className="progress raleway">
            <h2>Modify charts (slider)</h2>
            {Object.keys(questionsSolved).map((element)=>{
                return (
                <div className="ques-slider">
                    <label htmlFor={element}>{element[0].toUpperCase()+element.slice(1,60)}</label>
                    <input type="range" id={element} value={questionsSolved[element]} name={element} min="0" max="1000" onChange={onSlide} sx={{background:"black"}}/>
                    <h3>{questionsSolved[element]}</h3>
                 </div>
                )
            })}
            <button disabled={toggle} onClick={()=>{setToggle(true);props.update(questionsSolved)}}>SAVE PROGRESS<span hidden={!toggle}>✅</span></button>
        </div>
    )  
}
export default ProgressSection;