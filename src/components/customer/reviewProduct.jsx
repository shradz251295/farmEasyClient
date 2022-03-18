import { Button, TextField } from "@material-ui/core";
import React, { Component } from "react";
import ferti from "../../assets/New folder/methi.jpg";
import { displayRazorPay } from "../../services/customerService";
import axios from "axios";

class ReviewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1,
      produceName:this.props.productDetails.produceName
    };
  }
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    document.body.appendChild(script);
  }

  

  openPayModal(amt) {
    var amount = amt * 100; //Razorpay consider the amount in paise
    var produceName=this.props.productDetails.produceName;
    var quantity= this.state.qty;
   var transactionamount= amount;
   var goBack=            this.props.goBack;
    var options = {
      key: "rzp_test_y3IVf712MU2JMh",
      amount: amount, // 2000 paise = INR 20, amount in paisa
      name: JSON.parse(localStorage.getItem("customer_data")).name,
      order_id: "",

      handler: function (response) {
        console.log(response);
        var values = {
          razorpay_signature: response.razorpay_signature,
          razorpay_order_id: response.razorpay_order_id,
          transactionid: response.razorpay_payment_id,
          name: JSON.parse(localStorage.getItem("customer_data")).name,
          produceName:produceName,
          quantity: quantity,
          transactionamount: amount,
        };
        axios
          .post("http://localhost:3001/custpayment", values)
          .then((res) => {
              console.log(res)
            alert("Transaction done successfully!");
            goBack();
          })
          .catch((e) =>alert(e));
      },
      theme: {
        color: "#528ff0",
      },
    };

    displayRazorPay(amount, options);
  }

  incrementQty = () => {
    this.setState({ qty: this.state.qty + 1 });
  };

  decrementQty = () => {
    this.setState({ qty: this.state.qty - 1 });
  };

  clickkk = () => {
    this.openPayModal(this.props.productDetails.cost * this.state.qty);
  };
  render() {
    return (
      <div
        style={{
          margin: "50px",
          display: "flex",
          background: "#fff",
          // height: "100%",
          color: "#2b2b2b",
          padding: "20px 80px",
          display: "flex",
          alignItems: "flex-start",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Button
          style={{
            background: "yellowgreen",
            color: "#fff",
            padding: "10px 20px",
            width: "15%",
          }}
          onClick={this.props.goBack}
        >
          Back
        </Button>
        <h5 style={{ margin: "0% auto 5% auto" }}>Review Product Details</h5>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <div>
            <img src={this.props.productDetails.image} width="250px" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                border: "1px solid #ccc",
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                width: "300px",
              }}
            >
              <span className="review-product-details">
                Product Name : {this.props.productDetails.produceName}
              </span>
              <span className="review-product-details">
                Price : {this.props.productDetails.cost * this.state.qty}
              </span>
              <span className="review-product-details">Status : In stock</span>
              <span
                className="review-product-details"
                style={{ borderBottom: "none" }}
              >
                Quantity :
                <div>
                  <Button
                    style={{
                      background: "#f3f0f0",
                      border: "1px solid #ccc",
                      borderTopRightRadius: "0",
                      borderBottomRightRadius: "0",
                    }}
                    onClick={this.decrementQty}
                    disabled={this.state.qty == 1}
                  >
                    -
                  </Button>
                  <span className="quantity_review">{this.state.qty}</span>
                  <Button
                    style={{
                      background: "#f3f0f0",
                      border: "1px solid #ccc",
                      borderTopLeftRadius: "0",
                      borderBottomLeftRadius: "0",
                    }}
                    onClick={this.incrementQty}
                  >
                    +
                  </Button>
                </div>
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* <Button style={{ width: "100%", background: "orange", margin: "5% 0" }}>Add To Cart</Button> */}
              <Button
                style={{
                  width: "100%",
                  background: "royalblue",
                  color: "#fff",
                }}
                onClick={this.clickkk}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ReviewProduct;
