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
          <p>Our gift recommendation for you is flowers.</p>
           
          </Typography>
          </div>)
}

export default DatePlanGift;
