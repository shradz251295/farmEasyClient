import {
    Button,
    createMuiTheme,
    MuiThemeProvider,
    Tab,
    Tabs,
    TextField,
  } from "@material-ui/core";
  import React, { Component } from "react";
import { addFarmerKit } from "../../services/adminService";
  
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
  
  class AddFarmerKit extends Component {
    constructor(props){
      super(props);
      this.state={
        imageDetails:""
      }
    }
    uploadImage=(event)=>{
      this.setState({imageDetails:event.target.files[0]});
    }

    submitKitDetails=(event)=>{
      event.preventDefault();
      const formData = new FormData();
      formData.append('produceCategory',"nuts");
      formData.append('produceName',"kaju");
      formData.append('image', this.state.imageDetails);
      formData.append('status',"active");

      addFarmerKit(formData)
      .then((result) => {
          console.log("profile", result.data.data);

          this.setState({
              profilePic: result.data.data
          })
      }).catch((err) => {
          alert(err);
      })

    }
    render() {
      console.log(this.state.imageDetails);
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
                <h5>Add or Edit Farmer's Kit</h5>
                <div>
                  <div className="fields-per-row">
                    <div style={{ width: "100%" }}>
                      <label>Category</label>
                      <TextField
                        select
                        SelectProps={{
                          native: true,
                        }}
                        className="form-fields"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      >
                        <option>Seeds</option>
                        <option>Fertilizers</option>
                        <option>Fodders</option>
                        <option>Machinery and Equipments</option>
                      </TextField>
                    </div>
                  </div>
                </div>
                <div className="fields-per-row">
                  <div style={{ width: "100%" }}>
                    <label>Product Name</label>
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
                    <label>Image</label>
                    {/* <TextField
                      className="form-fields"
                      InputProps={{
                        disableUnderline: true,
                      }}
                    /> */}
                    <input type="file" className="form-fields" name="myfile" onChange={this.uploadImage}/>
                  </div>
                </div>
                <div className="fields-per-row">
                  <div style={{ width: "100%" }}>
                    <label>Product Description</label>
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
                  <div style={{ width: "100%" }}>
                    <label>Status</label>
                    <TextField
                      className="form-fields"
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  </div>
                </div>
  
                <Button className="singup-btn" onClick={this.submitKitDetails}>Submit</Button>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      );
    }
  }
  export default AddFarmerKit;
  