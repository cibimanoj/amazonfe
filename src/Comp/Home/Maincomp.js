import React, { useEffect } from "react";
import Banner from "./Banner";
import Slide from "./Slide";
import "./home.css";
import { getProducts } from "../Redux/Action/action";
import { useDispatch, useSelector } from "react-redux";

export const Maincomp = () => {
  const { products } = useSelector((state) => state.productsdata);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
      </div>
      <div className="slide_part">
        <div className="left_slide">
          <Slide title="Deals of the day" products={products} />
        </div>
        <div className="right_slide">
          <h3>New Arrivals</h3>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg"
            alt=""
          />
          <a href="#">See More</a>
        </div>
      </div>
      <Slide title="Best sellers" products={products} />
      <div className="center_img">
        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
      </div>
      <Slide title="Top Rated" products={products} />
      <Slide title="Upto 80% off" products={products} />
    </div>
  );
};
