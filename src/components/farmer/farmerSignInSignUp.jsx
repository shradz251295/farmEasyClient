import { Button, Divider, TextField } from "@material-ui/core";
import React, { Component } from "react";
import padlock from "../../assets/padlock.png";
import form from "../../assets/form.png";
import Appbar from "../appbar";
import farmerBanner from "../../assets/farmer-banner.jpg";
import { withRouter } from "react-router";
import Login from "../../pages/Login";

class FarmerSignInUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false,
    };
    this.handleRegisteration = this.handleRegisteration.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleRegisteration = () => {
    this.props.history.push("/farmer-register");
  };
  handleLogin = () => {
    this.setState({ showLoginForm: true });
  };
  render() {
    return (
      <div>
        <Appbar />
        <div className="farmer-portal-login">
          <img src={farmerBanner} className="login-banner" />
          <div
            className="farmer-login-register-tabs"
            style={{ color: "orange" }}
          >
            <h1>Farmer Login/Register</h1>
          </div>
          <Divider style={{ margin: "0.5% 0" }} />
          <div
            className="farmer-login-register-tabs"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div className="farmer_login_quote">
              <h1>FARMER</h1>
              <h1>LOGIN/REGISTER</h1>
              <div className="quote_border">
                <div></div>
              </div>
              <div className="farmer_quote">
                <p>
                  Online platform links farmer to buyers to buy and sell your
                  agriculture products online.
                </p>
              </div>
            </div>
            <div className="farmer-login-options">
              {this.state.showLoginForm === true ? (
                <Login />
              ) : (
                <div style={{ justifyContent: "center" }}>
                  <h2>Existing Farmer</h2>
                  <img src={padlock} width="20%" />
                  <Button
                    onClick={this.handleLogin}
                    style={{
                      background: "#3335FF",
                      color: "#fff",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      width: "80%",
                      marginTop: "8%",
                    }}
                  >
                    Sign in & Get Started
                  </Button>
                </div>
              )}
              <div style={{ justifyContent: "center" }}>
                <h2>New User</h2>
                <img src={form} width="20%" />
                <Button
                  onClick={this.handleRegisteration}
                  style={{
                    background: "#FFC300",
                    color: "#000",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    width: "80%",
                    marginTop: "8%",
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>

            {/* registeration form  */}
            {/* <Register /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FarmerSignInUp);
