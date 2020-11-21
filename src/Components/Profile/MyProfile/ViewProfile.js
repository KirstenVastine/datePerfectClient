import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import UpdateProfile from './UpdateProfile';
import DynamicSnackBar from './DynamicSnackBar';
import UploadPhoto from '../UploadPhoto';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ViewProfile(props) {
  const [open, setOpen] = React.useState(false);
  // const [userProfile, setUserProfile]  = React.useState([]);
  const [showSnackBar, setShowSnackBar]= React.useState(false);
  const [snackBarMsg, setSnackBarMsg] = React.useState('Processing');
  const [snackBarSeverity, setSnackBarSeverity] = React.useState('info');
  const [reload, setReload] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if(reload)
      setReload(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSnackBar(false);
    setSnackBarMsg('Processing');
    setSnackBarSeverity('info');
  }
  const classes = useStyles();

  // const userprofileBioDisplay = () =>{
  //   {userProfile.bio} ? `${userProfile.bio}` : "This is all about me and me and me and me and me";
  // }

  React.useEffect(()=>{
    const getProfile = () => {
      fetch(`http://localhost:4000/profile/`, 
      {
        method: "GET",
        headers: new Headers ({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")
        })
      } )
      .then((result) => result.json())
      .then((profile) => {
        console.log(profile);
        props.setUserProfile(profile[0]);
      })
      .catch((err) => console.log(err));
    };
    getProfile();
    setReload(false);
    //console.log(userProfile);
  },[reload]);



  return (
    <div className= "mainDivforProfile topBorder">
    <Card className={classes.root}>
      <CardActionArea>
      <div className="imageContainer">
        <div className="imageDiv">
          <Fab color="secondary" aria-label="edit" className="editIcon" size="small">
            <EditIcon onClick={handleClickOpen} />
          </Fab>
          <div className="imageInnerDiv">
            {/* //img goes here */}
               
            <CardMedia />
                <img src={props.userProfile.picURL} style={{ height: "200px" }} />
                {console.log(props.userProfile.picURL)}
                
                  
          </div>
        </div>
      </div>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.userProfile?.firstName + '  ' + props.userProfile?.lastName}
          </Typography>
          <Typography variant="h5" component="h4">
          <p>{props.userProfile?.location}</p>
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
           {props.userProfile?.bio}
            </Typography>

            <Typography variant="body2" color="textSeconday" component="h3">
            <h5> HOBBIES </h5>
            
          </Typography>
          <Typography variant="body2" color="textSeconday" component="h2">
            {props.userProfile?.hobbies}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>

      <UpdateProfile 
        open={open} handleClose={handleClose} 
        profileToUpdate={props.userProfile}
        setSnackBarMsg={setSnackBarMsg}
        setSnackBarSeverity={setSnackBarSeverity} 
        setShowSnackBar={setShowSnackBar}
        setReload={setReload}
        />

      <DynamicSnackBar
        open={showSnackBar} 
        handleClose={handleSnackbarClose}
        message={snackBarMsg}
        severity={snackBarSeverity} />
    
    </div>
  );
}

