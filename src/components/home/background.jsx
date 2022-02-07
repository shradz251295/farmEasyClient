import React, { Component } from "react";
import farmer from "../../assets/farm-bg.jpg";
import homebanner from "../../assets/home-bg.jpg";

import { Zoom } from "react-slideshow-image";
import UserSection from "../usersSection";
import Description from "./description";
import OurService from "./ourServices";
import Analysis from "./analysis";

class Carousels extends Component {
  render() {
    return (
      <div className="home-page-content">
        <div style={{ background: "#fff", zIndex: "1" }}>
          <img src={homebanner} className="home_page_background" />
          <h1 className="home-banner-text">
            We celebrate the joy of agrculture
          </h1>
          <div style={{ marginTop: "-18%" }}>
            <UserSection />
          </div>
        </div>
        <Description />
        <OurService />
        {/* <Analysis/> */}
      </div>
       
    );
  }
}
export default Carousels;
