import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import agri from "../../assets/agriculture.jpg";
import farmingKit from '../../assets/farming-kit.jpeg';
import workers from '../../assets/workers.jpg';
import supplier from '../../assets/supplier.jpg'
import consumer from '../../assets/consumer.jpg'

class OurService extends Component {
  constructor(props){
    super(props);
    this.state={
      services:[{
        'img':farmingKit,
        'name':'Farming Kit',
        'desc':"We provide all of the gardening related products i.e seeds,pestisides and heavy machine."
      },
      {
        'img':workers,
        'name':'Hiring Workers',
        'desc':"Workers can receive various work requests from multiple farmers. Farmers can hire farm labourers"
      },
      {
        'img':supplier,
        'name':'Suplier',
        'desc':"Now you produce. And we are here to sell your product. Just list your sell, and get proper pay for it."
      },
      {
        'img':consumer,
        'name':'Consumer',
        'desc':"Why to visit Super Store and Pay High? Order all products and get deliver at your doorstep."
      }]
    }
  }
  render() {
    return (
      <div className="services">
        <h2>Our Services</h2>
        <div className="services_list">
        {this.state.services.map((k)=>
        <Card style={{ width: "280px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180px"
              image={k.img}
              alt="green iguana"
            />
            <CardContent style={{background:'#3b3b3b',color:'orange'}}>
              <Typography gutterBottom variant="h5" component="div">
               {k.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p style={{color:'#fff'}}>{k.desc}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        )}
      </div>
      </div>
    );
  }
}
export default OurService;
