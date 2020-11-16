import React from "react";

import Typography from '@material-ui/core/Typography';


function DatePlanHome(props) {

  return (

    <div>
          <Typography className= "cardText" gutterBottom>
            <h3>{props.profile[0].name}</h3>
            <i class="far fa-heart heartModal smallHeart"></i>
            <h3>Kelly S</h3>
          </Typography>
          <Typography className= "cardText" gutterBottom>
          <p>We've planned the perfect date for you!</p>
           
          </Typography>
          </div>)
}

export default DatePlanHome;
