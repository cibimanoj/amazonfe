import React from "react";
import Carousel from "react-multi-carousel";
import "./slide.css";
import "react-multi-carousel/lib/styles.css";
import Divider from "@mui/material/Divider";
//import { products } from "./productdata";
import {NavLink} from "react-router-dom"

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

const Slide = ({title,products}) => {
  return (
    
    <div className="products_section">
      <div className="products_deal">
        <h3>{title}</h3>
        <button className="view_btn">View all</button>
      </div>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((e,i) => {
          return (
            <NavLink key={i} to={`/products/${e.id}`}>
            <div className="products_items">
              <div className="product_img">
                <img src={e.img} alt="productitem" />
              </div>
              <p className="products_name">{e.name}</p>
              <p className="products_offer" style={{ color: "#  007185" }}>
                {e.discount}
              </p>
              <p className="products_explore">{e.price}/-</p>
            </div>
            </NavLink>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slide;
