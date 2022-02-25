import { Button, Card, CardActions, CardContent, CardMedia, createMuiTheme, MuiThemeProvider, Tab, Tabs, Typography } from "@material-ui/core";
import React, { Component } from "react";
import ferti from '../../assets/New folder/methi.jpg'
import ChangePassword from "./changePassword";
import ViewEditProfile from "./viewEditProfile";

const theme = createMuiTheme({
    overrides: {
        MuiTab:{
            root:{
                color:"#3b3b3b !important",
                fontWeight:"bold !important"
            }
        },
        PrivateTabIndicator:{
            root:{
                backgroundColor:'green !important',
                height:'4px !important'
            }
        }
    }
})

class FarmerKit extends Component {
  constructor(props){
    super(props);
    this.state={
     selectedTab:"select_fertilizer"
    }
  }

  handleTabSelection=(value)=>{
      this.setState({selectedTab:value})
  }

  render() {
    return (
        <MuiThemeProvider theme={theme}>
      <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <Tabs value={this.state.selectedTab} aria-label="wrapped label tabs example" style={{margin:"0px",padding:"10px 10px 0",background:"#fff"}}>
          <Tab 
          value={"select_fertilizer"}
          label="Fertilizers" 
          onClick={()=>this.handleTabSelection("select_fertilizer")}
          />
           <Tab 
          value={"select_seeds"}
          label="Seeds" 
          onClick={()=>this.handleTabSelection("select_seeds")}
          />
           <Tab 
          value={"select_fodders"}
          label="Fodders" 
          onClick={()=>this.handleTabSelection("select_fodders")}
          />
         <Tab 
          value={"select_tools"}
          label="Machinary and Equipments" 
          onClick={()=>this.handleTabSelection("select_tools")}
          />
        </Tabs>
        <div
          style={{
            margin: "20px",
            display: "flex",
            // background: "#fff",
            height:'100%',
            color:'#2b2b2b',
            padding:'20px'
          }}
        >
        <Card style={{width:"300px"}}>
      <CardMedia
        component="img"
        height="auto"
        image={ferti}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}
export default FarmerKit;
