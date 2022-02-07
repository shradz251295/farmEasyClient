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
  Snackbar,
  SnackbarContent,
} from "@material-ui/core";
import farmerBanner from "../assets/farmer-banner.jpg";
import Appbar from "../components/appbar";
import { createAccount } from "../services/farmerService";
import { withRouter } from "react-router";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
      address: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      mobileNo1: "",
      mobileNo2: "",
      variant: "error",
      open: false,
      msg: "",
    };
    this.handleName = this.handleName.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handlePincode = this.handlePincode.bind(this);
    this.handleMobileNumber = this.handleMobileNumber.bind(this);
    this.handleAlternativeMobile = this.handleAlternativeMobile.bind(this);
    this.registerFarmer = this.registerFarmer.bind(this);
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
  handleAddress(event) {
    this.setState({ address: event.target.value });
  }
  handleCountry(event) {
    this.setState({ country: event.target.value });
  }
  handleState(event) {
    this.setState({ state: event.target.value });
  }
  handleCity(event) {
    this.setState({ city: event.target.value });
  }
  handlePincode(event) {
    this.setState({ pincode: event.target.value });
  }
  handleMobileNumber(event) {
    this.setState({ mobileNo1: event.target.value });
  }
  handleAlternativeMobile(event) {
    this.setState({ mobileNo2: event.target.value });
  }

  registerFarmer() {
    if (!this.state.name) {
      this.setState({
        open: true,
        variant: "error",
        msg: "Farmer's name cannot be empty",
      });
    } else if (!/^[A-Za-z]+$/.test(this.state.name)) {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please enter valid farmer's name",
      });
    } else if (!this.state.username) {
      this.setState({
        open: true,
        variant: "error",
        msg: "Email ID cannot be empty",
      });
    } else if (
      !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.username)
    ) {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please enter valid email ID",
      });
    } else if (!this.state.password) {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please enter password",
      });
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
        this.state.password
      )
    ) {
      alert(`Password must be eight characters or longer
              Password must contain atleast one Upper case letter
              Password must contain atleast one Lower case letter
              Password must contain atleast one special letter
              Password must contain atleast one number`);
    } else if (!this.state.confirmPassword) {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please re-enter password",
      });
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        open: true,
        variant: "error",
        msg: "Password and confirm password does not match",
      });
    } else if (!this.state.address) {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please enter your address",
      });
    } else if (!this.state.country) {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please enter your country",
      });
    } else if (!this.state.state) {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please enter your state",
      });
    } else if (!this.state.city) {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please enter your city",
      });
    } else if (!this.state.pincode) {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please enter your pincode",
      });
    } else if (!this.state.mobileNo1) {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please enter your contact number",
      });
    } else {
      let data = {
        name: this.state.name,
        emailId: this.state.username,
        password: this.state.password,
        address: this.state.address,
      };
      createAccount(data).then((res) => {
        console.log(res.data);
        this.setState({
          open: true,
          variant: "success",
          msg: "Registered Successfully!",
        });
        setTimeout(() => {
          this.props.history.push("/farmer-login");
        }, 2000);
      });
    }
  }

  handleClose = () => {
    this.setState({ open: false });
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
                        value={this.state.name}
                        onChange={this.handleName}
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
                        value={this.state.username}
                        onChange={this.handleUsername}
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
                        value={this.state.password}
                        onChange={this.handlePassword}
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
                        value={this.state.confirmPassword}
                        onChange={this.handleConfirmPassword}
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
                        value={this.state.address}
                        onChange={this.handleAddress}
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
                        value={this.state.country}
                        onChange={this.handleCountry}
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
                        value={this.state.state}
                        onChange={this.handleState}
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
                        value={this.state.city}
                        onChange={this.handleCity}
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
                        value={this.state.pincode}
                        onChange={this.handlePincode}
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
                        value={this.state.mobileNo1}
                        onChange={this.handleMobileNumber}
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </div>
                    <div style={{ width: "49%" }}>
                      <label>
                        Alternative Mobile Number{" "}
                        <span style={{ color: "red" }}></span>
                      </label>
                      <TextField
                        className="form-fields"
                        value={this.state.mobileNo2}
                        onChange={this.handleAlternativeMobile}
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </div>
                  </div>
                  <Button className="singup-btn" onClick={this.registerFarmer}>
                    Submit to Register
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={this.state.open}
          onClose={this.handleClose}
          autoHideDuration={5000}
        >
          <SnackbarContent
            style={{
              background: this.state.variant === "success" ? "green" : "red",
            }}
            message={this.state.msg}
          ></SnackbarContent>
        </Snackbar>
      </div>
    );
  }
}
export default withRouter(Register);
