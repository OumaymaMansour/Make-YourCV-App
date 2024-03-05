import React  from "react";
import { useState } from "react";

const Register = function ({register}) {

    const [username,setUsername] = useState("")
    const [password,setPassword]= useState ("")
    const [email,setEmail] = useState ("")
    
    
    return (
    
    <div>
     <center> <label> REGISTER </label>
      <br></br>
  <input type ="text" placeholder = "username.." onChange={(e)=> setUsername(e.target.value) }/>
  <input type ="password" placeholder = "password.." onChange={(e)=> setPassword(e.target.value) }/>
  <input type = 'email' placeholder = "email.." onChange={(e)=> setEmail(e.target.value) }/>
  <br></br><br></br>
  
  <button onClick={()=> register (username,password,email)}> register </button> </center>
  </div>
    )
  
  }
  
  export default Register
