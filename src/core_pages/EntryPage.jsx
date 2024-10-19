import React,{useEffect} from "react"
import "../stylesheets/entrypage.css"
import { useAuth0 } from "@auth0/auth0-react"
import { useNavigate } from "react-router-dom"
const EntryPage=()=>{
    const {loginWithRedirect,isAuthenticated,isLoading}=useAuth0();
    const navigate=useNavigate();
    console.log(isLoading,"How")
    useEffect(()=>{
        console.log(isLoading,"Yellow")
        if(!isLoading){
            if(isAuthenticated){
                navigate("/user")
            }
        }
    },[isLoading,isAuthenticated])
    return (
        <div className="entry-main raleway">
            <hr color="white"/>
            <h2 className="intro typewriter">And so it begins</h2>
            <h1 className="web-name glow">NEXUS</h1>
            <h2 className="made-by"><span className="rel-small">CREATED BY:</span> Nipun Yadav</h2>
            <button className="entry-button glow-box" onClick={loginWithRedirect}>Authenticate</button>
        </div>
    )
}
export default EntryPage