import {
  Avatar,
  Button,
  createMuiTheme,
  Divider,
  MuiThemeProvider,
  TextField,
} from "@material-ui/core";
import React, { Component } from "react";

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

class ViewEditProfile extends Component {
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
          <Divider />
          <div style={{ width: "60%" }}>
            <h5>Personal Details</h5>
            <div>
              <div className="fields-per-row">
                <div style={{ width: "49%" }}>
                  <label>Farmer Name</label>
                  <TextField
                    className="form-fields"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </div>
                <div style={{ width: "49%" }}>
                  <label>Email ID</label>
                  <TextField
                    className="form-fields"
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
                />
              </div>
              <div style={{ width: "49%" }}>
                <label>State</label>
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
                <label>City</label>
                <TextField
                  className="form-fields"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </div>
              <div style={{ width: "49%" }}>
                <label>Pincode</label>
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
                <label>Mobile Number</label>
                <TextField
                  className="form-fields"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </div>
              <div style={{ width: "49%" }}>
                <label>Alternative Mobile Number </label>
                <TextField
                  className="form-fields"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </div>
            </div>
            <Button className="singup-btn">Save Changes</Button>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default ViewEditProfile;
