import React,{useEffect,useState} from "react"
import {Line} from "react-chartjs-2"
import "../stylesheets/linegraph.css"
import {io} from "socket.io-client"
import {Chart as ChartJS,
    CategoryScale,
    PointElement,
    LineElement,
    LinearScale,
    Title,
    Tooltip,
    Legend} from "chart.js"
ChartJS.register(   
    CategoryScale,
    PointElement,
    LineElement,
    LinearScale,
    Title,
    Tooltip);
const socket=io("https://socketserver-2wts.onrender.com")
socket.on("connect", () => {
        console.log("Connected to the server with ID:", socket.id);
    });
const LineGraph=()=>{
    const [tri,setTrinity]=useState({list1:[2000,3000,4000,5000,6000,7000,12000,14000,6000,1000,9000,7500,5500],list2:[2000,5000,8000,11000,14000,17000,17000,7600,15000,12000,13000,6000,9000],list3:[3000,5000,11000,17000,14000,12000,4000,7000,8000,12000,14000,16000,11000]});
    const linearChartData={
        labels:[
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13
        ],
        datasets:[
            // {
            //     label:"steps",
            //     data:tri.list1,
            //     borderColor:"#d1e8e2",
            //     borderWidth:1.5,
            //     pointRadius:1.5,
            //     backgroundColor:"#d1e8e2"
            // },
            {
                label:"steps",
                data:tri.list2,
                borderColor:"turquoise",
                borderWidth:1.5,
                pointRadius:1.5,
                backgroundColor:"white"
            },
            {
                label:"steps",
                data:tri.list3,
                borderColor:"goldenrod",
                borderWidth:1.5,
                pointRadius:1.5,
                backgroundColor:"goldenrod"
            }
        ]
    }
    const options={
        responsive:true,
        maintainAspectRatio:false,
        animation:{
            duration:0
        },
        plugins:{
            legend:{
                display:false,
            },
            title:{
                display:true,
                text:"Stock Comp. Chart",
                color:"white"
            },
        },
        scales:{
            x:{
                ticks: {
                    color: "white", 
                },
                grid: {
                    color: "rgba(255, 255, 255, 0.2)", 
                },
                border: {
                    color: "#d1e8e2", 
                },
            },
            y:{
                ticks: {
                    color: "white", 
                },
                grid: {
                    color: "rgba(255, 255, 255, 0.2)", 
                },
                border: {
                    color: "#d1e8e2", 
                },
            }
        },
        layout:{
            padding:{
                left:10,
                right:10,
                top:10
            }
        }
    }
    useEffect(()=>{
            socket.on("receive_message",(data)=>{
                setTrinity((prevValue)=>{
                    const list1=[...prevValue.list1];
                    const list2=[...prevValue.list2];
                    const list3=[...prevValue.list3];
                    for(var i=0;i<prevValue.list1.length-1;i++){
                        list1[i]=list1[i+1];
                        list2[i]=list2[i+1];
                        list3[i]=list3[i+1];
                    }
                    list1.pop();list1.push(data.obj1)
                    list2.pop();list2.push(data.obj2)
                    list3.pop();list3.push(data.obj3);
                    return ({list1:list1,list2:list2,list3:list3})
                })
        
            })
    },[socket])
    useEffect(()=>{
        function trigger(){
            socket.emit("send_private_message","Hello")
        }
        trigger()
        console.log("Hello")
    },[])
    return (
    <div className="line-container">
      <Line data={linearChartData} options={options}/>
    </div>)
}
export default LineGraph;