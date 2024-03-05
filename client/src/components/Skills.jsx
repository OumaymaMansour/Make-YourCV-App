import React, { useState } from "react";
import Languages from "./Languages.jsx";

const Skills = ({setView}) => {
    const [skills,setSkills] = useState ("")
    const [showlang,setShowLang] = useState (false)
   
        return (
            <div>
              <textarea text ="text"  rows="5" cols="50" placeholder="skills" onChange ={(e)=>setSkills(e.target.value)}/>
              
            
    <button onClick={()=> setView("Languages")}> Next </button>
    
    {/* {showlang ? <Languages/> : null } */}
    </div>
        )
    }

export default Skills
