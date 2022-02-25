import React, { Component } from "react";
import adminIcon from "../../assets/admin_dashboard_icon.svg";
import farmerIcon from "../../assets/farmer_dashboard_icon.svg";
import customerIcon from "../../assets/customer_dashboard_icon.svg";
import { getAdminList } from "../../services/adminService";
import { getFarmerList } from "../../services/farmerService";


class AdminDashboard extends Component {
  constructor(props){
    super(props);
    this.state={
      adminCount:0,
      farmerCount:0
    }
  }
  componentDidMount(){
    getAdminList()
    .then((res)=>{
      if(res.status===true){
        this.setState({adminCount:res.data.length})
      }
    })

    getFarmerList()
    .then((res)=>{
      if(res.status===true){
        this.setState({farmerCount:res.data.length})
      }
    })
  }
  render() {
    return (
      <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <div
          style={{
            margin: "50px",
            display: "flex",
            background: "#fff",
            height: "100%",
            color: "#2b2b2b",
            padding: "20px 80px",
            justifyContent:"space-between"
          }}
        >
          <div
            style={{
              width: "250px",
              display: "flex",
              justifyContent: "space-between",
              background: "#00c0ef",
              height: "150px",
              color: "#fff",
              flexDirection: "column",
              textTransform: "capitalize",
              paddingTop:"10px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between",height:"100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "50%",
                }}
              >
                <img src={adminIcon} width="50%" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "50%",
                  flexDirection: "column",
                }}
              >
                <h4 style={{ margin: "0" }}>{this.state.adminCount}</h4>
                <span style={{ fontSize: "16px", }}>
                  Users
                </span>
              </div>
            </div>
        <div style={{background:"#3c8dbc",fontSize:"16px",padding:'8px 10px'}}>
          <span>View All</span>
        </div>
          </div>
          <div
            style={{
              width: "250px",
              display: "flex",
              justifyContent: "space-between",
              background: "#73a839",
              height: "150px",
              color: "#fff",
              flexDirection: "column",
              textTransform: "capitalize",
              paddingTop:"10px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between",height:"100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "50%",
                }}
              >
                <img src={farmerIcon} width="50%" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "50%",
                  flexDirection: "column",
                }}
              >
                <h4 style={{ margin: "0" }}>{this.state.farmerCount}</h4>
                <span style={{ fontSize: "16px", }}>
                  Farmers
                </span>
              </div>
            </div>
        <div style={{background:"yellowgreen",fontSize:"16px",padding:'8px 10px'}}>
          <span>View All</span>
        </div>
          </div>
          <div
            style={{
              width: "250px",
              display: "flex",
              justifyContent: "space-between",
              background: "#f39c12",
              height: "150px",
              color: "#fff",
              flexDirection: "column",
              textTransform: "capitalize",
              paddingTop:"10px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between",height:"100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "50%",
                }}
              >
                <img src={customerIcon} width="50%" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "50%",
                  flexDirection: "column",
                }}
              >
                <h4 style={{ margin: "0" }}>2305</h4>
                <span style={{ fontSize: "16px", }}>
                  Customers
                </span>
              </div>
            </div>
        <div style={{background:"rgba(0,0,0,0.2)",fontSize:"16px",padding:'8px 10px'}}>
          <span>View All</span>
        </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AdminDashboard;
