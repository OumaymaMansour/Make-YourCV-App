import React  from "react";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo.jsx";
import axios from "axios";


const Login = function ({setView}) {

    const [username,setUsername] = useState("")
    const [password,setPassword]= useState ("")
    const [show,setShow] = useState(false)
    const [log,setLog] = useState (false)


    const loginuser = async ()=> {
      console.log(username)
      try{
      const user = await axios.post("http://localhost:3000/api/login/"+ username,
        {password})
         console.log(user.data)
        setView('PersonalInfo')
        setLog(true)
      }
        catch(err){
          console.log(err)
        }
    
    }

    return (
    
    <div>

       <center> <label > LOGIN </label> <br></br>
  <input type ="text" placeholder = "username.." onChange={(e)=> setUsername(e.target.value) }/>
  <input type ="password" placeholder = "password.." onChange={(e)=> setPassword(e.target.value) }/>
  <br></br><br></br>
  
  <button onClick={()=> loginuser()}> Login  </button>
  {log ? <div> welcome {username} 
  
 </div> :  <div> plz enter a right information </div>
  }
</center>
  </div>
    )
  

  }
  
  export default Login