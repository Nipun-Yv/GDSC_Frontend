import { useAuth0 } from "@auth0/auth0-react";
import {useEffect,useState} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import MyDashboard from "../components/MyDashboard";
import "../stylesheets/aboutus.css"
const AboutUs=()=>{
    const {user,isAuthenticated,logout,isLoading,getAccessTokenSilently}=useAuth0();
    const navigate=useNavigate()
    useEffect(()=>{
        if(!isLoading){
            if(!isAuthenticated){
                navigate("/")
            }
        }
    },[isLoading,isAuthenticated])
    if(!isAuthenticated){
        return (
            <div>Loading...</div>
        )
    }
    else{
        return (
            <MyDashboard src={user.picture} logout={logout}>
                <div className="nexus-secret raleway">
                    <h2>THE NEXUS CODE</h2>
                </div>
                <div className="secret-desc source-code-pro">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus quis dolor quis ultrices. Phasellus vel facilisis quam, non cursus nisi. Vestibulum aliquet volutpat condimentum. Nullam semper aliquam velit vitae euismod. Proin malesuada euismod orci, sed facilisis quam vehicula id. Nullam dui purus, pellentesque ut condimentum quis, vulputate a ante. Sed laoreet, nisl sit amet ultrices iaculis, quam orci congue nibh, nec lacinia sapien nibh eu nisi. Suspendisse sagittis consequat augue, tempus euismod turpis mattis nec. Nunc elementum fringilla ornare. Nam euismod efficitur tincidunt. In nulla enim, tincidunt quis ultricies sed, lobortis at eros. Morbi arcu metus, ultrices eu quam vitae, porta placerat leo.

Pellentesque augue nisl, vestibulum ceptos himenaeos. Donec faucibus vel lorem nec sodales. condimentum tortor id sodales. Suspendisse volutpat luctus felis, nec faucibus metus rhoncus tempus. Ut eros nunc, suscipit eu pretium in, cursus nec tellus. Pellentesque eu iaculis diam. Nulla at tellus faucibus, efficitur leo eget, aliquet dui. Praesent tempor ex ut nisi viverra, egestas efficitur nisl lacinia. Donec tempor, massa et consequat blandit, augue elit placerat tellus, vehicula tincidunt turpis turpis blandit neque. Donec vel efficitur odio. Donec consequat risus ut pharetra commodo. Mauris at gravida dolor. Aliquam erat volutpat.
ceptos himenaeos. Donec faucibus vel lorem nec sodales. Donec posuere sodales pellentesque. Cras scelerisque diam quis ex cursus, ut accumsan justo scelerisque. Duis tempor arcu ac accumsan mattis. Morbi id ante et sapien pulvinar vulputate. In finibus sagittis laoreet. Quisque volutpat malesuada mollis.Pellentesque augue nisl, vestibulum sit amet ipsum a, porttitor fermentum mi. Sed in ornare ipsum. Aenean commodo condimentum tortor id sodales. Suspendisse volutpat luctus felis, nec faucibus metus rhoncus tempus. Ut eros nunc, suscipit eu pretium in, cursus nec tellus. Pellentesque eu iaculis diam. Nulla at tellus faucibus, efficitur leo eget, aliquet dui. Praesent tempor ex ut nisi viverra, egestas efficitur nisl lacinia. Donec tempor, massa et consequat blandit, augue elit placerat tellus, vehicula tincidunt turpis turpis blandit neque. Donec vel efficitur odio. Donec consequat risus ut pharetra commodo. Mauris at gravida dolor. Aliquam erat volutpat.
ceptos himenaeos. Donec faucibus vel lorem nec s</p>
                </div>
            </MyDashboard>
        )
    }
}
export default AboutUs;