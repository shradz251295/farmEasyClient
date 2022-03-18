import {
    Avatar,
    Button,
    createMuiTheme,
    Divider,
    MuiThemeProvider,
    Snackbar,
    SnackbarContent,
    TextField,
  } from "@material-ui/core";
  import React, { Component } from "react";
  import { editProfile } from "../../services/adminService";
  
  const theme = createMuiTheme({
    overrides: {
      MuiAvatar: {
        root: {
          width: "150px",
          height: "150px",
        },
      },
      MuiDivider: {
        root: {
          height: "100%",
          border: "1px solid #f1f1f1",
        },
      },
      MuiFormControl:{
          root:{
              background:"ghostwhite !important"
          }
      }
    },
  });
  const userdata= localStorage.getItem('admin_data')!==null?JSON.parse(localStorage.getItem('admin_data')):null;
  
  class ViewEditProfile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: userdata!==null?userdata.firstname:"",
        lastname: userdata!==null?userdata.lastname:"",
        username: userdata!==null?userdata.username:"",
        mobileNo: userdata!==null?userdata.mobile_no:"",
        variant: "error",
        open: false,
        msg: "",
      };
      this.handleName = this.handleName.bind(this);
      this.handleLastName = this.handleLastName.bind(this);
      this.handleUsername = this.handleUsername.bind(this);
      this.handleMobileNumber = this.handleMobileNumber.bind(this);
    }
  
    handleName(event) {
      this.setState({ name: event.target.value });
    }
    handleLastName(event) {
        this.setState({ lastname: event.target.value });
      }
    handleUsername(event) {
      this.setState({ username: event.target.value });
    }
    handleMobileNumber(event) {
      this.setState({ mobileNo: event.target.value });
    }
    
    saveUpdatedData=()=>{
      if (!this.state.name) {
        this.setState({
          open: true,
          variant: "error",
          msg: "Firstname cannot be empty",
        });
      } else if (!/^[A-Za-z]+$/.test(this.state.name)) {
        this.setState({
          open: true,
          variant: "error",
          msg: "Please enter valid firstname",
        });
      }else if (!this.state.lastname) {
        this.setState({
          open: true,
          variant: "error",
          msg: "Lastname cannot be empty",
        });
      } else if (!/^[A-Za-z]+$/.test(this.state.lastname)) {
        this.setState({
          open: true,
          variant: "error",
          msg: "Please enter valid lastname",
        });
      }else if (!this.state.username) {
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
      }  
       else if (!this.state.mobileNo) {
        this.setState({
          open: true,
          variant: "error",
          msg: "Please enter your contact number",
        });
      } else {
        let data = {
          firstname: this.state.name,
          lastname:this.state.lastname,
          username: this.state.username,
          mobile_no: this.state.mobileNo
        };
        editProfile(data).then((res) => {
          if(res.data.status===true && res.data!==null){
          localStorage.setItem('admin_data',JSON.stringify(res.data.data))
          this.setState({
            open: true,
            variant: "success",
            msg: "Changes done Successfully!",
          });
          window.location.reload();
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
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <div
              style={{
                marginTop: "10%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Avatar />
              <span style={{ fontSize: "14px", marginTop: "10%" }}>
                Edit Photo
              </span>
            </div>
            <div>
            <Divider />
            </div>
            <div style={{ width: "60%" }}>
              <h5>Personal Details</h5>
              <div>
                <div className="fields-per-row">
                  <div style={{ width: "49%" }}>
                    <label>Firstname</label>
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
                    <label>Lastname</label>
                    <TextField
                      className="form-fields"
                      value={this.state.lastname}
                          onChange={this.handleLastName}
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  </div>
                </div>
              </div>
  
              <div className="fields-per-row">
                <div style={{ width: "49%" }}>
                  <label>Mobile Number</label>
                  <TextField
                    className="form-fields"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    value={this.state.mobileNo}
                    onChange={this.handleMobileNumber}
                  />
                </div>
                <div style={{ width: "49%" }}>
                    <label>Email ID</label>
                    <TextField
                      className="form-fields"
                      value={this.state.username}
                          onChange={this.handleUsername}
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  </div>
              </div>
              <Button className="singup-btn" onClick={this.saveUpdatedData}>Save Changes</Button>
            </div>
            <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            open={this.state.open}
            onClose={this.handleClose}
            autoHideDuration={4000}
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
  export default ViewEditProfile;
  