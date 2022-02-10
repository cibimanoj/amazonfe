import "./App.css";
import React from "react";
import { Navbar } from "./Comp/Header/Navbar";
import { Newnav } from "./Comp/Newnav/Newnav";
import {Maincomp} from "./Comp/Home/Maincomp";
import { Footer } from "./Comp/Footer/Footer";
import {Routes,Route} from"react-router-dom";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import Cart from "./Comp/Cart/Cart";
import Buy from "./Comp/Buynow/Buy";


function App() {
  return (
    <>
      <Navbar/>
      <Newnav/>
      <Routes>
        <Route path="/" element={<Maincomp/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/register" element={<SignUp/>} />
        <Route path="/products/:id" element={<Cart/>} />
        <Route path="/buy" element={<Buy/>} />
      </Routes>
      <Footer/>
    </>
  );
}
export default App;








