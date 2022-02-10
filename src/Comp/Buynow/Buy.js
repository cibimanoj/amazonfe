import React from 'react';
import {Divider} from "@mui/material";
import Option from "./Option";
import Total from "./Total";
import Right from "./Right";
import "./buy.css";

const Buy = () => {
  return <div className="buynow_section">
      <div className="buynow_container">
          <div className="left_buy">
              <h1>Shopping Cart</h1>
              <p>Select all items.</p>
              <span className="leftbuyprice">Price</span>
              <Divider/>
              <div className="item_containert">
                  <img src="https://m.media-amazon.com/images/I/612ytK4luvL._SL1500_.jpg" alt="img"/>
                  <div className="item_details">
                      <h3>Oneplus 9pro 256GB</h3>
                      <h3>Smart phone</h3>
                      <h3 className="diffrentprice">₹45000/-</h3>
                      <p className="unusuall"> Usually Dispatched in 2days</p>
                      <p>Eligible for Free Shipping.</p>
                      <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="img"/>  
                      <Option/>
                  </div>
                  <h3 className="item_price">₹45000/-</h3>
              </div>
              <Divider/>
              <Total/>
          </div>
          <Right/>
      </div>
  </div>;
};

export default Buy;



