import React from "react";

import Typography from '@material-ui/core/Typography';
import Flowers from '../../../Assets/flowers.jpg'



function DatePlanGift(props) {
  return (

    <div>
          <Typography className= "cardText" gutterBottom>
          <img src={Flowers}></img>
           
          </Typography>
          <Typography className= "cardText" gutterBottom>
          <p>Gift: Flowers</p>
           
          </Typography>
          </div>)
}

export default DatePlanGift;
