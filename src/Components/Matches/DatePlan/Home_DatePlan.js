import React from "react";

import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";


function DatePlanHome(props) {

  return (

    <div>
          <Typography className= "cardText" gutterBottom>
          <div className="title_pic">
          <Avatar className="photo" variant= "rounded"   style={{ height:'80px', width: '80px'}}  />
            <h4 className="name">{props.username}</h4>
          </div>
            
            <i class="far fa-heart heartModal smallHeart"></i>
            <div className="title_pic">
            <Avatar className= "photo" variant= "rounded"  style={{ height:'80px', width: '80px'}} src={props.picURL} />
            <h4 className="name">{props.matchFirstName} </h4>
            </div>
         
          </Typography>
          <Typography className= "cardText" gutterBottom>
          <p>We've planned the perfect date for you!</p>
           
          </Typography>
          </div>)
}

export default DatePlanHome;
