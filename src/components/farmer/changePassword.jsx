import {
  Button,
  createMuiTheme,
  MuiThemeProvider,
  Snackbar,
  SnackbarContent,
  TextField,
} from "@material-ui/core";
import React, { Component } from "react";
import { changePassword } from "../../services/farmerService";

const theme = createMuiTheme({
  overrides: {
    PrivateTabIndicator: {
      root: {
        backgroundColor: "green !important",
        height: "4px !important",
      },
    },
    MuiFormControl: {
      root: {
        background: "ghostwhite !important",
      },
    },
  },
});

class ChangePassword extends Component {
  constructor(props){
    super(props);
    this.state={
      oldPassword:"",
      newPassword:"",
      confirmPassword:"",
      variant: "error",
      open: false,
      msg: "",
    }
  }

  handleOldPassword=(event)=>{
    this.setState({oldPassword:event.target.value})
  }
  handleNewPassword=(event)=>{
    this.setState({newPassword:event.target.value})
  }
  handleConfirmPassword=(event)=>{
    this.setState({confirmPassword:event.target.value})
  }

  saveNewPassword=()=>{
    if (!this.state.oldPassword) {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please enter old password",
      });
    }else if (!this.state.newPassword) {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please enter new password",
      });
    }
    else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
        this.state.newPassword
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
        msg: "Please re-enter new password",
      });
    } else if (this.state.newPassword !== this.state.confirmPassword) {
      this.setState({
        open: true,
        variant: "error",
        msg: "New Password and confirm password does not match",
      });
    }
    else{
      let data = {
        username: JSON.parse(localStorage.getItem("farmer_data")).emailId,
       password:this.state.newPassword
      };
      changePassword(data)
      .then((res) => {
        if(res.status===true && res.data!==null){
        this.setState({
          open: true,
          variant: "success",
          msg: "Password updated Successfully!",
        });
      }
      else{
        this.setState({
          open: true,
          variant: "error",
          msg: "Something went wrong.",
        });
      }
      });
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div
          style={{ display: "flex", width: "100%", flexDirection: "column" }}
        >
          <div
            style={{
              margin: "50px",
              display: "flex",
              background: "#fff",
              height: "100%",
              color: "#2b2b2b",
              padding: "20px 80px",
            }}
          >
            <div style={{ width: "100%" }}>
              <h5>Change Password</h5>
              <div className="fields-per-row">
                <div style={{ width: "49%" }}>
                  <label>Old Password</label>
                  <TextField
                    className="form-fields"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    value={this.state.oldPassword}
                    onChange={this.handleOldPassword}
                  />
                </div>
              </div>
              <div>
                <div className="fields-per-row">
                  <div style={{ width: "49%" }}>
                    <label>New Password</label>
                    <TextField
                      className="form-fields"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      value={this.state.newPassword}
                      onChange={this.handleNewPassword}
                    />
                  </div>
                  <div style={{ width: "49%" }}>
                    <label>Confirm Password</label>
                    <TextField
                      className="form-fields"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      value={this.state.confirmPassword}
                      onChange={this.handleConfirmPassword}
                    />
                  </div>
                </div>
              </div>

              <Button className="singup-btn" onClick={this.saveNewPassword}>Change Password</Button>
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
      </MuiThemeProvider>
    );
  }
}
export default ChangePassword;
