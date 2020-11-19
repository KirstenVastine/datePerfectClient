import React from "react";
import Chip from "@material-ui/core/Chip";
import { Route, Link } from "react-router-dom";

function Logo(props) {

  return (
    <div className="mainDiv">
      <div className="titleDiv">
        <i class="far fa-heart heart"></i>
        <br></br>
        <h1 className="title">Date Perfect</h1>
        <h5 className="title">Taking the Guesswork out of Love</h5>
      </div>

      <div className="buttonDiv">
        
          <Chip
            size="large"
            to ="/signup"
            component= {Link}
            color="secondary"
            label="Sign Up"
            className="chip"
            
          />
       
        <br></br>
  
          <Chip
            size="large"
            color="secondary"
            label="Login"
            to ="/login"
            component= {Link}
            className="chip"
            
          />
    
      </div>
    </div>
  );
}

export default Logo;
