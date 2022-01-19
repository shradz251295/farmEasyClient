import React, { Component } from "react";
import {
  Button,
  createMuiTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  MuiThemeProvider,
  TextField,
} from "@material-ui/core";
import farmerBanner from "../assets/farmer-banner.jpg";
import Appbar from "../components/appbar";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }
  handleUsername(event) {
    this.setState({ username: event.target.value });
  }
  handlePassword(event) {
    this.setState({ password: event.target.value });
  }
  handleConfirmPassword(event) {
    this.setState({ confirmPassword: event.target.value });
  }

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
            {/* <h1>Farmer Login/Register</h1> */}
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

            <div className="farmer-form-options">
              <form className="farmer-signup-form">
                <h3>Registeration Panel</h3>
                <div className="signup-form-fields">
                  <div className="fields-per-row">
                    <div style={{ width: "49%" }}>
                      <label>
                        Farmer Name <span style={{ color: "red" }}>*</span>
                      </label>
                      <TextField
                        className="form-fields"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </div>
                    <div style={{ width: "49%" }}>
                      <label>
                        Email ID <span style={{ color: "red" }}>*</span>
                      </label>
                      <TextField
                        className="form-fields"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="fields-per-row">
                    <div style={{ width: "49%" }}>
                      <label>
                        Password <span style={{ color: "red" }}>*</span>
                      </label>
                      <TextField
                        className="form-fields"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </div>
                    <div style={{ width: "49%" }}>
                      <label>
                        Confirm Password <span style={{ color: "red" }}>*</span>
                      </label>
                      <TextField
                        className="form-fields"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="fields-per-row">
                    <div style={{ width: "100%" }}>
                      <label>
                        Address <span style={{ color: "red" }}>*</span>
                      </label>
                      <TextField
                        className="form-fields"
                        multiline
                        rows={3}
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="fields-per-row">
                    <div style={{ width: "49%" }}>
                      <label>
                        Country <span style={{ color: "red" }}>*</span>
                      </label>
                      <TextField
                        className="form-fields"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </div>
                    <div style={{ width: "49%" }}>
                      <label>
                        State <span style={{ color: "red" }}>*</span>
                      </label>
                      <TextField
                        className="form-fields"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </div>
                  </div>

                  <div className="fields-per-row">
                    <div style={{ width: "49%" }}>
                      <label>
                        City <span style={{ color: "red" }}>*</span>
                      </label>
                      <TextField
                        className="form-fields"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </div>
                    <div style={{ width: "49%" }}>
                      <label>
                        Pincode <span style={{ color: "red" }}>*</span>
                      </label>
                      <TextField
                        className="form-fields"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </div>
                  </div>

                  <div className="fields-per-row">
                    <div style={{ width: "49%" }}>
                      <label>
                        Mobile Number <span style={{ color: "red" }}>*</span>
                      </label>
                      <TextField
                        className="form-fields"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </div>
                    <div style={{ width: "49%" }}>
                      <label>
                        Alternative Mobile Number{" "}
                        <span style={{ color: "red" }}>*</span>
                      </label>
                      <TextField
                        className="form-fields"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </div>
                  </div>
                  <Button className="singup-btn">Submit to Register</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
