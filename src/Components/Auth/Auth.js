import React from "react";
import Chip from '@material-ui/core/Chip';

function Auth (){
    const handleClick = () => {
        console.info('You clicked the Chip.');
      };
    return(
        <div className= "mainDiv">
        <div className= "titleDiv">
        <i class="far fa-heart heart"></i>
        <br></br>
        <h1 className="title">Date Perfect</h1>
        <h5 className="title">Taking the Guesswork out of Love</h5>
        </div>
        <div className= "buttonDiv">
    <Chip size="large"  color="secondary" label="Sign Up" onClick={handleClick} />
    <br></br>
    <Chip size="large"  color="secondary" label="Login" onClick={handleClick} />
        </div>
</div>
    )
}

export default Auth;
