import React, { Component } from "react";
import { Avatar, Divider, Drawer, MenuItem } from "@material-ui/core";
import arrowRight from "../../assets/arrow-right.svg";
import adminIcon from "../../assets/manage.svg";

class AdminSideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectDashboard: true,
      selectState: false,
      selectCity: false,
      selectCategory :false,
      selectType: false,
      selectFarmerKit:false,
      showContent: false,
    };
  }

  handleSelection = async (option) => {
    if (option === "dashboard") {
      await this.setState({
        selectDashboard: true,
        selectState: false,
        selectCity: false,
        selectCatgory: false,
        selectType: false,
        selectFarmerKit:false,
      });
    } else if (option === "addState") {
      await this.setState({
        selectDashboard: false,
        selectState: true,
        selectCity: false,
        selectCatgory: false,
        selectType: false,
        selectFarmerKit:false,
      });
    } else if (option === "addCity") {
      await this.setState({
        selectDashboard: false,
        selectState: false,
        selectCity: true,
        selectCatgory: false,
        selectType: false,
        selectFarmerKit:false,
      });
    } else if (option === "addCategory") {
      await this.setState({
        selectDashboard: false,
        selectState: false,
        selectCity: false,
        selectCatgory: true,
        selectType: false,
        selectFarmerKit:false,
      });
    } else if (option === "addType") {
      await this.setState({
        selectDashboard: false,
        selectState: false,
        selectCity: false,
        selectCatgory: false,
        selectType: true,
        selectFarmerKit:false
      });
    }
      else if (option === "addFarmerKit") {
        await this.setState({
          selectDashboard: false,
          selectState: false,
          selectCity: false,
          selectCatgory: false,
          selectType: false,
          selectFarmerKit:true
        });
    }
    this.props.toggleSideMenu(option);
  };

  render() {
    return (
      <Drawer variant="permanent" open={true} style={{ width: "280px" }}>
        <div style={{ textAlign: "left" }}>
          <span
            style={{ color: "#f1f1f1", fontSize: "15px", textAlign: "left" }}
          >
            ADMIN PANEL
          </span>
          <MenuItem
            style={{
              width: "100%",
              background:"rgba(255,255,255,.1)",
              // background:
              //   "linear-gradient(to right,#006400 0%, #009000 40%,green 60%)",
              color: "rgba(255,255,255,.8)",
              paddingLeft: "45px",
              textTransform: "capitalize",
              borderBottom: "1px solid #f1f1f1",
              marginBottom: "4%",
            }}
            onClick={()=>this.handleSelection("dashboard")}
          >
            Dashboard
          </MenuItem>
        </div>
        <div style={{ textAlign: "left" }}>
          <span
            style={{ color: "#f1f1f1", fontSize: "15px", textAlign: "left" }}
          >
            GENERAL SETTING
          </span>
          <MenuItem
            style={{
              width: "100%",
              height: "40px",
              // background:
              //   "linear-gradient(to right,#006400 0%, #009000 40%,green 60%)",
              color: "rgba(255,255,255,.8)",
              paddingLeft: "45px",
              textTransform: "capitalize",
              // borderBottom: "2px solid #f1f1f1",
            }}
            onClick={()=>this.handleSelection("addState")}
          >
            Add/View State
          </MenuItem>
          <MenuItem
            style={{
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
            onClick={()=>this.handleSelection("addCity")}
          >
            Add/View City
          </MenuItem>
        </div>
        <div style={{ textAlign: "left" }}>
          <span
            style={{ color: "#f1f1f1", fontSize: "15px", textAlign: "left" }}
          >
            FARMER'S SETTING
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
              // borderBottom: "2px solid #f1f1f1",
            }}
            onClick={()=>this.handleSelection("addCategory")}
          >
            Produce Category
          </MenuItem>
          <MenuItem
            style={{
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
            onClick={()=>this.handleSelection("addType")}
          >
            Produce Types
          </MenuItem>
        </div>
        <div style={{ textAlign: "left" }}>
          <span
            style={{ color: "#f1f1f1", fontSize: "15px", textAlign: "left" }}
          >
            FARMER'S KIT
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
              // borderBottom: "2px solid #f1f1f1",
            }}
            onClick={()=>this.handleSelection("addFarmerKit")}
          >
            Add/View Farmer's Kit
          </MenuItem>
        </div>
      </Drawer>
    );
  }
}

export default AdminSideMenu;
