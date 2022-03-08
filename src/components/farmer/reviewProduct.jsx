import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import ferti from '../../assets/New folder/methi.jpg'
import { displayRazorPay } from '../../services/farmerService';
import axios from 'axios';

class ReviewProduct extends Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;

        document.body.appendChild(script);
    }

    openPayModal(amt) {
        var amount = amt * 100; //Razorpay consider the amount in paise

        var options = {
            "key": "rzp_test_y3IVf712MU2JMh",
            "amount": 0, // 2000 paise = INR 20, amount in paisa
            "name": "Merchant Name",
            'order_id': "",
            "handler": function (response) {
                console.log(response);
                var values = {
                    razorpay_signature: response.razorpay_signature,
                    razorpay_order_id: response.razorpay_order_id,
                    transactionid: response.razorpay_payment_id,
                    transactionamount: amount,
                }
                axios.post('http://localhost:3001/payment', values)
                    .then(res => { alert("Success") })
                    .catch(e => console.log(e))
            },
            "theme": {
                "color": "#528ff0"
            }
        };

        displayRazorPay(amount,options);
    }

    clickkk = () => {
        this.openPayModal(10);
    }
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
                    display: 'flex',
                    alignItems: 'center',
                    width: "100%",
                    flexDirection: "column"
                }}
            >
                <h5>Review Product Details</h5>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "100%" }}>
                    <div>
                        <img src={ferti} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ border: "1px solid #ccc", display: 'flex', flexDirection: "column", padding: "20px", width: "300px" }}>
                            <span className='review-product-details'>Product Name : Methi</span>
                            <span className='review-product-details'>Price : 260</span>
                            <span className='review-product-details'>Status : In stock</span>
                            <span className='review-product-details' style={{ borderBottom: "none" }}>Quantity : 1</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Button style={{ width: "100%", background: "orange", margin: "5% 0" }}>Add To Cart</Button>
                            <Button style={{ width: "100%", background: "royalblue", color: "#fff" }} onClick={this.clickkk}>Buy Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ReviewProduct;