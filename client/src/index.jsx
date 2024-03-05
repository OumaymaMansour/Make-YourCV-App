import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import List from './components/List.jsx'
import axios from "axios"
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import PersonalInfo from './components/PersonalInfo.jsx'

const App = () => {
   const [users, setUsers] = useState([])
const [view,setView] = useState("start")
const [refresh,setRefresh] = useState(false)


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
    return  <PersonalInfo  /> }
    else if (view === "allusers") {
      return  <List users={users} />

  
}
}
  return (
    <div className="app-container">
      <h1> Make your CV </h1>

      <button onClick={getAllUsers}>Show All Users</button>

      {renderView()}

     
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
