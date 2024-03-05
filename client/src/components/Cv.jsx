import React from 'react'
import PersonalInfo from './PersonalInfo.jsx'

const Cv = ({getCv,setView}) => {

  return (
    <div>
      <header>
<h1> fullname</h1>
<p>description </p>
<h2>email </h2>
<h3>mobile </h3>
<h3>date of birth </h3>
      </header>

    { getCv ()}
        <h1></h1>

    </div>
  )
}

export default Cv
