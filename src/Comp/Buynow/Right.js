import React from 'react';

const Right = () => {
  return <div className="right_buy">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="img"/>
      <div className="cost_right">
          <p>Your order is eligible for FREE Delievery</p><br/>
          <span>Select this option at checkout. Details</span>
          <h3>Subtotal(1 items):<span style={{fontWeight:700}}>₹45000.00</span></h3>
          <button className="rightbuy_btn">Proceed to Buy</button>
          <div className="emi">
              Emi Availabe
          </div>
      </div>
  </div>;
};

export default Right;
