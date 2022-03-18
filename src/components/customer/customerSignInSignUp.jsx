import { Button, Divider, TextField } from "@material-ui/core";
import React, { Component } from "react";
import padlock from "../../assets/padlock.png";
import form from "../../assets/form.png";
import Appbar from "../appbar";
import consumerBanner from "../../assets/consumer.jpg";
import { withRouter } from "react-router";
import Login from "../../pages/customer/loginCustomer";

class CustomerSignInUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm:  this.props.location.state !== undefined &&
      this.props.location.state.showLogin === true ? true : false,
    };
    this.handleRegisteration = this.handleRegisteration.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleRegisteration = () => {
    this.props.history.push("/customer-register");
  };
  handleLogin = () => {
    this.setState({ showLoginForm: true });
  };
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
            <h1>Customer Login/Register</h1>
          </div>
          <Divider style={{ margin: "0.5% 0" }} />
          <div
            className="farmer-login-register-tabs"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div className="farmer_login_quote">
              <h1>CUSTOMER</h1>
              <h1>LOGIN/REGISTER</h1>
              <div className="quote_border">
                <div></div>
              </div>
              <div className="farmer_quote">
                <p>
                  Why to visit Super Store and Pay High? Order all products and
                  get deliver at your doorstep.
                </p>
              </div>
            </div>
            <div className="farmer-login-options">
              {this.state.showLoginForm === true ? (
                <Login />
              ) : (
                <div style={{ justifyContent: "center" }}>
                  <h2>Existing Customer</h2>
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

export default withRouter(CustomerSignInUp);
