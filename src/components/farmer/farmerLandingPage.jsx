import { createMuiTheme, Dialog, DialogContent, DialogContentText, MuiThemeProvider } from '@material-ui/core';
import React, { Component } from 'react';

import Appbar from '../appbar';
import SideMenu from './sideMenu';


const theme = createMuiTheme({
    overrides: {
        MuiBackdrop: {
            root: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)'
            }
        },
        MuiDialog: {
            paperScrollPaper: {
                width: '100%'
            }
        },
        MuiTypography: {
            body1: {
                width: "100%",
                fontSize: "14px"
            }
        }
    }
})
class FarmerLandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUserTypePopup: false,
            selectedUser: "",
            showLoginForm: false
        }
    }
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <div className="home_page_background"></div>
                    <Appbar/>
                    <div className="home-page-content">
                      <SideMenu />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}
export default FarmerLandingPage;
