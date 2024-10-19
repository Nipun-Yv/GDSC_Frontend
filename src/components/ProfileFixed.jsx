import React from "react"
export const ProfileFixed=({tag,val,size,...props})=>{
    return(
        <div className="special-profile-fields" >
            <h3>{tag} :</h3>
            <span><h3>{val}</h3></span>
        </div>
    )
}
