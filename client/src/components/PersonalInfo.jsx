import React , {useState} from "react";
import Education from "./Education.jsx";
import axios from "axios";


const PersonalInfo = function ({setView,selected,setselected}) {

    const [fullname,setFullname]= useState ("")
    const [desc,setDesc]= useState ("")
    const [mobile,setMobile]= useState(0)
    const [datebir,setDate]  = useState(0)
    const [email,setEmail] = useState ("")
    // const [showEducation,setShowEducation] = useState (false)

    const handleNext =() => {
      if(fullname &&  desc && mobile && datebir && email){
        setselected({fullname:fullname ,  desc:desc , mobile :mobile , datebir:datebir , email:email,...selected})
        setView ("Education")

      }
      else {
        alert ("Please fill all the required fields")
      }

    }
   
    return (
        
    <div className= "personalinfo">

<input type ="text" placeholder="fullname"  onChange={(e)=>setFullname(e.target.value)}/>
<textarea className ="textdesc" rows="10" cols="50"  type ="text" placeholder="Describe yourself" onChange={(e)=>setDesc(e.target.value)}/>
<input type ="number" placeholder="mobile"  onChange={(e)=>setMobile(e.target.value)}/>
<input type ="date" placeholder="date of birth"  onChange={(e)=>setDate(e.target.value)}/>
<input id ="inputmail" type ="text" placeholder="email"   onChange={(e)=>setEmail(e.target.value)}/>

<button onClick ={()=> {handleNext()}}>Next</button>
  {/* {showEducation? <Education/> : null}       */}
    </div>)


}

export default PersonalInfo