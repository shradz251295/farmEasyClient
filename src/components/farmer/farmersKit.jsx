import { Button, Card, CardActions, CardContent, CardMedia, createMuiTheme, MuiThemeProvider, Tab, Tabs, Typography } from "@material-ui/core";
import React, { Component } from "react";
import ferti from '../../assets/New folder/methi.jpg'
import { getProductList } from "../../services/farmerService";
import ChangePassword from "./changePassword";
import ReviewProduct from "./reviewProduct";
import ViewEditProfile from "./viewEditProfile";

const theme = createMuiTheme({
  overrides: {
    MuiTab: {
      root: {
        color: "#3b3b3b !important",
        fontWeight: "bold !important"
      }
    },
    PrivateTabIndicator: {
      root: {
        backgroundColor: 'green !important',
        height: '4px !important'
      }
    },
    MuiCardMedia:{
      media:{
        width:"80% !important"
      }
    }
  }
})

class FarmerKit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "select_fertilizer",
      showProductDetails:false,
      productList:[]
    }
  }

  componentDidMount(){
    getProductList()
    .then((res)=>{
      if(res.status===true){
        // this.setState({productList:res.data.length})
        console.log(res)
      }
    })
  }

  handleTabSelection = (value) => {
    this.setState({ selectedTab: value })
  }

  reviewProduct=()=>{
    this.setState({showProductDetails:true})
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {this.state.showProductDetails===true?
       <ReviewProduct />
 :       
        <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
          <Tabs value={this.state.selectedTab} aria-label="wrapped label tabs example" style={{ margin: "0px 0px 0px 38px", padding: "10px 10px 0", background: "#fff" }}>
            <Tab
              value={"select_fertilizer"}
              label="Fertilizers"
              onClick={() => this.handleTabSelection("select_fertilizer")}
            />
            <Tab
              value={"select_seeds"}
              label="Seeds"
              onClick={() => this.handleTabSelection("select_seeds")}
            />
            <Tab
              value={"select_fodders"}
              label="Fodders"
              onClick={() => this.handleTabSelection("select_fodders")}
            />
            <Tab
              value={"select_tools"}
              label="Machinary and Equipments"
              onClick={() => this.handleTabSelection("select_tools")}
            />
          </Tabs>
          <div
            style={{
              margin: "0 20px",
              display: "flex",
              // background: "#fff",
              height: '100%',
              color: '#2b2b2b',
              justifyContent:"space-between",
              flexWrap:"wrap",
              padding: '0 20px',
              overflowY:"scroll"
            }}
          >
            <Card className="items-list">
              <CardMedia
                component="img"
                height="auto"
                image={ferti}
                alt="green iguana"
              />
              <CardContent style={{ padding: "0" }}>
                <h6 style={{ margin: "0" }}>
                  Methi
                </h6>
                <span style={{ margin: "0",fontSize:"20px" }}>
                  Rs. 250
                </span>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small" style={{ background: "yellowgreen", color: "#fff" }} onClick={this.reviewProduct}>Learn More</Button>
              </CardActions>
            </Card>
            <Card className="items-list">
              <CardMedia
                component="img"
                height="auto"
                image={ferti}
                alt="green iguana"
              />
              <CardContent style={{ padding: "0" }}>
                <h6 style={{ margin: "0" }}>
                  Methi
                </h6>
                <span style={{ margin: "0",fontSize:"20px" }}>
                  Rs. 250
                </span>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small" style={{ background: "yellowgreen", color: "#fff" }}>Learn More</Button>
              </CardActions>
            </Card>
            <Card className="items-list">
              <CardMedia
                component="img"
                height="auto"
                image={ferti}
                alt="green iguana"
              />
              <CardContent style={{ padding: "0" }}>
                <h6 style={{ margin: "0" }}>
                  Methi
                </h6>
                <span style={{ margin: "0",fontSize:"20px" }}>
                  Rs. 250
                </span>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small" style={{ background: "yellowgreen", color: "#fff" }}>Learn More</Button>
              </CardActions>
            </Card>
            <Card className="items-list">
              <CardMedia
                component="img"
                height="auto"
                image={ferti}
                alt="green iguana"
              />
              <CardContent style={{ padding: "0" }}>
                <h6 style={{ margin: "0" }}>
                  Methi
                </h6>
              </CardContent>
              <CardActions style={{ justifyContent: "center"  }}>
                <Button size="small" style={{ background: "yellowgreen", color: "#fff" }}>Learn More</Button>
              </CardActions>
            </Card>
          </div>
        </div>
  }
      </MuiThemeProvider>
    );
  }
}
export default FarmerKit;
