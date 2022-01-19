import { createMuiTheme, Dialog, DialogContent, DialogContentText, MuiThemeProvider } from '@material-ui/core';
import React, { Component } from 'react';
import '../App.css';
import farmer from '../assets/farmer.svg';
import customer from '../assets/users.svg';
import supplier from '../assets/supplier.svg';
import admin from '../assets/admin.svg';
import Appbar from '../components/appbar';
import UserSection from '../components/usersSection';
import Carousels from '../components/home/background';

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
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUserTypePopup: false,
            selectedUser: "",
            showLoginForm: false
        }
    }

    handleUserTypePopup = () => {
        this.setState({ showUserTypePopup: !this.state.showUserTypePopup });
    }

    closeUserTypePopup = () => {
        this.setState({ showUserTypePopup: false });
    }

    handleUserTypeSelection = (value) => {
        this.setState({ showUserTypePopup: false, selectedUser: value, showLoginForm: true, })
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Appbar
                        handleUserTypePopup={this.handleUserTypePopup} />
                    {/* <div className="home-page-content">
                    <div className="home_page_background"></div>
                        <h1>We celebrate the joy of agrculture</h1>
                        <UserSection />
                    </div> */}
<Carousels />
                </div>
            </MuiThemeProvider>
        )
    }
}
export default Home;
