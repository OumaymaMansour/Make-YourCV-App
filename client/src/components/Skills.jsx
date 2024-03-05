import React, { useState } from "react";
import Languages from "./Languages.jsx";

const Skills = () => {
    const [skills,setSkills] = useState ("")
    const [showlang,setShowLang] = useState (false)
   
        return (
            <div>
              <textarea text ="text" placeholder="skills" onChange ={(e)=>setSkills(e.target.value)}/>
              
            
    <button onClick={()=> setShowLang(true)}> Next </button>
    
    {showlang ? <Languages/> : null }
    </div>
        )
    }

export default Skills
