import React from "react"
import {Bar} from "react-chartjs-2"
import "../stylesheets/bargraph.css"
import {Chart as ChartJS,
    CategoryScale,
    PointElement,
    LineElement,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend} from "chart.js"
import { useQuestions } from "../core_pages/ChartContext";
ChartJS.register(   
    CategoryScale,
    PointElement,
    LineElement,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend);
const BarGraph=()=>{
    const {questionsSolved}=useQuestions();
    const parsed=Object.values(questionsSolved);
    const barGraphData={
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
                borderWidth:1,
                borderColor:"black",
                color:"white",
            },
        ]
    }
    const options={
        responsive:true,
        maintainAspectRatio:false,
        plugins:{
        title:{
            display:false,
            text:"Questions Solved",
            position:"bottom",
            color:"white"
        },
        legend:{
            labels:{
                color:"white",
                display:false
            }
        },
        
    },
    scales:{
        y:{
            min:0,
            max:1000
        }
    },
    }

    return (
    <div className="bar-container">
      <Bar data={barGraphData} options={options}/>
    </div>
    )
}
export default BarGraph;