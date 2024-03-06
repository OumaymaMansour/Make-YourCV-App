import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import List from './components/List.jsx'
import axios from "axios"
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import PersonalInfo from './components/PersonalInfo.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Languages from './components/Languages.jsx'
import Cv from './components/Cv.jsx'

const App = () => {
   const [users, setUsers] = useState([])
const [view,setView] = useState("start")
const [refresh,setRefresh] = useState(false)
const [cvs, setCvs] = useState([])
   const [selected, setselected] = useState({})


const getAllUsers = async ()=> {
  try{
    const users = await axios.get("http://localhost:3000/api/users")
      setUsers(users.data)
      setView("allusers")
    }
  
      catch(err){
        console.log(err)
      }
  
  }


const register = async (username,password,email)=> {
  try{
  const user = await axios.post("http://localhost:3000/api/register",
    {username,password,email})
    let copy = [...users,user.data]
    setUsers (copy)
    setView('PersonalInfo')
  }

    catch(err){
      console.log(err)
    }
 
}

const getCv = async (id)=> {
  try{
    const cv = await axios.get(`http://localhost:3000/api/cv/${id}`)
      setCvs([cv.data])
      setView("onecv")
     
    }
      catch(err){
        console.log(err)
      }
  
  }

  

const renderView = () => {
  if (view === "start") {
    return (<div>
      <br></br>
      <br></br>
    <Register register ={register}/>
    <br></br>
    <Login  setView ={setView}/>
    </div>)
  }
  else if (view === "PersonalInfo") {
    return  <PersonalInfo  setView ={setView} selected={selected} setselected={setselected}/> }
    else if (view === "allusers") {
      return  <List users={users} />  }

      else if(view === "Education") {
        return  <Education  setView ={setView}/>
      } 
      else if (view === "Skills"){
        return  <Skills  setView ={setView}/>
      } 
      else if (view === "Languages"){
        return  <Languages  setView ={setView}/>
      } 
      else if (view === "onecv") {
        return  <Cv getCv ={getCv} setView = {setView} selected={selected} />
      }

}

  return (
    <div className="app-container">
       <button className ="btnshowusers" onClick={getAllUsers}>Show All Users</button>
      <h1> Make your CV </h1>

      {renderView()}

     
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
