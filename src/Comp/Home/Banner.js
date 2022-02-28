import React from 'react';
import "./banner.css"
import Carousel from "react-material-ui-carousel"

const data=[
    "https://m.media-amazon.com/images/I/71jH691OPlL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61pxhbXv8tL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/51jKifqW4XL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61r0KZsiYTL._SX3000_.jpg",
  ]

const Banner = () => {
  return(
      <Carousel className="carousel"
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
          style: {
              background: "#fff",
              color: "#494949",
              borderRadius: 0,
              marginTop: -22,
              height: "104px",
          }
      }}
      >
          {data.map((imag,i)=>{
              return(
                  <div key={i}>
                      <img src={imag} className="banner_img"alt={i}/>
                  </div>
              )
          })}

      </Carousel>
    
  ) 
};

export default Banner;
