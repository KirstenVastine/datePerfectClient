//This is the verified user's Profile Create page.
//Here they can set date gender preferences.
//User's name will auto fill.

import React from 'react';
import Chip from '@material-ui/core/Chip';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';



function InterestPref () {

    return (
        <div className= "mainDiv">
        <div className= "titleDiv">
        <i class="far fa-heart heart"></i>
        <br></br>
        <h1 className="Profile">Create Profile</h1>
        <h5 className="ProSub">Taking the Guesswork out of Love</h5>
        </div>
        <div className= "buttonDiv">
    <Chip size="large"  color="secondary" label="Sign Up" onClick={handleClick} />
    <br></br>
    <Chip size="large"  color="secondary" label="Login" onClick={handleClick} />
        </div>
</div>
    )
}

export default InterestPref;