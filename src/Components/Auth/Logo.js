import React from "react";
import Chip from '@material-ui/core/Chip';
import Signup from './Signup';
import Login from './Login';
import { StepButton } from "@material-ui/core";



function Logo (props){
    const handleClick = () => {
        console.info('You clicked the Chip.');
      };
    return (
        <div className= "mainDiv">
        <div className= "titleDiv">
        <i class="far fa-heart heart"></i>
        <br></br>
        <h1 className="title">Date Perfect</h1>
        <h5 className="title">Taking the Guesswork out of Love</h5>
        </div>
        
        <div className= "buttonDiv">
    <Chip size="large"  color="secondary" label="Sign Up" onClick={(e) => props.setButton('signup')} />
    <br></br>
    <Chip size="large"  color="secondary" label="Login" onClick={(e) => props.setButton('login')} />
        </div>
        
</div>
    )
    
}

export default Logo;
