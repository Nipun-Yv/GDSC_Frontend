import { useAuth0 } from "@auth0/auth0-react";
import {useEffect,useState} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import MyDashboard from "../components/MyDashboard";
import "../stylesheets/profile.css"
import { ProfileFixed } from "../components/ProfileFixed";
const Profile=()=>{
    const {user,isAuthenticated,logout,isLoading,getAccessTokenSilently}=useAuth0();
    const navigate=useNavigate()
    const [value,setValue]=useState('');
    const [toggle,setToggle]=useState(true);
    const [dis,setDis]=useState(false);
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
                console.log(user)
                const response=await axios.get(`https://gdscbackendonly-socket.onrender.com/profile/${encodeURIComponent(user.email)}`,{headers:{
                    Authorization:`Bearer ${token}`
                }})
                setValue(response.data)
                console.log(response.data)
                
            }
            catch(err){
                console.log(err.message)
            }
        }
        if(isAuthenticated){
            backendCommunication();
        }
    },[isAuthenticated,user])
    const subFunction=(e)=>{
        e.preventDefault();
        setDis(true);
    }
    const setFormData=(e)=>{
        const {name,value}=e.currentTarget
        setValue((prevValue)=>{
            return {...prevValue,[name]:value}
        })
    }
    useEffect(()=>{
        async function postFormData(){
            await axios.post("https://gdscbackendonly-socket.onrender.com/profile",{value,username:user.email});
        }
        if(dis){
            console.log("Hello");
            postFormData();
            setDis(false);
            setToggle(true)
        }
    },[dis])
    if(!isAuthenticated || value==''){
        return (
            <div class="white-loading raleway"><h2>Loading...</h2></div>
        )
    }
    else{
        return (
            <MyDashboard src={user.picture} logout={logout}>
                <h2 className="profile-header raleway">USER PROFILE</h2>
                <div className="profile-container">
                    <div className="profile-picture">
                        <div className="nested">
                           <img src={user.picture}/>
                        </div>
                    </div>
                    <div className="profile-cover">
                        <div className="profile-editable raleway">
                        <ProfileFixed tag="name" val={user.name} />
                        <ProfileFixed tag="email" val={user.email} />
                        <ProfileFixed tag="verification" val={user.email_verified?"Successful":"Not verified"} />
                        <form>
                           <div className="select-role">
                             <h3>ROLE :</h3>
                             <select name="org_role" disabled={toggle} value={value.org_role} onChange={setFormData}>
                               <option value="select">Select</option>
                               <option value="Student">Student</option>
                                <option value="Software Developer">Software Developer</option>
                                <option value="University Lecturer">University Lecturer</option>
                             </select>
                            </div>
                            <div className="special-profile-fields organisation">
                                <h3>ORGANISATION:</h3>
                                <input name="organisation" className="" type="text" disabled={toggle} value={value.organisation} onChange={setFormData}/>
                            </div>
                            <div className="special-profile-fields organisation">
                                <h3>DESCRIPTION:</h3>
                                <textarea name="description" disabled={toggle} className="raleway" onChange={setFormData} value={value.description}></textarea>
                            </div>
                            <div class="form-button">
                                <button type="button" hidden={!toggle} onClick={()=>{setToggle(false)}}>EDIT</button>
                                <button type="submit" hidden={toggle} disabled={dis} onClick={subFunction}>SUBMIT</button>
                            </div>
                         </form>
                        </div>
                    <div class="sample-re"></div>
                    </div>
                </div>
            </MyDashboard>
        )
    }
}
export default Profile;