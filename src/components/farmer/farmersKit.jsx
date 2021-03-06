import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  createMuiTheme,
  MuiThemeProvider,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import ferti from "../../assets/New folder/methi.jpg";
import { getFarmerKit } from "../../services/farmerService";
import ChangePassword from "./changePassword";
import ReviewProduct from "./reviewProduct";
import ViewEditProfile from "./viewEditProfile";

const theme = createMuiTheme({
  overrides: {
    MuiTab: {
      root: {
        color: "#3b3b3b !important",
        fontWeight: "bold !important",
      },
    },
    PrivateTabIndicator: {
      root: {
        backgroundColor: "green !important",
        height: "4px !important",
      },
    },
    MuiCardMedia: {
      media: {
        width: "80% !important",
      },
    },
  },
});

class FarmerKit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "select_fertilizer",
      showProductDetails: false,
      fertilizers: [],
      seeds: [],
      tools: [],
      fodders: [],
      isLoading: true,
      productDetails:""
    };
  }

  componentDidMount() {
    getFarmerKit().then((res) => {
      console.log(res);

      if (res.status === true) {
        if (res.data.length > 0) {
          res.data.map((k) => {
            if (k.produceCategory === "fertilizer") {
              this.setState({ fertilizers: this.state.fertilizers.concat(k) });
            }
            if (k.produceCategory === "seeds") {
              this.setState({ seeds: this.state.seeds.concat(k) });
            }
            if (k.produceCategory === "fodder") {
              this.setState({ fodders: this.state.fodders.concat(k) });
            }
            if (k.produceCategory === "tools") {
              this.setState({ tools: this.state.tools.concat(k) });
            }
          });
          this.setState({ isLoading: false });
        }
      }
    });
  }

  handleTabSelection = (value) => {
    this.setState({ selectedTab: value });
  };

  reviewProduct = (value) => {
    this.setState({ showProductDetails: true,productDetails:value });
  };

  goBack=()=>{
    this.setState({showProductDetails:false})
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {this.state.showProductDetails === true ? (
          <ReviewProduct productDetails={this.state.productDetails} goBack={this.goBack}/>
        ) : (
          <div
            style={{ display: "flex", width: "100%", flexDirection: "column" }}
          >
            <Tabs
              value={this.state.selectedTab}
              aria-label="wrapped label tabs example"
              style={{
                margin: "0px 0px 0px 38px",
                padding: "10px 10px 0",
                background: "#fff",
              }}
            >
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
                margin: "0 0px 0 50px",
                display: "flex",
                // background: "#fff",
                height: "100%",
                color: "#2b2b2b",
                // justifyContent: "space-between",
                flexWrap: "wrap",
                padding: "0 40px 20px 40px",
                overflowY: "scroll",
                gap: "40px",
              }}
            >
              {this.state.selectedTab === "select_fertilizer" ? (
                this.state.fertilizers.length === 0 &&
                this.state.isLoading === false ? (
                  <h2
                    style={{
                      textAlign: "center",
                      textTransform: "capitalize",
                      display: "flex",
                      margin: "0 auto",
                      alignItems: "center",
                    }}
                  >
                    No Records Found
                  </h2>
                ) : this.state.isLoading ? (
                  <h2
                    style={{
                      textAlign: "center",
                      textTransform: "capitalize",
                      display: "flex",
                      margin: "0 auto",
                      alignItems: "center",
                    }}
                  >
                    Loading.....
                  </h2>
                ) : (
                  this.state.fertilizers.map((k) => (
                    <Card className="items-list">
                      <CardContent style={{ padding: "0" }}>
                        <img src={k.image} width="150px" height="180px" />
                        <h6 style={{ margin: "0" }}>{k.produceName}</h6>
                        <span style={{ margin: "0", fontSize: "20px" }}>
                          Rs. {k.cost}
                        </span>
                      </CardContent>
                      <CardActions style={{ justifyContent: "center" }}>
                        <Button
                          size="small"
                          style={{ background: "yellowgreen", color: "#fff" }}
                          onClick={()=>this.reviewProduct(k)}
                        >
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  ))
                )
              ) : this.state.selectedTab === "select_seeds" ? (
                this.state.seeds.length === 0 &&
                this.state.isLoading === false ? (
                  <h2
                    style={{
                      textAlign: "center",
                      textTransform: "capitalize",
                      display: "flex",
                      margin: "0 auto",
                      alignItems: "center",
                    }}
                  >
                    No Records Found
                  </h2>
                ) : this.state.isLoading ? (
                  <h2
                    style={{
                      textAlign: "center",
                      textTransform: "capitalize",
                      display: "flex",
                      margin: "0 auto",
                      alignItems: "center",
                    }}
                  >
                    Loading.....
                  </h2>
                ) : (
                  this.state.seeds.map((k) => (
                    <Card className="items-list">
                      <CardContent style={{ padding: "0" }}>
                        <img src={k.image} width="150px" height="180px" />
                        <h6 style={{ margin: "0" }}>{k.produceName}</h6>
                        <span style={{ margin: "0", fontSize: "20px" }}>
                          Rs. {k.cost}
                        </span>
                      </CardContent>
                      <CardActions style={{ justifyContent: "center" }}>
                        <Button
                          size="small"
                          style={{ background: "yellowgreen", color: "#fff" }}
                          onClick={()=>this.reviewProduct(k)}
                        >
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  ))
                )
              ) : this.state.selectedTab === "select_fodders" ? (
                this.state.fodders.length === 0 &&
                this.state.isLoading === false ? (
                  <h2
                    style={{
                      textAlign: "center",
                      textTransform: "capitalize",
                      display: "flex",
                      margin: "0 auto",
                      alignItems: "center",
                    }}
                  >
                    No Records Found
                  </h2>
                ) : this.state.isLoading ? (
                  <h2
                    style={{
                      textAlign: "center",
                      textTransform: "capitalize",
                      display: "flex",
                      margin: "0 auto",
                      alignItems: "center",
                    }}
                  >
                    Loading.....
                  </h2>
                ) : (
                  this.state.fodders.map((k) => (
                    <Card className="items-list">
                      <CardContent style={{ padding: "0" }}>
                        <img src={k.image} width="150px" height="180px" />
                        <h6 style={{ margin: "0" }}>{k.produceName}</h6>
                        <span style={{ margin: "0", fontSize: "20px" }}>
                          Rs. {k.cost}
                        </span>
                      </CardContent>
                      <CardActions style={{ justifyContent: "center" }}>
                        <Button
                          size="small"
                          style={{ background: "yellowgreen", color: "#fff" }}
                          onClick={()=>this.reviewProduct(k)}
                        >
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  ))
                )
              ) : this.state.selectedTab === "select_tools" ? (
                this.state.tools.length === 0 &&
                this.state.isLoading === false ? (
                  <h2
                    style={{
                      textAlign: "center",
                      textTransform: "capitalize",
                      display: "flex",
                      margin: "0 auto",
                      alignItems: "center",
                    }}
                  >
                    No Records Found
                  </h2>
                ) : this.state.isLoading ? (
                  <h2
                    style={{
                      textAlign: "center",
                      textTransform: "capitalize",
                      display: "flex",
                      margin: "0 auto",
                      alignItems: "center",
                    }}
                  >
                    Loading.....
                  </h2>
                ) : (
                  this.state.tools.map((k) => (
                    <Card className="items-list">
                      <CardContent style={{ padding: "0" }}>
                        <img src={k.image} width="150px" height="180px" />
                        <h6 style={{ margin: "0" }}>{k.produceName}</h6>
                        <span style={{ margin: "0", fontSize: "20px" }}>
                          Rs. {k.cost}
                        </span>
                      </CardContent>
                      <CardActions style={{ justifyContent: "center" }}>
                        <Button
                          size="small"
                          style={{ background: "yellowgreen", color: "#fff" }}
                          onClick={()=>this.reviewProduct(k)}
                        >
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  ))
                )
              ) : null}
            </div>
          </div>
        )}
      </MuiThemeProvider>
    );
  }
}
export default FarmerKit;
