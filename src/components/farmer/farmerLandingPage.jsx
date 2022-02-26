import {
  createMuiTheme,
  Dialog,
  DialogContent,
  DialogContentText,
  MuiThemeProvider,
} from "@material-ui/core";
import React, { Component } from "react";

import Appbar from "../appbar";
import FarmerProfile from "./profile";
import SideMenu from "./sideMenu";
import SellProduce from "./sellProduct";
import ViewProducts from  "./viewProducts"
import FarmerKit from "./farmersKit";
import FarmerMarket from "./farmersMarket";


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
class FarmerLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserTypePopup: false,
      selectedUser: "",
      showLoginForm: false,
      selectedMenu:""
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
            <div style={{marginTop:'65px',position:'relative',background:'#f1f1f1',height:'100%',display:'flex',overflow:"hidden"}}>
              <SideMenu toggleSideMenu={this.toggleSideMenu}/>
              {this.state.selectedMenu==="produce"?
              <SellProduce/>
              :
              this.state.selectedMenu==="view_produce"?
              <ViewProducts/>
              :
              this.state.selectedMenu==="farmers_kit"?
              <FarmerKit/>
              :
              this.state.selectedMenu==="farmers_market"?
              <FarmerMarket />
              :
              <FarmerProfile />
    }
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default FarmerLandingPage;
