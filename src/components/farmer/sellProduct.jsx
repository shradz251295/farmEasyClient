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
      productCategory: [
        "Fruits",
        "Seeds",
        "Vegetables",
        "Dry Fruits",
        "Edible Oil",
      ],
      selectedCategory: "",
      productName:"",
      selectedQty: "1",
      description:"",
      status:"active",
      open:false,
      variant:"error",
      msg:""
    };
  }
  handleCategory = (event) => {
    this.setState({ selectedCategory: event.target.value });
  };
  handleQuantity = (event) => {
    this.setState({ selectedQty: event.target.value });
  };
  handleProductName = (event) => {
    this.setState({ productName: event.target.value });
  };
  handleDescription = (event) => {
    this.setState({ description: event.target.value });
  };
  handleStatus=async(evt)=>{
    await this.setState({status:evt.target.value})
   }

   addProductDetails=()=>{
    if (this.state.selectedCategory==="") {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please select product category",
      });
    } else if (this.state.productName==="") {
      this.setState({
        open: true,
        variant: "error",
        msg: "Please enter name of the produce",
      });
    }else if (this.state.description==="") {
        this.setState({
          open: true,
          variant: "error",
          msg: "Please enter produce description",
        });
    } else {
      let data={
        username:JSON.parse(localStorage.getItem('farmer_data')).emailId,
        category:this.state.selectedCategory,
        name:this.state.productName,
        quantity:this.state.selectedQty,
        description:this.state.description,
        status:this.state.status
      }
      addProductDetails(data)
      .then((res)=>{
        console.log(res);
        if(res.status===true){
          this.setState({
            open: true,
            variant: "success",
            msg: "Produce added successfully !",
          });
        }
        // else if(res.status===false){
        //   this.setState({
        //     open: true,
        //     variant: "error",
        //     msg: "This produce is already added",
        //   });
        // }
        else{
          this.setState({
            open: true,
            variant: "error",
            msg: "Something went wrong.",
          });
        }
      })
   }
  }

  render() {
    var qty = [];
    for (var i = 1; i <= 30; i++) {
      qty.push(i);
    }
   
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
              <h5>Enter Product Details</h5>
              <div>
                <div className="fields-per-row">
                  <div style={{ width: "49%" }}>
                    <label>Product Category</label>
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
                      {this.state.productCategory.map((k) => (
                        <option value={k}>{k}</option>
                      ))}
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
                  <label>Quantity</label>
                  <TextField
                    select
                    SelectProps={{
                      native: true,
                    }}
                    className="form-fields"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    value={this.state.selectedQty}
                    onChange={this.handleQuantity}
                  >
                    {qty.map((k) => (
                      <option value={k}>{k}</option>
                    ))}
                  </TextField>
                </div>
                {/* <div style={{ width: "49%" }}>
                  <label>Quantity Type</label>
                  <TextField
                    className="form-fields"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </div> */}
              </div>
              <div className="fields-per-row">
                <div style={{ width: "100%" }}>
                  <label>Description</label>
                  <TextField
                    className="form-fields"
                    multiline
                    rows={3}
                    InputProps={{
                      disableUnderline: true,
                    }}
                    value={this.state.description}
                    onChange={this.handleDescription}
                  />
                </div>
              </div>
              <div className="fields-per-row">
                <div style={{ width: "49%" }}>
                  <label>Image</label>
                  <TextField
                    className="form-fields"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </div>
                <div style={{ width: "49%" }}>
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

              <Button className="singup-btn" onClick={this.addProductDetails}>Submit</Button>
            </div>
          </div>
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            style={{
              background:'none !important'
            }}
            open={this.state.open}
            onClose={this.handleClose}
            autoHideDuration={50000}
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
