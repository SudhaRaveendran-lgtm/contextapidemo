import React  from 'react'//rfce
import { useContext } from 'react'
//import { useState } from 'react'
import { LoginContext } from '../contexts/LoginContext'
function Login() {
  const {name,setName,pwd,setPwd,ProfileInfo,setProfileInfo}=useContext(LoginContext)
   // const{setName,setProfileInfo}=useContext(LoginContext)
    //const[name,setName]=useState("")
    //const[pwd,setPwd]=useState("")
    //const[profileinfo,setProfileInfo]=useState(false)
   const show=()=>{
        if(name==="Sudha" &&  pwd==="123")
            setProfileInfo(true)
        else
          setProfileInfo(false)
    }
  return (
    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)}placeholder="Enter user name"></input>
      <br></br>
      <input type="password" onChange={(e)=>setPwd(e.target.value)}  placeholder='Enter password'></input>
      <br></br>
     <input type="button" onClick={()=>show()} value="Login"></input>
      <br></br>
      {(ProfileInfo===false) &&<font color='blue'>"Invaliduser!!!!"</font>}
    </div>
  )
}

export default Login
