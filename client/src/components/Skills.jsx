import React, { useState } from "react";

const Skills = () => {
    const [skills,setSkills] = useState ("")
   
    const [showSkills,setShowSkills] = useState (false)
        return (
            <div>
              <textarea text ="text" placeholder="skills" onChange ={(e)=>setSkills(e.target.value)}/>
              
            
    <button onSubmit={()=> setShowSkills(true)}> Save </button>
    
    </div>
        )
    }

export default Skills
