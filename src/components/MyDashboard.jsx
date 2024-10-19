import React from "react"
import "../stylesheets/mydashboard.css"
const MyDashboard=({children,src,logout})=>{
    return(
        <div className="dash-page">
            <div class="dashboard-header raleway">
                <h1>NEXUS</h1>
                <div className="profile-con">
                    <a href="/profile"><h2>NEXUS EVENT</h2></a>
                    <a href="/profile"><img src={src}/></a>
                    <button onClick={logout}>LOGOUT</button>
                </div>
            </div>
            <div className="nav-board raleway">
                <div>
                    <a href="/user">HOME</a>
                </div>
                <div>
                    <a href="/about">ABOUT NEXUS</a>
                </div>
                <div>
                    <a href="/profile">PROFILE</a>
                </div>
                <div>
                    <a href="https://leetcode.com/u/ydv_Nipun/">LEETCODE</a>
                </div>
                <div className="special-flex">

                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
export default MyDashboard;