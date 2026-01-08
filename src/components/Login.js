import React from 'react'//rfce
import { useContext } from 'react'
//import { useState } from 'react'
import { LoginContext } from '../contexts/LoginContext'
function Login() {
    const{setName,setProfileInfo}=useContext(LoginContext)
    //const[name,setName]=useState("")
    //const[pwd,setPwd]=useState("")
    //const[profileinfo,setProfileInfo]=useState(false)
   // const show=()=>{
     //   if(name==="Sudha"&& pwd==="123")
       //     setProfileInfo(true)
        //else
          //  setProfileInfo(false)
    //}
  return (
    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)}placeholder="Enter user name"></input>
      <br></br>
      <input type="password"  placeholder='Enter password'></input>
      <br></br>
      <input type="button" onClick={()=>setProfileInfo(true)} value="Login"></input>
      <br></br>
      {/*(profileinfo && "Valid User :"+name+"!")||"Invaliduser!!!!"*/}
    </div>
  )
}

export default Login
