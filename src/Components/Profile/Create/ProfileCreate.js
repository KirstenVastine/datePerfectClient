//This is the folder where all four profile components come together.

import React from 'react';
import Checkout from '../MyProfile/Checkout'

function ProfileCreate (props) {

    return(

        <div>
            <Checkout sessionToken={props.sessionToken}/>
        </div>

    ) 
}

export default ProfileCreate;