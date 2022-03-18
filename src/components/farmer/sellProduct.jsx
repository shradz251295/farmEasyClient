import {
  Button,
  createMuiTheme,
  MuiThemeProvider,
  Snackbar,
  SnackbarContent,
  Tab,
  Tabs,
  TextField,
} from "@material-ui/core";
import React, { Component } from "react";
import { addProductDetails } from "../../services/farmerService";
import ViewEditProfile from "./viewEditProfile";

const theme = createMuiTheme({
  overrides: {
    PrivateTabIndicator: {
      root: {
        backgroundColor: "green !important",
        height: "4px !important",
      },
    },
    MuiFormControl: {
      root: {
        background: "ghostwhite !important",
      },
    },
  },
});

class SellProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageDetails:"",
      category:  this.props.productToEdit!==""?this.props.productToEdit.produceCategory:"",
      productName:  this.props.productToEdit!==""?this.props.productToEdit.produceName:"",
      productDescription:  this.props.productToEdit!==""?this.props.productToEdit.productDescription:"",
      quantityType:  this.props.productToEdit!==""?this.props.productToEdit.quantityType:"",
      cost:  this.props.productToEdit!==""?this.props.productToEdit.cost:"",
      status: this.props.productToEdit!==""?this.props.productToEdit.status: "active",
      open: false,
      variant: "error",
      msg: "",
    };
  }

  handleCategory = (evt) => {
    this.setState({ category: evt.target.value });
  };
  handleProductName = (evt) => {
    this.setState({ productName: evt.target.value });
  };
  handleDescription = (evt) => {
    this.setState({ productDescription: evt.target.value });
  };
  handleQuantity = (evt) => {
    this.setState({ quantityType: evt.target.value });
  };
  handleCost = (evt) => {
    this.setState({ cost: evt.target.value });
  };
  handleStatus = (evt) => {
    this.setState({ status: evt.target.value });
  };
  uploadImage = (event) => {
    this.setState({ imageDetails: event.target.files[0] });
  };

  addProductDetails = (event) => {
    if (this.state.category === "") {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please select category",
      });
    } else if (this.state.productName === "") {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please enter product name",
      });
    } else if (this.state.imageDetails === "") {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please upload image",
      });
    } else if (this.state.productDescription === "") {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please provide product description",
      });
    } else if (this.state.quantityType === "") {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please select quantity type",
      });
    } else if (this.state.cost === "") {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please enter cost",
      });
    } else {
      const formData = new FormData();
      formData.append("username",JSON.parse(localStorage.getItem("farmer_data")).emailId);
      formData.append("produceCategory", this.state.category);
      formData.append("produceName", this.state.productName);
      formData.append("image", this.state.imageDetails);
      formData.append("productDescription", this.state.productDescription);
      formData.append("quantityType", this.state.quantityType);
      formData.append("cost", this.state.cost);
      formData.append("status", this.state.status);

      addProductDetails(formData)
        .then((res) => {
          if (res.status === true) {
            this.setState({
              open: true,
              variant: "success",
              msg: "Produce added successfully !",
              imageDetails: "",
              category: "",
              productName: "",
              productDescription: "",
              quantityType: "",
              cost: "",
              status: "active",
            });
          } else {
            this.setState({
              open: true,
              variant: "error",
              msg: "Something went wrong.",
            });
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div
          style={{ display: "flex", width: "100%", flexDirection: "column" }}
        >
          <div
            style={{
              margin: "50px",
              display: "flex",
              background: "#fff",
              height: "100%",
              color: "#2b2b2b",
              padding: "20px 80px",
            }}
          >
            <div style={{ width: "100%" }}>
              <h5>Add Produce Details</h5>
              <div>
                <div className="fields-per-row">
                  <div style={{ width: "49%" }}>
                    <label>Category</label>
                    <TextField
                      select
                      SelectProps={{
                        native: true,
                      }}
                      className="form-fields"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      value={this.state.category}
                      onChange={this.handleCategory}
                    >
                      <option value="">Please select state</option>
                      <option value="seeds">Seeds</option>
                      <option value="fruits">Fruits</option>
                      <option value="dryfruits">Dry Fruits</option>
                      <option value="vegetables">Vegetables</option>
                      <option value="oil">Edible Oil</option>
                    </TextField>
                  </div>
                  <div style={{ width: "49%" }}>
                    <label>Product Name</label>
                    <TextField
                      className="form-fields"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      value={this.state.productName}
                      onChange={this.handleProductName}
                    />
                  </div>
                </div>
              </div>
              <div className="fields-per-row">
                <div style={{ width: "100%" }}>
                  <label>Image</label>
                  {/* <TextField
                      className="form-fields"
                      InputProps={{
                        disableUnderline: true,
                      }}
                    /> */}
                  <input
                    type="file"
                    className="form-fields"
                    name="myfile"
                    onChange={this.uploadImage}
                  />
                </div>
              </div>
              <div className="fields-per-row">
                <div style={{ width: "100%" }}>
                  <label>Product Description</label>
                  <TextField
                    className="form-fields"
                    multiline
                    rows={2}
                    InputProps={{
                      disableUnderline: true,
                    }}
                    value={this.state.productDescription}
                    onChange={this.handleDescription}
                  />
                </div>
              </div>
              <div className="fields-per-row">
                <div style={{ width: "49%" }}>
                  <label>Quantity Type</label>
                  <TextField
                    select
                    SelectProps={{
                      native: true,
                    }}
                    className="form-fields"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    value={this.state.quantityType}
                    onChange={this.handleQuantity}
                  >
                    <option value="">Please select quantity type</option>
                    <option value="kilograms">Kilograms</option>
                    <option value="grams">Grams</option>
                    <option value="pieces">Pieces</option>
                  </TextField>
                </div>
                <div style={{ width: "49%" }}>
                  <label>Cost</label>
                  <TextField
                    className="form-fields"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    value={this.state.cost}
                    onChange={this.handleCost}
                  />
                </div>
              </div>
              <div className="fields-per-row">
                <div style={{ width: "100%" }}>
                  <label>Status</label>
                  <TextField
                    select
                    SelectProps={{
                      native: true,
                    }}
                    className="form-fields"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    value={this.state.status}
                    onChange={this.handleStatus}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </TextField>
                </div>
              </div>

              <Button className="singup-btn" onClick={this.addProductDetails}>
                Submit
              </Button>
            </div>
          </div>
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            style={{
              background: "none !important",
            }}
            open={this.state.open}
            onClose={this.handleClose}
            autoHideDuration={4000}
          >
            <SnackbarContent
              style={{
                background: this.state.variant === "success" ? "green" : "red",
              }}
              message={this.state.msg}
            ></SnackbarContent>
          </Snackbar>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default SellProduct;
