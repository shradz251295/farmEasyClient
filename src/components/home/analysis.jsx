
import React,{Component} from 'react';
const data=require('../../pages/Crop_recommendation.json');

class Analysis extends Component{
render(){
        data.map((k)=>{
            if(k.N==85 && k.K==50 && k.P==40 && k.temperature==20 && k.humidity==34 && k.ph==34 && k.rainfall==2){
                console.log(k);
            }
        })
    return(
     data.map((k)=>
        k.N==85?
        <span>{k.label}</span>
        :
       null
        )

    )
}
}
export default Analysis