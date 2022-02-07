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
        background: "white",
      },
      paperAnchorDockedLeft: {
        borderColor: "white",
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
    };
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <div className="home-page-content">
            {/* <div className="home_page_background"></div> */}
            <Appbar />
            <div style={{marginTop:'65px',position:'relative',background:'#f1f1f1',height:'100%',display:'flex'}}>
              <SideMenu />
              <FarmerProfile />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default FarmerLandingPage;
