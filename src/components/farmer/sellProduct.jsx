import { Button, createMuiTheme, MuiThemeProvider, Tab, Tabs, TextField } from "@material-ui/core";
import React, { Component } from "react";
import ViewEditProfile from "./viewEditProfile";

const theme = createMuiTheme({
    overrides: {
        PrivateTabIndicator:{
            root:{
                backgroundColor:'green !important',
                height:'4px !important'
            }
        },
        MuiFormControl:{
            root:{
                background:"ghostwhite !important"
            }
        }
    }
})

class SellProduct extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
      <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <div
          style={{
            margin: "50px",
            display: "flex",
            background: "#fff",
            height:'100%',
            color:'#2b2b2b',
            padding:'20px 80px'
          }}
        >
            <div style={{ width: "100%" }}>
            <h5>Enter Product Details</h5>
            <div>
              <div className="fields-per-row">
                <div style={{ width: "49%" }}>
                  <label>Product Category</label>
                  <TextField
                  select
                    className="form-fields"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  >
                       <option>seeds</option>
                    <option>fruits</option>
                    </TextField>
                </div>
                <div style={{ width: "49%" }}>
                  <label>Product</label>
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
              <div style={{ width: "49%" }}>
                <label>Quantity</label>
                <TextField
                  className="form-fields"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </div>
              <div style={{ width: "49%" }}>
                <label>Quantity Type</label>
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
                <label>Description</label>
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
                <label>Image</label>
                <TextField
                  className="form-fields"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </div>
              <div style={{ width: "49%" }}>
                <label>Status</label>
                <TextField
                  className="form-fields"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </div>
            </div>

           
            <Button className="singup-btn">Submit</Button>
          </div>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}
export default SellProduct;
