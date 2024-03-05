import React, { useState } from 'react'

const Languages = () => {


  const [lang,setLang] =useState({English : "" ,
                                  Frensh : "" ,
                                 Arabic : ""})

  return (

    <div>
      <br></br>
      
     <label> English </label> 
     <select id="lang-select">
  <option value={lang.English}>--Please choose an option--</option>
  <option value="native">Native</option>
  <option value="professional">Professional </option>
  <option value="limited">Limited</option>
  
</select>
     <label> Frensh </label>
     <select id="lang-select">
  <option value={lang.Frensh}>--Please choose an option--</option>
  <option value="native"> Native</option>
  <option value="professional">Professional </option>
  <option value="limited">Limited</option>
  
</select>
     <label> Arabic </label> 
     <select id="lang-select">
  <option value={lang.Arabic}>--Please choose an option--</option>
  <option value="native">Native</option>
  <option value="professional">Professional </option>
  <option value="limited">Limited</option>
  
</select>

     <button> Next </button>


    </div>
  )
}

export default Languages
