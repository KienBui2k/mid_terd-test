import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import "./Content.scss";
import Cart from "./Cart";
import Sub_banner from "./Sub_banner";
import Deal from "./Deal/Deal";
export default function Content() {
  const slider = useRef();
  const [banners, setBanners] = useState([
    {
      id: 1,
      url: "../images/slider_1.jpg",
      
    },
    {
      id: 2,
      url: "../images/slider_2.jpg",
    },
    {
      id: 3,
      url: "../images/slider_3.jpg",
    }
  ]);

  return (
    <>
      <Carousel
        ref={slider}
        autoplay
        autoplaySpeed={2000}
        // effect={"fade"}
        dots={true}
        dotPosition={"bottom"}
        waitForAnimate={"true"}
      >
        {banners.map((banner, index) => (
          <div className="items" key={banner.id + index}>
            <img className="items-img" src={banner.url} />
            <div style={{ position: "absolute" }} className="banner-desc">
              <p className="collection">SPRING/SUMMER COLLECTION 2022</p>
              <p className="sale">Get up to 30% Off</p>
              <p className="newArrivals">New Arrivals</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        ))}
      </Carousel>

          <Cart></Cart>
          <Sub_banner></Sub_banner>
          <Deal></Deal>
    </>
  );
}

