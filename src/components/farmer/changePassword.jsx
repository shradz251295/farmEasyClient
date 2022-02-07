import {
  Button,
  createMuiTheme,
  MuiThemeProvider,
  TextField,
} from "@material-ui/core";
import React, { Component } from "react";

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
                    />
                  </div>
                  <div style={{ width: "49%" }}>
                    <label>Confirm Password</label>
                    <TextField
                      className="form-fields"
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  </div>
                </div>
              </div>

              <Button className="singup-btn">Change Password</Button>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default ChangePassword;
