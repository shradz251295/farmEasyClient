import { Button, Divider, TextField } from "@material-ui/core";
import React, { Component } from "react";
import padlock from "../../assets/padlock.png";
import form from "../../assets/form.png";
import Appbar from "../appbar";
import consumerBanner from "../../assets/agriculture.jpg";
import { withRouter } from "react-router";
import Login from "../../pages/admin/Login";

class AdminLogin extends Component {

  render() {
    return (
      <div>
        <Appbar />
        <div className="farmer-portal-login">
          <img src={consumerBanner} className="login-banner" />
          <div
            className="farmer-login-register-tabs"
            style={{ color: "orange" }}
          >
            <h1>Admin Login</h1>
          </div>
          <Divider style={{ margin: "0.5% 0" }} />
          <div
            className="farmer-login-register-tabs"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div className="farmer_login_quote">
              <h1>ADMIN LOGIN</h1>
              <div className="quote_border">
                <div></div>
              </div>
              <div className="farmer_quote" >
                <p style={{width:"80%"}}>
                Administer the categories for the products and all website information's.
                </p>
              </div>
            </div>
            <div className="farmer-login-options">
              <Login />
            </div>

            {/* registeration form  */}
            {/* <Register /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AdminLogin);
