import React, { useState } from "react";
import Skills from "./Skills.jsx";


const Education = ({setView})=> {
const [school,setSchool] = useState ("")
const [diploma,setDiploma] = useState ("")

 const [showSkills,setShowSkills] = useState (false)
    return (
        <div>
          <textarea text ="text"  rows="5" cols="50" placeholder="school" onChange ={(e)=>setSchool(e.target.value)}/>
          <textarea text ="text" rows="5" cols="50" placeholder="Diploma" onChange ={(e)=>setDiploma(e.target.value)}/>
      
        
<button onClick={()=> setView ("Skills")}> Next </button> 
{/* {showSkills ? <Skills/> : null} */}


</div>
    )
}

export default Education