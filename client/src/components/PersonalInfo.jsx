import React , {useState} from "react";
import Education from "./Education.jsx";


const PersonalInfo = function () {

    const [fullname,setFullname]= useState ("")
    const [mobile,setMobile]= useState(0)
    const [datebir,setDate]  = useState(0)
    const [email,setEmail] = useState ("")
    const [showEducation,setShowEducation] = useState (false)

    return (
        
    <div>

<input type ="text" placeholder="fullname" onChange={(e)=>setFullname(e.target.value)}/>
<input type ="number" placeholder="mobile" onChange={(e)=>setMobile(e.target.value)}/>
<input type ="date" placeholder="date of birth" onChange={(e)=>setDate(e.target.value)}/>
<input type ="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>

<button onClick ={()=> setShowEducation(true)}>Next</button>
  {showEducation? <Education/> : null}      
    </div>)


}

export default PersonalInfo