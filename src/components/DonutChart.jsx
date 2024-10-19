import React from "react"
import {Pie} from "react-chartjs-2"
import "../stylesheets/piechart.css"
import {Chart as ChartJS,
    ArcElement,Legend,Tooltip,Title} from "chart.js"
import { useQuestions } from "../core_pages/ChartContext";
ChartJS.register(   
    Title,
    ArcElement,
    Legend,
    Tooltip);
const PieChart=()=>{
    const {questionsSolved}=useQuestions();
    const parsed=Object.values(questionsSolved);
    const pieChartData={
        labels:[
            "Leetcode",
            "Codeforces",
            "HackerEarth",
            "Hackerank",
            "Codechef",
        ],
        datasets:[
            {
                label:"Questions Solved",
                data:parsed,
                backgroundColor:[
                    "#d1e8e2",
                    "goldenrod",
                    "black",
                    "#116466",
                    "#0d3636"
                ],
                hoverOffset:25,
                borderWidth:0,
                color:"white",
                border:"0.5px",
            },
        ]
    }
    const options={
        plugins:{
        title:{
            display:true,
            text:"Questions Solved",
            position:"bottom",
            color:"white"
        },
        legend:{
            labels:{
                color:"white",
            }
        },
    }
    }
    return (
    <div className="pie-container">
      <Pie data={pieChartData} options={options}/>
    </div>
    )
}
export default PieChart;