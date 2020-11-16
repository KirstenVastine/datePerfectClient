import React from "react";
import Chip from "@material-ui/core/Chip";
import ViewMatchProfile from "./../../Components/Matches/ViewMatchProfile";
import { Link } from "react-router-dom";

function VerifiedUserView(props) {
 
  return (
    <div className="mainDiv">
      <div className="titleDiv">
        <i class="far fa-heart heart"></i>
        <br></br>
        <h1 className="title">{`Hello ${props.username}!`}</h1>
      </div>
      <div className="buttonDiv">
        <Chip
          size="large"
          color="secondary"
          label="View My Profile"
          to= "/profile"
          component={Link}
          className="chip"
      
        />
        <br></br>
        <Chip
          size="large"
          to= "/user/match"
          component={Link}
          color="secondary"
          label="Find My Match"
          className="chip"
          
        />
      </div>
    </div>
  );
}
export default VerifiedUserView;
