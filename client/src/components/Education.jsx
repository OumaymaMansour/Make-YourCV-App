import React, { useState } from "react";
import Skills from "./Skills.jsx";

const Education = ()=> {
const [school,setSchool] = useState ("")
const [diploma,setDiploma] = useState ("")
const [showSkills,setShowSkills] = useState (false)
    return (
        <div>
          <textarea text ="text" placeholder="school" onChange ={(e)=>setSchool(e.target.value)}/>
          <textarea text ="text" placeholder="Diploma" onChange ={(e)=>setDiploma(e.target.value)}/>
        
<button onClick={()=> setShowSkills(true)}> Next </button>
{showSkills ? <Skills/> : null}
</div>
    )
}

export default Education