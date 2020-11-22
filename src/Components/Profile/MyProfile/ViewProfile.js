import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import UpdateProfile from './UpdateProfile';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ViewProfile(props) {
  const {
    setSnackBarSeverity,
    setShowSnackBar,
    setSnackBarMsg
  } = props;

  const [openUpdateProfile, setOpenUpdateProfile] = React.useState(false);
  const [reload, setReload] = React.useState(false);

  const handleClickOpen = () => {
    setOpenUpdateProfile(true);
  };

  const handleCloseForUpdateProfile = (reload=false) => {
    setOpenUpdateProfile(false);
    if(reload)
      setReload(true);
  };

  const classes = useStyles();

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
          <h1 className= "viewProfileText" gutterBottom variant="h4" component="h2">
           {props.userProfile?.firstName + '  ' + props.userProfile?.lastName}
          </h1>
          <h4 className="viewProfileText">{props.userProfile?.location}</h4>
          <br></br>
      
          <Typography variant="body2" color="textPrimary" component="p">
           ABOUT ME: <br></br> {props.userProfile?.bio} 
            </Typography>

            <Typography variant="body2" color="textSeconday" component="h3">
            {props.userProfile.hobbies !== '' ? <h5> HOBBIES </h5>: ''}
            
            
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
        open={openUpdateProfile} handleClose={handleCloseForUpdateProfile} 
        profileToUpdate={props.userProfile}
        setSnackBarMsg={setSnackBarMsg}
        setSnackBarSeverity={setSnackBarSeverity} 
        setShowSnackBar={setShowSnackBar}
        setReload={setReload} ViewProfile={ViewProfile}
        />
    </div>
  );
}

