import React, { Component } from 'react';
import { AppBar, Toolbar, MenuItem, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import '../App.css';
import logo from '../assets/fresh-farm-logo.png';
import SideMenu from './farmer/sideMenu';

// const theme = createMuiTheme({
//     overrides: {
//         MuiAppBar: {
//             root: {
//                 zIndex: '1100'
//             }
//         }
//     }
// })

const theme = createMuiTheme({
    overrides: {
       
        MuiAppBar: {
            root: {
                
                zIndex: '1100'

            },
            // appBarShift: {
            //     marginLeft: 250,

            // },

            colorPrimary: {
                color: "gray",
                fontSize: 25,
                fontFamily: "georgia"
            },

        },
        MuiPaper:{
            elevation4:{
                boxShadow:"1px 5px 10px 0 #000 !important"
            }
        },
        MuiToolbar: {
            regular: {
                display: "flex",
                justifyContent: "space-between",
                // width: "100%"
            }
        },
        MuiMenuItem:{
            root:{
                fontWeight:"bold",
                fontSize:"16px"
            }
        }
       

    },
    typography: {
        useNextVariants: true,
    },
})


class Appbar extends Component {
    handleUserTypeSelection = (value) => {
        if(value==="Home"){
            window.location.href="/"
        }else if(value==="Customer"){
            window.location.href="/customer-login"
        }else if(value==="Admin"){
            window.location.href="/admin-login"
        }else{
            window.location.href="/farmer-login"
        }
    }
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <AppBar className="common_appbar">
                    <Toolbar>
                        <div className="appbar-parent">
                            <div>
                                <img src={logo} alt="appbar menu logo" />
                            </div>
                            <div className="appbar-menu">
                                <MenuItem onClick={()=>this.handleUserTypeSelection('Home')}>
                                    <span className="menu_list">Home</span>
                                </MenuItem>
                                
                                <MenuItem onClick={()=>this.handleUserTypeSelection('Farmer')}>
                                    <span className="menu_list">Farmer</span>
                                </MenuItem>
                                <MenuItem onClick={()=>this.handleUserTypeSelection('Customer')}>
                                    <span className="menu_list">Customer</span>
                                </MenuItem>
                                <MenuItem onClick={()=>this.handleUserTypeSelection('Admin')}>
                                    <span className="menu_list">Admin</span>
                                </MenuItem>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        )
    }
}
export default Appbar;
