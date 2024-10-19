import { useAuth0 } from "@auth0/auth0-react";
import {useEffect,useState} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import MyDashboard from "../components/MyDashboard";
import LineGraph from "../components/LineGraph";
import "../stylesheets/homepagegraphs.css"
import PieChart from "../components/DonutChart";
import BarGraph from "../components/BarGraph";
import RadarChart from "../components/RadarChart";
import ProgressSection from "../components/ProgressUpdate";
import { QuestionContextProvider } from "./ChartContext";
const Success=()=>{
    const {user,isAuthenticated,logout,isLoading,getAccessTokenSilently}=useAuth0();
    const navigate=useNavigate()
    const [value,setValue]=useState('');
    useEffect(()=>{
        if(!isLoading){
            if(!isAuthenticated){
                navigate("/")
            }
        }
    },[isLoading,isAuthenticated])
    useEffect(()=>{
        async function backendCommunication(){
            try{
                const token=await getAccessTokenSilently();
                const response=await axios.get("https://gdscbackendonly-socket.onrender.com",{headers:{
                    Authorization:`Bearer ${token}`
                }})
                setValue(response.data)
                
            }
            catch(err){
                console.log(err.message)
                setTimeout(() => {
                    backendCommunication();
                  }, 3000);
            }
        }
        if(isAuthenticated){
            backendCommunication();
        }
    },[isAuthenticated])
    async function postProgress(data){
        try{
            const token=await getAccessTokenSilently();
            await axios.post("https://gdscbackendonly-socket.onrender.com/update",data,{headers:{
                Authorization:`Bearer ${token}`
            }})
        }
        catch(err){
            console.log(err.message)
        }
    }
    if(!isAuthenticated || value==''){
        return (
            <div class="white-loading raleway"><h2>Loading...<br/>Please refresh the page once if you've been waiting for more than 25 seconds(timeout), the render server sleeps affter inactivity, several refreshes might be needed after a waiting period</h2></div>
        )
    }
    else{
        return (
            <MyDashboard src={user.picture} logout={logout}>
              <div className="chart-container">
                  <QuestionContextProvider value={value}>
                      <div className="raleway"><h3>ANALYTICS</h3></div>
                      <LineGraph/>
                      <PieChart/>
                      <ProgressSection update={postProgress}/>
                      <BarGraph/>
                      <RadarChart/>
                      <div className="desc-text raleway">
                        <h2>The site saves your manually updated progress on a remote database
                        (PostgreSQL) against your profile info, the charts are updated using sliders and the linear curve is updated based on spontaneous timed socket emits
                        </h2>
                    </div>
                   </QuestionContextProvider>
              </div>
            </MyDashboard>
        )
    }
}
export default Success;
// useEffect(()=>{
//     async function callMe(){
//         axios.get()
//     }
//     if(isAuthenticated){
//         callMe()
//     }
//     console.log(isAuthenticated)
// },[isAuthenticated])