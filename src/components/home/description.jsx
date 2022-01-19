import React, { Component } from "react";
import AboutUs from "../../assets/about-us.jpg";

class Description extends Component {
  render() {
    return (
      <div className="about-us">
        <div className="about-us-section">
          <h2>Know about us</h2>
          <div className="quote_border">
            <div></div>
        </div>
            <div>
              <p style={{color:'#393939',fontWeight:'500',fontSize:'16px',textTransform:'initial'}}>
                To provide technology and services to farmers to help them
                expand their business and provide them with a wider market. And
                to improve the present farming processes and to provide
                knowledge about recent agricultural issues.
              </p>

              <p style={{color:'#393939',fontWeight:'500',fontSize:'16px',textTransform:'initial'}}>
                To provide a helping hand to the farmers and farm labourers in
                improving their lives through the medium of technology, thereby,
                improving the agricultual sector in the Indian Economy.
              </p>
            </div>
          </div>
        <img src={AboutUs} width="25%" />
      </div>
    );
  }
}
export default Description;
