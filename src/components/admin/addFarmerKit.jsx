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
import { addFarmerKit } from "../../services/adminService";

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

class AddFarmerKit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageDetails: "",
      category: "",
      productName: "",
      productDescription: "",
      quantityType: "",
      cost: "",
      status: "active",
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

  submitKitDetails = (event) => {
    event.preventDefault();
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
        msg: "Please select quantity",
      });
    } else if (this.state.cost === "") {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please enter cost",
      });
    } else {
      const formData = new FormData();
      formData.append("username", JSON.parse(localStorage.getItem("admin_data")).username);
      formData.append("produceCategory", this.state.category);
      formData.append("produceName", this.state.productName);
      formData.append("image", this.state.imageDetails);
      formData.append("productDescription", this.state.productDescription);
      formData.append("quantityType", this.state.quantityType);
      formData.append("cost", this.state.cost);
      formData.append("status", this.state.status);

      addFarmerKit(formData)
        .then((result) => {
          this.setState({
            open: true,
              variant: "success",
              msg: "Item added successfully !",
            imageDetails: "",
            category: "",
            productName: "",
            productDescription: "",
            quantityType: "",
            cost: "",
            status: "active",
          });
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
              <h5>Add or Edit Farmer's Kit</h5>
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
                      value={this.state.selectedCategory}
                      onChange={this.handleCategory}
                    >
                      <option value="">Please select state</option>
                      <option value="seeds">Seeds</option>
                      <option value="fertilizer">Fertilizers</option>
                      <option value="fodder">Fodders</option>
                      <option value="tools">Machinery and Equipments</option>
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

              <Button className="singup-btn" onClick={this.submitKitDetails}>
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
export default AddFarmerKit;
