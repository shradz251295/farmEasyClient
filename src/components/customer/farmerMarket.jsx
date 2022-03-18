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
import { getFarmerKit, getProductList } from "../../services/farmerService";
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

class FarmersMarket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "select_fruit",
      showProductDetails: false,
      fruits: [],
      seeds: [],
      dryfruits: [],
      oil: [],
      vegetables:[],
      isLoading: true,
      productDetails:""
    };
  }

  componentDidMount() {
    getProductList().then((res) => {
      console.log(res);
      if (res.status === true) {
        if (res.data.length > 0) {
          res.data.map((k) => {
            if (k.produceCategory === "fruits") {
              this.setState({ fruits: this.state.fruits.concat(k) });
            }
            if (k.produceCategory === "seeds") {
              this.setState({ seeds: this.state.seeds.concat(k) });
            }
            if (k.produceCategory === "dryfruits") {
              this.setState({ dryfruits: this.state.dryfruits.concat(k) });
            }
            if (k.produceCategory === "vegetables") {
              this.setState({ vegetables: this.state.vegetables.concat(k) });
            }
            if (k.produceCategory === "oil") {
              this.setState({ oil: this.state.oil.concat(k) });
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
                value={"select_fruit"}
                label="Fruits"
                onClick={() => this.handleTabSelection("select_fruit")}
              />
              <Tab
                value={"select_seeds"}
                label="Seeds"
                onClick={() => this.handleTabSelection("select_seeds")}
              />
              <Tab
                value={"select_vegetables"}
                label="Vegetables"
                onClick={() => this.handleTabSelection("select_vegetables")}
              />
                <Tab
                value={"select_dryfruits"}
                label="Dry Fruits"
                onClick={() => this.handleTabSelection("select_dryfruits")}
              />
              <Tab
                value={"select_oil"}
                label="Edible Oil"
                onClick={() => this.handleTabSelection("select_oil")}
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
              {this.state.selectedTab === "select_fruit" ? (
                this.state.fruits.length === 0 &&
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
                  this.state.fruits.map((k) => (
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
              ) : this.state.selectedTab === "select_vegetables" ? (
                this.state.vegetables.length === 0 &&
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
                  this.state.vegetables.map((k) => (
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
              ) : this.state.selectedTab === "select_dryfruits" ? (
                this.state.dryfruits.length === 0 &&
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
                  this.state.dryfruits.map((k) => (
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
              ):
              this.state.selectedTab === "select_oil" ? (
                this.state.oil.length === 0 &&
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
                  this.state.oil.map((k) => (
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
export default FarmersMarket;
