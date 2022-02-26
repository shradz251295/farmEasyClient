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
      selectViewProduce: false,
      selectFarmersMarket: false,
      showContent: false,
    };
  }

  handleSelection = async (option) => {
    if (option === "dashboard") {
      await this.setState({
        selectDashboard: true,
        selectProduce: false,
        selectViewProduce: false,
        selectFarmersKit: false,
        selectFarmersMarket: false,
      });
    } else if (option === "produce") {
      await this.setState({
        selectDashboard: false,
        selectProduce: true,
        selectViewProduce: false,
        selectFarmersKit: false,
        selectFarmersMarket: false,
      });
    } else if (option === "view_produce") {
      await this.setState({
        selectDashboard: false,
        selectProduce: false,
        selectViewProduce: true,
        selectFarmersKit: false,
        selectFarmersMarket: false,
      });
    } else if (option === "farmers_kit") {
      await this.setState({
        selectDashboard: false,
        selectProduce: false,
        selectViewProduce: false,
        selectFarmersKit: true,
        selectFarmersMarket: false,
      });
    } else if (option === "farmers_market") {
      await this.setState({
        selectDashboard: false,
        selectProduce: false,
        selectViewProduce: false,
        selectFarmersKit: false,
        selectFarmersMarket: true,
      });
    }
    this.props.toggleSideMenu(option)
  };

  render() {
    return (
      <Drawer variant="permanent" open={true} style={{ width: "280px" }}>
        <div style={{ textAlign: "left" }}>
          <span
            style={{ color: "#f1f1f1", fontSize: "15px", textAlign: "left" }}
          >
            MY ACCOUNT
          </span>
          <MenuItem
            style={{
              width: "100%",
              background: "rgba(255,255,255,.1)",
              // background:
              //   "linear-gradient(to right,#006400 0%, #009000 40%,green 60%)",
              color: "rgba(255,255,255,.8)",
              paddingLeft: "45px",
              textTransform: "capitalize",
              borderBottom: "1px solid #f1f1f1",
              marginBottom: "4%",
            }}
            onClick={() => this.handleSelection("dashboard")}
          >
            <div
              style={{
                display: "flex",
                // justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Avatar style={{ width: "28px", height: "28px" }} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ marginLeft: "15%" }}>Shraddha</span>
              </div>
            </div>
          </MenuItem>
        </div>
        <div style={{ textAlign: "left" }}>
          <span
            style={{ color: "#f1f1f1", fontSize: "15px", textAlign: "left" }}
          >
            Product
          </span>
          <MenuItem
            style={{
              width: "100%",
              height: "40px",
              // background:
              //   "linear-gradient(to right,#006400 0%, #009000 40%,green 60%)",
              color: "#fff",
              paddingLeft: "45px",
              textTransform: "capitalize",
            }}
            onClick={() => this.handleSelection("produce")}
          >
            Sell Product
          </MenuItem>
          <MenuItem style={{
            width: "100%",
            height: "40px",
            // background:
            //   "linear-gradient(to right,#006400 0%, #009000 40%,green 60%)",
            color: "#fff",
            paddingLeft: "45px",
            textTransform: "capitalize",
            borderBottom: "1px solid #f1f1f1",
            marginBottom: "4%",
          }}
            onClick={() => this.handleSelection("view_produce")}
          >
            View Product Details
          </MenuItem>
        </div>
        <div style={{ textAlign: "left" }}>
          <span
            style={{ color: "#f1f1f1", fontSize: "15px", textAlign: "left" }}
          >
            Farmer's Kit
          </span>

        <MenuItem
          style={{
            width: "100%",
              height: "40px",
              // background:
              //   "linear-gradient(to right,#006400 0%, #009000 40%,green 60%)",
              color: "#fff",
              paddingLeft: "45px",
              textTransform: "capitalize",
          }}
          onClick={() => this.handleSelection("farmers_kit")}
        >
          Buy Farmer's Kit
        </MenuItem>
        <MenuItem style={{
            width: "100%",
            height: "40px",
            // background:
            //   "linear-gradient(to right,#006400 0%, #009000 40%,green 60%)",
            color: "#fff",
            paddingLeft: "45px",
            textTransform: "capitalize",
            borderBottom: "1px solid #f1f1f1",
            marginBottom: "4%",
          }}
            onClick={() => this.handleSelection("view_produce")}
          >
            View Order Details
          </MenuItem>
        </div>

        <div style={{ textAlign: "left" }}>
          <span
            style={{ color: "#f1f1f1", fontSize: "15px", textAlign: "left" }}
          >
            Farmer's Market
          </span>
        <MenuItem
          style={{
            width: "100%",
            height: "40px",
            // background:
            //   "linear-gradient(to right,#006400 0%, #009000 40%,green 60%)",
            color: "#fff",
            paddingLeft: "45px",
            textTransform: "capitalize",
          }}
          onClick={() => this.handleSelection("farmers_market")}
        >
          Farmer's Market
        </MenuItem>
        </div>
        
      </Drawer>
    );
  }
}

export default SideMenu;
