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
import Register from "./Register";

const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        width: "100% !important",
        margin:'0% !important'
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: "10px 15px",
        background: "#f9f9f9",
      },
    },
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showRegisterationPage: false,
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.hideRegisterForm = this.hideRegisterForm.bind(this);
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

  hideRegisterForm() {
    this.setState({ showRegisterationPage: false });
  }

  render() {
    console.log(this.state);
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
                  style={{ margin: "0", width: "-webkit-fill-available",alignItems:'flex-start' }}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </div>
              <div
                style={{ width: "100%", margin: "0", alignItems: "flex-start", marginBottom: "7%", }}
              >
                <label style={{ marginBottom: "1.5%" }}>
                  Password <span style={{ color: "red" }}>*</span>
                </label>
                <TextField
                  className="form-fields"
                  style={{ margin: "0", width: "-webkit-fill-available",alignItems:'flex-start' }}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </div>
              <Button className="singup-btn">Login</Button>

            </div>
          </div>
        </form>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Login;
