import React, { Component } from "react";
import { withRouter } from "react-router";

import {
  Button,
  createMuiTheme,
  Snackbar,
  SnackbarContent,
  MuiThemeProvider,
  TextField,
} from "@material-ui/core";
import Register from "./Register";

const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        width: "100% !important",
        margin: "0% !important",
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: "10px 15px",
        background: "#f9f9f9",
      },
    },
    MuiSnackbar:{
      root:{
        background:"none !important",
      }
    },
    MuiSnackbarContent:{
      message:{
        background:"none !important",      
      },
      root:{
        width:'auto !important',
      }
    }
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showRegisterationPage: false,
      open:false,
      variant:"error",
      msg:""
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  handleUsername(event) {
    this.setState({ username: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  createAccount() {
    this.setState({ showRegisterationPage: true });
  }

  handleLogin = () => {
    if (!this.state.username) {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please enter email Id",
      });
    } else if (!this.state.password) {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please enter password",
      });
    } else {
      this.props.history.push("/farmer");
    }
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="farmer-form-options" style={{ padding: "0 20px 20px" }}>
          <form className="farmer-login-form">
            <h3>Login Panel</h3>
            <div
              className="signup-form-fields"
              style={{ width: "100%", margin: "0", alignItems: "flex-start" }}
            >
              <div
                className="fields-per-row"
                style={{ width: "100%", margin: "0", alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: "100%",
                    margin: "0",
                    alignItems: "flex-start",
                    marginBottom: "7%",
                  }}
                >
                  <label style={{ marginBottom: "1.5%" }}>
                    Email Addrees <span style={{ color: "red" }}>*</span>
                  </label>
                  <TextField
                    className="form-fields"
                    style={{
                      margin: "0",
                      width: "-webkit-fill-available",
                      alignItems: "flex-start",
                    }}
                    value={this.state.username}
                    onChange={this.handleUsername}
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "100%",
                    margin: "0",
                    alignItems: "flex-start",
                    marginBottom: "7%",
                  }}
                >
                  <label style={{ marginBottom: "1.5%" }}>
                    Password <span style={{ color: "red" }}>*</span>
                  </label>
                  <TextField
                    className="form-fields"
                    style={{
                      margin: "0",
                      width: "-webkit-fill-available",
                      alignItems: "flex-start",
                    }}
                    value={this.state.password}
                    onChange={this.handlePassword}
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </div>
                <Button className="singup-btn" onClick={this.handleLogin}>Login</Button>
              </div>
            </div>
          </form>
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            style={{
              background:'none !important'
            }}
            open={this.state.open}
            onClose={this.handleClose}
            autoHideDuration={50000}
          >
            <SnackbarContent
              style={{
                background: this.state.variant === "success" ? "green" : "red",
              }}
              message={this.state.msg}
            ></SnackbarContent>
          </Snackbar>
        </div>
      </MuiThemeProvider>
          
        
    );
  }
}
export default withRouter(Login);
