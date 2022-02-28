import React,{ useEffect,useState}from "react";
import {useParams} from "react-router-dom";
import "./cart.css";
import Divider from "@mui/material/Divider";

const Cart = () => {
  const [inddata,setInddata]=useState([])
  console.log(inddata)
const {id}=useParams();
console.log(id)
const getinddata = async()=>{
  const res = await fetch(`https://webscraping-amazonclone.herokuapp.com/products/${id}`,{
      method:"GET",
      headers:{
          "Content-Type": "application/json"
      },
  });

  const data = await res.json();
  //console.log(data);
  if( res.status!==201){
    console.log("No data available")
  }else{
    setInddata(data)
  }
}
useEffect(()=>{
  getinddata();
},[id])

  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img src={inddata.img} alt="product img" />
          <div className="cart_btn">
            <button className="cart_btn1">Add to cart</button>
            <button className="cart_btn2">Buy now</button>
          </div>
        </div>
        <div className="right_cart">
            <h3>{inddata.category}</h3>
            <h4>{inddata.name}</h4>
            <Divider/>
            <p className="mrp">Price:<span style={{color:"black",fontWeight:"500"}}>{inddata.price}</span></p>
            <p>Rating: <span style={{color:"#b12704"}}>{inddata.rating}⭐</span></p>
            <div className="discount_box">
                <h5>Discount:<span style={{color:"#111"}}>{inddata.discount}</span></h5>
                <h4>Free Delievery: <span style={{color:"#111",fontWeight:600}}>With 2-3days</span></h4>
                <p>Express Delievery: <span style={{color:"#111",fontWeight:600}}>Tomorrow -12pm</span></p>
            </div>
            <p className="description">About the Item:<span style={{color:"#565959",fontSize:"14px",fontWeight:500,letterSpacing:"0.4px"}}>
            {inddata.description}
             </span></p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
