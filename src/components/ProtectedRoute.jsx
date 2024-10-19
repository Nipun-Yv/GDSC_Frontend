import React,{useEffect} from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
const ProtectedRoute=({children})=>{
    const navigate=useNavigate();
    const {isAuthenticated,isLoading}=useAuth0();
    useEffect(()=>{
        if(!isLoading){
            if(isAuthenticated){
                navigate("/user")
            }
        }
    },[isAuthenticated,isLoading])
    if(!isLoading && !isAuthenticated){
        return <>{children}</>
    }
    else{
        return( <div>Loading...</div>)
    }
}
export default ProtectedRoute;