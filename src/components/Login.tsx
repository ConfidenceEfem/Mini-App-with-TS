import axios from 'axios'
import React, { useState } from 'react'
import "./style.css"
import {data} from "./ApiUrl.js"

const Login: React.FC = () => {
  
  const [email, setEmail]  = useState<string>("")
  const [password, setPassword]  = useState<string>("")



  const onLogin = async ()  => {
    const res = await axios.post(`${data.url}/login`, {email, password}).catch((err)=>{
      if(err?.response?.data?.message){
        alert(`${err?.response?.data?.message}`)
      }
    })
    if(res){
      console.log(res?.data?.data);
      localStorage.setItem("myToken", JSON.stringify(res?.data?.data))
      console.log("hello");
      localStorage.setItem("myData", JSON.stringify(res?.data?.data?.data))
      
    }
    
  }

  return (
    <div className='login-body'>
        <div className='card'>
          <div className='cardWrapper'>
            <div className="titleHolder">
              <div className="firstTitle">Log In to your Account</div>
              <div className="subTitle">Have the best social media experience on the internet</div>
            </div>
            <div className="formHolder">
              <div className="labelAndInput">
                <div className="label">Email Address</div>
                <input type="text" className="Input" 
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                  setEmail(e.target.value)
                }}
                />
              </div>
              <div className="labelAndInput">
                <div className="label">Password</div>
                <input type="password" className="Input"
               value={password}
               onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setPassword(e.target.value)
               }}
                />
              </div>
              <div className='option_text'>Don't have an Account ?
               <div style={{
                cursor: "pointer",
                color: "red",
                marginLeft: "5px"
               }}><b>Create An Account</b></div></div>
               <div className='button'
               onClick={onLogin}
               > Log In</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login