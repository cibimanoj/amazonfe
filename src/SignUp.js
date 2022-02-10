import React,{useState} from "react";
import {NavLink} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignUp = () => {
  
  const [user,setUser]=useState({
    name:"",
    email:"",
    number:"",
    password:"",
    apassword:"",   
  })
 // console.log(user)

  const newUser=(e)=>{
    const{name,value}= e.target;
    setUser(()=>{
      return{
        ...user,
        [name]:value
      }
    })
  }
  const userData=async (e)=>{
    e.preventDefault();
    const {name,email,number, password, apassword}= user;
    const res =await fetch("http://localhost:8005/register",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,email,number, password, apassword
      })
      
    });
    const data = await res.json();
    //console.log(data)
    if(res.status===422||!data){
      //alert("no data")
      toast.warn("invalid details.",{position:"top-center"})
    }else{
      //alert("Account created successfully")
      toast.success("Account created successfully.",{position:"top-center"})
      setUser({...user,name:"",email:"",number:"",password:"",apassword:""});
    }
  }

  return (
    <>
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="https://github.com/harsh17112000/E-commerceapp/blob/main/client/public/blacklogoamazon.png?raw=true" alt="logo"/>
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Create your account</h1>
            <div className="formdata">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name"value={user.name} onChange={newUser}/>
            </div>
            <div className="formdata">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email"value={user.email} onChange={newUser}/>
            </div>
            <div className="formdata">
              <label htmlFor="number">Number</label>
              <input type="text" id="number" name="number"value={user.number} onChange={newUser}/>
            </div>
            <div className="formdata">
            <label htmlFor="password">Create Password</label>
              <input type="password" id="password" name="password" value={user.password} onChange={newUser}/>         
            </div>
            <div className="formdata">
            <label htmlFor="password">Password again</label>
              <input type="password" id="apassword" name="apassword"value={user.apassword} onChange={newUser}/>
                     
            </div>
            <button className="signin_btn" onClick={userData}>Create Account</button>
            <div className="signin_info">
              <p>Already having an account?</p>
              <NavLink to="/login">SignIn</NavLink>
            </div>
          </form>
        </div>
        <ToastContainer/>
      </div>
    </section>
    </>
  )
};
