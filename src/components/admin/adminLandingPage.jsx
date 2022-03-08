import {
  createMuiTheme,
  Dialog,
  DialogContent,
  DialogContentText,
  MuiThemeProvider,
} from "@material-ui/core";
import React, { Component } from "react";

import Appbar from "../appbar";
import AdminDashboard from "./adminDashboard";
import AddState from "./addState";
import AdminSideMenu from "./adminSideMenu";
import AddCity from "./addCity";
import AddProduceCategory from "./addProduceCategory";
import AddProduceType from "./addProduceType";
import AddFarmerKit from "./addFarmerKit";

const theme = createMuiTheme({
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      },
    },
    MuiDialog: {
      paperScrollPaper: {
        width: "100%",
      },
    },
    MuiMenuItem: {
      root: {
        height: "50px",
      },
    },
    MuiDrawer: {
      paperAnchorLeft: {
          position:'inherit',
        top: 65,
        width: 280,
        background: "#006400",
      },
      paperAnchorDockedLeft: {
        border: "none !important",
        padding:"28px 12px !important"
      },
    },
    MuiTypography: {
      body1: {
        width: "100%",
        fontSize: "14px",
      },
    },
  },
});
class AdminLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenu:"dashboard"
    };
  }
  toggleSideMenu=(value)=>{
    this.setState({selectedMenu:value})
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <div className="home-page-content">
            {/* <div className="home_page_background"></div> */}
            <Appbar />
            <div style={{marginTop:'65px',position:'relative',background:'#f1f1f1',height:'100%',display:'flex'}}>
              <AdminSideMenu toggleSideMenu={this.toggleSideMenu}/>
              {this.state.selectedMenu==="dashboard"?
              <AdminDashboard />
              :
              this.state.selectedMenu==="addState"?
              <AddState />
              :
              this.state.selectedMenu==="addCity"?
              <AddCity />
              :
              this.state.selectedMenu==="addCategory"?
              <AddProduceCategory />
              :
              this.state.selectedMenu==="addType"?
              <AddProduceType />
              :
              this.state.selectedMenu==="addFarmerKit"?
              <AddFarmerKit/>
              :
              null}
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default AdminLandingPage;
