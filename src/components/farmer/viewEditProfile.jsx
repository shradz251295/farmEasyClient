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
import { editProfile } from "../../services/farmerService";

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
const userdata= localStorage.getItem('farmer_data')!==null?JSON.parse(localStorage.getItem('farmer_data')):null;

class ViewEditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: userdata!==null?userdata.name:"",
      username: userdata!==null?userdata.emailId:"",
      address: userdata!==null?userdata.address:"",
      country: userdata!==null?userdata.country:"",
      state:userdata!==null?userdata.state: "",
      city: userdata!==null?userdata.city:"",
      pincode:userdata!==null?userdata.pincode: "",
      mobileNo1: userdata!==null?userdata.mobile_number:"",
      mobileNo2: userdata!==null?userdata.alternative_mobile_number:"",
      variant: "error",
      open: false,
      msg: "",
    };
    this.handleName = this.handleName.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handlePincode = this.handlePincode.bind(this);
    this.handleMobileNumber = this.handleMobileNumber.bind(this);
    this.handleAlternativeMobile = this.handleAlternativeMobile.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }
  handleUsername(event) {
    this.setState({ username: event.target.value });
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
  saveUpdatedData=()=>{
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
    }  else if (!this.state.address) {
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
        username: this.state.username,
        address: this.state.address,
        country: this.state.country,
        state: this.state.state,
        city: this.state.city,
        pincode: this.state.pincode,
        mobileNo1: this.state.mobileNo1,
        mobileNo2: this.state.mobileNo2,
      };
      editProfile(data).then((res) => {
        if(res.data.status===true && res.data!==null){
        localStorage.setItem('farmer_data',JSON.stringify(res.data.data))
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
                  <label>Farmer Name</label>
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
            </div>
            <div className="fields-per-row">
              <div style={{ width: "100%" }}>
                <label>Address</label>
                <TextField
                  className="form-fields"
                  multiline
                  rows={3}
                  value={this.state.address}
                  onChange={this.handleAddress}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </div>
            </div>
            <div className="fields-per-row">
              <div style={{ width: "49%" }}>
                <label>Country</label>
                <TextField
                  className="form-fields"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={this.state.country}
                        onChange={this.handleCountry}
                />
              </div>
              <div style={{ width: "49%" }}>
                <label>State</label>
                <TextField
                  className="form-fields"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={this.state.state}
                        onChange={this.handleState}
                />
              </div>
            </div>

            <div className="fields-per-row">
              <div style={{ width: "49%" }}>
                <label>City</label>
                <TextField
                  className="form-fields"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={this.state.city}
                  onChange={this.handleCity}
                />
              </div>
              <div style={{ width: "49%" }}>
                <label>Pincode</label>
                <TextField
                  className="form-fields"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={this.state.pincode}
                  onChange={this.handlePincode}
                />
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
                  value={this.state.mobileNo1}
                  onChange={this.handleMobileNumber}
                />
              </div>
              <div style={{ width: "49%" }}>
                <label>Alternative Mobile Number </label>
                <TextField
                  className="form-fields"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={this.state.mobileNo2}
                        onChange={this.handleAlternativeMobile}
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
export default ViewEditProfile;
