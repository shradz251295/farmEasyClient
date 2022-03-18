import {
  createMuiTheme,
  Dialog,
  DialogContent,
  DialogContentText,
  MuiThemeProvider,
} from "@material-ui/core";
import React, { Component } from "react";

import Appbar from "../appbar";
import Profile from "./profile";
import SideMenu from "./sideMenu";
import FarmersMarket from "./farmerMarket";
import ViewPreviousOrders from "./viewPreviousOrders";


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
class CustomerLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserTypePopup: false,
      selectedUser: "",
      showLoginForm: false,
      selectedMenu:"",
      productToEdit:""
    };
  }
  toggleSideMenu=(value)=>{
    this.setState({selectedMenu:value})
  }
  editProduce=(value)=>{
    this.setState({selectedMenu:"produce",productToEdit:value})
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <div className="home-page-content">
            {/* <div className="home_page_background"></div> */}
            <Appbar />
            <div style={{marginTop:'65px',position:'relative',background:'#f1f1f1',height:'100%',display:'flex',overflow:"hidden"}}>
              <SideMenu toggleSideMenu={this.toggleSideMenu}/>
              {
              this.state.selectedMenu==="farmers_kit"?
              <FarmersMarket/>
              :
              this.state.selectedMenu==="view_order"?
              <ViewPreviousOrders/>
              :
              <Profile />
    }
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default CustomerLandingPage;
