import React from "react";
import Typography from '@material-ui/core/Typography';
import Axethrow from '../../../Assets/axethrow.jpg'


function DatePlanActivity(props) {
  return (

    <div>
          <Typography className= "cardText" gutterBottom>
          <img src={Axethrow}></img>
           
          </Typography>
          <Typography className= "cardText" gutterBottom>
          <p>Activity Recommendation: Axe-Throwing</p>
           
          </Typography>
          </div>)
}

export default DatePlanActivity;
