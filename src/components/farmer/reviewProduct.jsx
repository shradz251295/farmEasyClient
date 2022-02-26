import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import ferti from '../../assets/New folder/methi.jpg'

class ReviewProduct extends Component {
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
                    display:'flex',
                    alignItems:'center',
                    width:"100%"
                }}
            >
                <div>
                    <img src={ferti} />
                </div>
                <div style={{display:"flex",flexDirection:"column"}}> 
                    <div style={{border:"1px solid #ccc",display:'flex',flexDirection:"column",padding:"20px",width:"300px"}}>
                        <span className='review-product-details'>Product Name : Methi</span>
                        <span className='review-product-details'>Price : 260</span>
                        <span className='review-product-details'>Status : In stock</span>
                        <span className='review-product-details' style={{borderBottom:"none"}}>Quantity : 1</span>
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <Button style={{width:"100%",background:"orange",margin:"5% 0"}}>Add To Cart</Button>
                        <Button style={{width:"100%",background:"royalblue",color:"#fff"}}>Buy Now</Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default ReviewProduct;