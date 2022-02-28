import React,{useState} from "react";
import "./form.css";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // console.log(data);

  const addData = (e) => {
    const { name, value } = e.target;
    console.log(data);

    setData(() => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const userLogin= async(e) => {
    e.preventDefault();
    const {email,password}=data;
    const res =await fetch("https://webscraping-amazonclone.herokuapp.com/login",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email, password
      })
      
    });
    const userData = await res.json()
    console.log(userData);
    if(res.status==400||!userData){
      toast.warn("invalid details.",{position:"top-center"})
    }else{
      toast.success("logged successfully.",{position:"top-center"})
      setData({...data,email:"",password:""})
    }
  }


  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="https://github.com/harsh17112000/E-commerceapp/blob/main/client/public/blacklogoamazon.png?raw=true" alt="signupimg" />
          </div>
          <div className="sign_form">
            <form method='POST'>
              <h1>Sign-In</h1>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={addData}
                  value={data.email}
                  id="email"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={addData}
                  value={data.password}
                  id="password"
                  placeholder="At least 6 characters"
                />
              </div>
              <button type="submit" className="signin_btn" onClick={userLogin}>
                Continue
              </button>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>New to Amazon?</p>
            <button>
              <NavLink to="/register">Create your Amazon Account</NavLink>
            </button>
          </div>
          <ToastContainer/>
        </div>
      </section>
    </>
  );
};
