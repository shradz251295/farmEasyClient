import React, { Component } from "react";
import { Avatar, Divider, Drawer, MenuItem } from "@material-ui/core";
import arrowRight from "../../assets/arrow-right.svg";

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectDashboard: true,
      selectProduce: false,
      selectFarmersKit: false,
      selectViewProduce:false,
      showContent: false,
    };
  }

  handleSelection = async(option) => {
    if (option === "dashboard") {
     await this.setState({
        selectDashboard: true,
        selectProduce: false,
        selectViewProduce: false,
        selectFarmersKit: false,
      });
    } else if (option === "produce") {
      await this.setState({
        selectDashboard: false,
        selectProduce: true,
        selectViewProduce:false,
        selectFarmersKit: false,
      });
    }else if (option === "view_produce") {
      await this.setState({
        selectDashboard: false,
        selectProduce:false,
        selectViewProduce: true,
        selectFarmersKit: false,
      });
    } else if (option === "farmers_kit") {
      await this.setState({
        selectDashboard: false,
        selectProduce: false,
        selectViewProduce: false,
        selectFarmersKit: true,
      });
    }
    this.props.toggleSideMenu(option)
  };

  render() {
    return (
      <Drawer variant="permanent" open={true} style={{ width: "280px" }}>
        <MenuItem
          style={{
            width: "100%",
            background: "linear-gradient(to right,green 0%, #5ca904 100%)",
            color: "#fff",
            height: "100px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Avatar />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Shraddha</span>
              <span>7777777777</span>
            </div>
          </div>
        </MenuItem>
        <MenuItem
          style={{
            width: "100%",
            background: this.state.selectDashboard ? "green" : "#fff",
            color: this.state.selectDashboard ? "#fff" : "green",
          }}
          onClick={() => this.handleSelection("dashboard")}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          style={{
            width: "100%",
            background: this.state.selectProduce ? "green" : "#fff",
            color: this.state.selectProduce ? "#fff" : "green",
          }}
          onClick={() => this.handleSelection("produce")}
        >
            Sell Product
        </MenuItem>
        <MenuItem  style={{
            width: "100%",
            background: this.state.selectViewProduce ? "green" : "#fff",
            color: this.state.selectViewProduce ? "#fff" : "green",
          }}
          onClick={() => this.handleSelection("view_produce")}
          >
            View Product Details
            </MenuItem>
        <MenuItem
          style={{
            width: "100%",
            background: this.state.selectFarmersKit ? "green" : "#fff",
            color: this.state.selectFarmersKit ? "#fff" : "green",
          }}
          onClick={() => this.handleSelection("farmers_kit")}
        >
          Farmer's Kit
        </MenuItem>
        <MenuItem style={{ width: "100%" }}>Hire Details</MenuItem>
        <MenuItem style={{ width: "100%" }}>Logout</MenuItem>
      </Drawer>
    );
  }
}

export default SideMenu;
