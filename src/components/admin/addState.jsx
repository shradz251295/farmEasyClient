import {
  Button,
  createMuiTheme,
  MuiThemeProvider,
  Snackbar,
  SnackbarContent,
  Tab,
  Tabs,
  TextField,
} from "@material-ui/core";
import React, { Component } from "react";
import { addState } from "../../services/adminService";
import stateData from './data.json';
import ViewStateDetails from "./viewStateDetails";

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
    MuiTab: {
      root: {
        color: "#3b3b3b !important",
        fontWeight: "bold !important",
      },
    },
    PrivateTabIndicator: {
      root: {
        backgroundColor: "green !important",
        height: "4px !important",
      },
    },
  },
});

class AddState extends Component {
  constructor(props){
    super(props);
    this.state={
      state:stateData.state_arr,
      selectedTab:"select_profile",
      selectedState:"",
      description:"",
      status:"active",
      open:false,
      variant:"error",
      msg:""
    }
  }
  handleTabSelection=(value)=>{
    this.setState({selectedTab:value})
}

  handleState=async(evt)=>{
   await this.setState({selectedState:evt.target.value})
  }

  handleStatus=async(evt)=>{
    await this.setState({status:evt.target.value})
   }
   handleDescription=async(evt)=>{
    await this.setState({description:evt.target.value})
   }

   
  editData=(key)=>{
    console.log(key);
    this.setState({
     selectedTab:"select_profile",
      selectedState:key.state,
      description:key.statedescription,
      status:key.status,
    })
  }


  submitState=()=>{
    if (this.state.selectedState==="") {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please select state",
      });
    } else if (this.state.description==="") {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please enter description",
      });
    } else {
      let data={
        username:JSON.parse(localStorage.getItem("admin_data")).username,
        state:this.state.selectedState,
        statedescription:this.state.description,
        city:"",
        citydescription:"",
        status:this.state.status
      }
     addState(data)
      .then((res)=>{
        console.log(res);
        if(res.status===true){
          this.setState({
            open: true,
            variant: "success",
            msg: "State added successfully !",
            selectedState:"",
            description:"",
            status:"active",
          });
        }
        else if(res.status===false){
          this.setState({
            open: true,
            variant: "error",
            msg: "State already added",
          });
        }
        else{
          this.setState({
            open: true,
            variant: "error",
            msg: "Something went wrong.",
          });
        }
      })
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div
          style={{ display: "flex", width: "100%", flexDirection: "column" }}
        >
          <Tabs
            value={this.state.selectedTab}
            aria-label="wrapped label tabs example"
            style={{ margin: "20px 50px 0 50px" }}
          >
            <Tab
              value={"select_profile"}
              label="Add State Details"
              onClick={() => this.handleTabSelection("select_profile")}
            />
            <Tab
              value={"view_details"}
              label="View State details"
              onClick={() => this.handleTabSelection("view_details")}
            />
          </Tabs>
          <div
            style={{
              margin: "50px",
              marginTop: "0",
              display: "flex",
              background: "#fff",
              height: "100%",
              color: "#2b2b2b",
              padding: "20px 80px",
            }}
          >
            {this.state.selectedTab==="select_profile"?
            <div style={{ width: "100%" }}>
              <h5>Enter State Details</h5>
              <div>
                <div className="fields-per-row">
                  <div style={{ width: "100%" }}>
                    <label>Select State</label>
                    <TextField
                      select
                      SelectProps={{
                        native: true,
                      }}
                      className="form-fields"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      value={this.state.selectedState}
                      onChange={this.handleState}
                      
                    >
                      <option value="">Please select state</option>
                      {this.state.state.map((k)=>
                      <option value={k.state}>{k.state}</option>
                      )}
                    </TextField>
                  </div>
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
                    value={this.state.description}
                    onChange={this.handleDescription}
                  />
                </div>
              </div>
              <div className="fields-per-row">
                <div style={{ width: "100%" }}>
                  <label>Status</label>
                  <TextField
                      select
                      SelectProps={{
                        native: true,
                      }}
                      className="form-fields"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      value={this.state.status}
                      onChange={this.handleStatus}
                    >
                       <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      </TextField>
                </div>
              </div>

              <Button className="singup-btn" onClick={this.submitState}>Submit</Button>
            </div>
            :
            <ViewStateDetails editData={this.editData}/>
                    }
          </div>
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
export default AddState;
