import React, {useEffect, useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Route, Link, Redirect } from "react-router-dom";
import VerifiedUserView from "../VerifiedUserView/VerifiedUserView";
import API_URL from "../../environment";





const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));

function Signup (props){
  const[data, setData] = useState(false) 

 


    const handleSubmit =(event) => {
      event.preventDefault();
      fetch(`${API_URL}/user/signup/`,{
          method: 'POST', 
          body: JSON.stringify({user: {username: props.username, password: props.password}}),
          headers: new Headers({
              'Content-Type': 'application/json'
          })
      }).then(
          (response) => response.json()

      ).then((json)=>{
          props.updateToken(json.sessionToken);
         
      })
  }
    
      const classes = useStyles();

  //  function signInToken (){
  //    if(props.sessionToken){
  //     <Link to="/user"></Link>
  //    }
  //  }

  //  useEffect(()=> {
  //    signInToken()
  //  }, props.sessionToken)
     
  // sessionToken === localStorage.getItem("token") ? (
  //   <VerifiedUserView username={username} />
  // ) : (

  // if(props.sessionToken === localStorage.getItem("token")){
  //   return(
  //     <VerifiedUserView username={props.username}/>
  //   )
  // }else{

    const checkForToken= () =>{
      if(props.sessionToken){
        return <Redirect to= "/createprofile"/>
      }return(console.log('no luck'))
    }

    return(
    
        <div className= "mainDiv">
     
    <Container className="signin" component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            onChange={(e) => props.setUsername(e.target.value)}
            value={props.username}
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={(e) => props.setPassword(e.target.value)}
            value={props.password}
            id="password"
            autoComplete="current-password"
          />
  
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
          >
            Sign Up
          </Button>
          <Grid container className= "signInText">
          
            <Grid item >
              <Link to="/login"  variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}></Box>
      {console.log(props.username)}
      {console.log(props.password)}
    </Container>
    <div>
  {checkForToken()}
        </div>
  
</div>
    )}

export default Signup;
