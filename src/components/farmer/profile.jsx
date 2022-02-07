import { createMuiTheme, MuiThemeProvider, Tab, Tabs } from "@material-ui/core";
import React, { Component } from "react";
import ChangePassword from "./changePassword";
import ViewEditProfile from "./viewEditProfile";

const theme = createMuiTheme({
    overrides: {
        MuiTab:{
            root:{
                color:"#3b3b3b !important",
                fontWeight:"bold !important"
            }
        },
        PrivateTabIndicator:{
            root:{
                backgroundColor:'green !important',
                height:'4px !important'
            }
        }
    }
})

class FarmerProfile extends Component {
  constructor(props){
    super(props);
    this.state={
     selectedTab:"select_profile"
    }
  }

  handleTabSelection=(value)=>{
      this.setState({selectedTab:value})
  }

  render() {
    return (
        <MuiThemeProvider theme={theme}>
      <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <Tabs value={this.state.selectedTab} aria-label="wrapped label tabs example" style={{margin:"20px 50px 0 50px"}}>
          <Tab 
          value={"select_profile"}
          label="View/Edit Profile" 
          onClick={()=>this.handleTabSelection("select_profile")}
          />
          <Tab 
          value={"change_pswd"} 
          label="Change Password" 
          onClick={()=>this.handleTabSelection("change_pswd")}
          />
        </Tabs>
        <div
          style={{
            margin: "0 50px 50px",
            display: "flex",
            background: "#fff",
            height:'100%',
            color:'#2b2b2b',
            padding:'20px'
          }}
        >
          {this.state.selectedTab==="select_profile"?
            <ViewEditProfile/>
            :
            <ChangePassword/>
        }
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}
export default FarmerProfile;
