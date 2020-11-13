import React, { useState } from "react";
import Signup from './Signup';
import Login from './Login';
import Logo from './Logo';



function Auth (props){
    const [button, setButton]= useState('')
 
    return button === 'signup' ?(
        <Signup setUsername={props.setUsername}  username= {props.username} password={props.password} setPassword={props.setPassword} updateToken={props.updateToken} setButton = {setButton} />
    ): button === 'login' ? (
        <Login setUsername={props.setUsername}  username= {props.username} password={props.password} setPassword={props.setPassword} updateToken={props.updateToken} setButton = {setButton} updateToken={props.updateToken} setButton = {setButton} />
    ): <Logo setButton = {setButton} />
    
}

export default Auth;
