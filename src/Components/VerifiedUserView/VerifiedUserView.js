import React from "react";
import Chip from '@material-ui/core/Chip';
import ViewProfile from '../Profile/MyProfile/ViewProfile';

function VerifiedUserView (props){
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return(
        <div className= "mainDiv">
            <div className= "titleDiv">
                <i class="far fa-heart heart"></i>
                <br></br>
                <h1 className="title">{`Hello ${props.username}!`}</h1>
            </div>
            <div className= "buttonDiv">
            <Chip size="large"  color="secondary" label="View My Profile" onClick={handleClick} />
            <br></br>
            <Chip size="large"  color="secondary" label="Find My Match" onClick={handleClick} />
        </div>
</div>
    )
}
export default VerifiedUserView;