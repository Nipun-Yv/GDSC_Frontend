import React from "react"
import {Radar} from "react-chartjs-2"
import "../stylesheets/linegraph.css"
import {Chart as ChartJS,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend} from "chart.js"
ChartJS.register(   
    RadialLinearScale,
    Title,
    Tooltip);
const RadarChart=()=>{
    const radarChartData={
        labels:[
            "Logical Reasoning",
            "Data Analysis",
            "Frontend Proficiency",
            "Backend Proficiency",
            "Experience"
        ],
        datasets:[
            {
                label:"E1",
                data:[65,80,50,60,70],
                borderColor:"#116466",
                fill:true,
                backgroundColor:"#116466"
            },
            {
                label:"E2",
                data:[35,80,90,80,30],
                borderColor:"goldenrod",
                backgroundColor:"goldenrod"
            }
        ]
    }
    const options={
        responsive:true,
        maintainAspectRatio:false,
        plugins:{
            legend:{
                display:false,
            },
        },
        // labels:{
        //     display:false
        // },
        filler:{
            propagate:true
        },
        scales:{
            r:{
                grid:{
                    color:"#50b3ae"
                },
                ticks:{
                    color:"black",
                }
            }
        },
        layout:{
            padding:{
                top:4,
                bottom:4,
                left:4,
                right:4
            }
        }
    }
    return (
    <div className="radar-container">
        <div>
      <Radar data={radarChartData} options={options}/>
      </div>
    </div>)
}
export default RadarChart;