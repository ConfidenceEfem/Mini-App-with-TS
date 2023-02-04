import axios from 'axios'
import React, { useState } from 'react'
import "./style.css"
import {data} from "./ApiUrl"

const Register = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [name, setName] = useState<string>("")

    const onRegister = async () => {
        const res = await axios.post(`${data.url}/register`, {name, password, email}).catch((err)=>{
            if(err?.response?.data?.message){
              alert(`${err?.response?.data?.message}`)
            }
          })
          if(res){
            console.log(res?.data?.data);
            localStorage.setItem("myToken", JSON.stringify(res?.data?.data?.token))
            localStorage.setItem("myData", JSON.stringify(res?.data?.data?.data))
            
          }
    }

  return (
    <div className='login-body'>
    <div className='card1'>
      <div className='cardWrapper'>
        <div className="titleHolder">
          <div className="firstTitle">Create an Account</div>
          <div className="subTitle">Have the best social media experience on the internet</div>
        </div>
        <div className="formHolder">
          <div className="labelAndInput1">
            <div className="label">Full Name</div>
            <input type="text" className="Input" 
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
              setName(e.target.value)
            }}
            />
          </div>
          <div className="labelAndInput1">
            <div className="label">Email Address</div>
            <input type="text" className="Input" 
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
              setEmail(e.target.value)
            }}
            />
          </div>
          <div className="labelAndInput1">
            <div className="label">Password</div>
            <input type="password" className="Input"
           value={password}
           onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
            setPassword(e.target.value)
           }}
            />
          </div>
          <div className='option_text'>Already have an Account ?
           <div style={{
            cursor: "pointer",
            color: "red",
            marginLeft: "5px"
           }}><b>Log in</b></div></div>
           <div className='button'
           onClick={onRegister}
           > Create an Account</div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Register