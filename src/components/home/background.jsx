import React, { Component } from "react";
import farmer from "../../assets/farm-bg.jpg";
import homebanner from "../../assets/home-bg.jpg";

import { Zoom } from "react-slideshow-image";
import UserSection from "../usersSection";
import Description from "./description";
import OurService from "./ourServices";
import Analysis from "./analysis";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import AdminDashboard from "../admin/adminDashboard";

const slider = [
  {
      title: "We cultivate new crops to make farmers increase profits!",
      description: "'' Agricultural growth is a proven driver of poverty reduction. When agriculture stimulates growth ... the growth is twice as effective in reducing poverty as growth based in other sectors ''",
      tag: "GIZA MDOE",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=682&q=80",
  },
  {
      title: "Solutions for a healthier, sustainable future",
      description: "'' Agriculture is the greatest and fundamentally the most important of our industries. The cities are but the branches of the tree of national life, the roots of which go deeply into the land. We all flourish or decline with the farmer. ''",
      tag: "BERNARD BARUCH",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1499&q=80",
  },
  {
      title: "Helping farmers.Fighting climate change.",
      description: "'' I know of no pursuit in which more real and important services can be rendered to any country than by improving its agriculture, its breed of useful animals, and other branches of a husbandman's cares. ''",
      tag: "GEORGE WASHINGTON",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
];
class Carousels extends Component {
  render() {
    return (
      <div className="home-page-content11">
         <div>
            <Slider className="slider-wrapper" autoplay={3000}>
                {slider.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center`, marginTop: "30px" }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description} <br />- {item.tag.toLowerCase()}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        {/* <div style={{ background: "#fff", zIndex: "1" }}>
          <img src={slider[0].image} className="home_page_background1" />
          <h1 className="home-banner-text">
            We celebrate the joy of agrculture
          </h1>
          <div style={{ marginTop: "-18%" }}>
            <UserSection />
          </div>
        </div> */}
        <AdminDashboard/>
        {/* <Analysis /> */}
        <UserSection />
        <Description />
        <OurService />
        {/* <Analysis/> */}
      </div>
       
    );
  }
}
export default Carousels;
