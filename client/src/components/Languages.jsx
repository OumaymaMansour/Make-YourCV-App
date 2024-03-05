import React, { useState } from 'react'
import Cv from './Cv.jsx'

const Languages = ({setView}) => {

const [showCv,setShowCv] = useState (false)
  const [lang,setLang] =useState({English : "" ,
                                  Frensh : "" ,
                                 Arabic : ""})

  return (
    <div>
      <br></br>
      <ul>
     <li> English </li>
     <br></br> 
     <select id="lang-select">
  <option value={lang.English}>--Please choose an option--</option>
  <br></br> 
  <option value="native">Native</option>
  <option value="professional">Professional </option>
  <option value="limited">Limited</option>
  
</select>
     <li> Frensh </li>
     <br></br>
     <select id="lang-select">
  <option value={lang.Frensh}>--Please choose an option-- </option>
   
  <option value="native"> Native</option>
  <option value="professional">Professional </option>
  <option value="limited">Limited</option>
  
</select>
     <li> Arabic </li> 
     <br></br>
    
     <select id="lang-select">
 <option value={lang.Arabic}>--Please choose an option--</option>
  <option value="native">Native</option>
  <option value="professional">Professional </option>
  <option value="limited">Limited</option>
  
</select>
</ul>
     <button onClick ={()=>setView("onecv") }> Show Cv </button>
     {/* {showCv ? <Cv/> : null} */}


    </div>
  )
}

export default Languages
