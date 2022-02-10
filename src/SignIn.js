import React,{useState} from "react";
import "./form.css";
import { NavLink } from "react-router-dom";

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

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="https://github.com/harsh17112000/E-commerceapp/blob/main/client/public/blacklogoamazon.png?raw=true" alt="signupimg" />
          </div>
          <div className="sign_form">
            <form>
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
              <button type="submit" className="signin_btn">
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
        </div>
      </section>
    </>
  );
};
