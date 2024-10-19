import React from "react"
import { createContext,useContext} from "react"
const QuestionsContext=createContext(undefined);

export const QuestionContextProvider=({children,...props})=>{
    const [questionsSolved,setQuestionsSolved]=React.useState(props.value)
    function updateContext(e1,e2){
        setQuestionsSolved((prevState)=>{
            return ({...prevState,[e1]:e2});
        })
    }
    return (
        <QuestionsContext.Provider value={{questionsSolved,updateContext}}>{children}</QuestionsContext.Provider>
    )
}
export const useQuestions=()=>{return (useContext(QuestionsContext))};