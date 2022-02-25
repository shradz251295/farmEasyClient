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
      selectFarmersMarket:false,
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
        selectFarmersMarket:false,
      });
    } else if (option === "produce") {
      await this.setState({
        selectDashboard: false,
        selectProduce: true,
        selectViewProduce:false,
        selectFarmersKit: false,
        selectFarmersMarket:false,
      });
    }else if (option === "view_produce") {
      await this.setState({
        selectDashboard: false,
        selectProduce:false,
        selectViewProduce: true,
        selectFarmersKit: false,
        selectFarmersMarket:false,
      });
    } else if (option === "farmers_kit") {
      await this.setState({
        selectDashboard: false,
        selectProduce: false,
        selectViewProduce: false,
        selectFarmersKit: true,
        selectFarmersMarket:false,
      });
    }else if (option === "farmers_market") {
      await this.setState({
        selectDashboard: false,
        selectProduce: false,
        selectViewProduce: false,
        selectFarmersKit: false,
        selectFarmersMarket:true,
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
            background: "linear-gradient(to right,#006400 0%, #009000 40%,green 60%)",
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
            background: this.state.selectDashboard ? "#fff" : "none",
            color: this.state.selectDashboard ? "inherit" : "#fff",
          }}
          onClick={() => this.handleSelection("dashboard")}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          style={{
            width: "100%",
            background: this.state.selectProduce ? "#fff" : "inherit",
            color: this.state.selectProduce ? "inherit" : "#fff",
          }}
          onClick={() => this.handleSelection("produce")}
        >
            Sell Product
        </MenuItem>
        <MenuItem  style={{
            width: "100%",
            background: this.state.selectViewProduce ? "#fff" : "inherit",
            color: this.state.selectViewProduce ? "inherit" : "#fff",
          }}
          onClick={() => this.handleSelection("view_produce")}
          >
            View Product Details
            </MenuItem>
        <MenuItem
          style={{
            width: "100%",
            background: this.state.selectFarmersKit ? "#fff" : "inherit",
            color: this.state.selectFarmersKit ? "inherit" : "#fff",
          }}
          onClick={() => this.handleSelection("farmers_kit")}
        >
          Farmer's Kit
        </MenuItem>
        <MenuItem
          style={{
            width: "100%",
            background: this.state.selectFarmersMarket ? "#fff" : "inherit",
            color: this.state.selectFarmersMarket ? "inherit" : "#fff",
          }}
          onClick={() => this.handleSelection("farmers_market")}
        >
          Farmer's Market
        </MenuItem>
        <MenuItem style={{ width: "100%",color:"#fff" }}>Hire Details</MenuItem>
        <MenuItem style={{ width: "100%",color:"#fff" }}>Logout</MenuItem>
      </Drawer>
    );
  }
}

export default SideMenu;
