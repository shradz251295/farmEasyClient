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
        MuiToolbar: {
            regular: {
                display: "flex",
                justifyContent: "space-between",
                // width: "100%"
            }
        },
       

    },
    typography: {
        useNextVariants: true,
    },
})


class Appbar extends Component {
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
                                <MenuItem>
                                    <span className="menu_list">Home</span>
                                </MenuItem>
                                
                                <MenuItem>
                                    <span className="menu_list">Farming Training</span>
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
