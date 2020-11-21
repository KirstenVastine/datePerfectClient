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

  const [open, setOpen] = React.useState(false);
  const [userProfile, setUserProfile]  = React.useState([]);
  const [reload, setReload] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (reload=false) => {
    setOpen(false);
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
        setUserProfile(profile[0]);
      })
      .catch((err) => console.log(err));
    };
    getProfile();
    setReload(false);
    //console.log(userProfile);
  },[reload]);

  return (
    <div className= "mainDiv topBorder">
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
                <img src={userProfile.picURL} style={{ height: "200px" }} />
                {console.log(userProfile.picURL)}
                
                  
          </div>
        </div>
      </div>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {userProfile?.firstName + '  ' + userProfile?.lastName}
          </Typography>
          <Typography variant="h5" component="h4">
          <p>{userProfile?.location}</p>
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
           {userProfile?.bio}
            </Typography>

            <Typography variant="body2" color="textSeconday" component="h3">
            <h5> HOBBIES </h5>
            
          </Typography>
          <Typography variant="body2" color="textSeconday" component="h2">
            {userProfile?.hobbies}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>

      <UpdateProfile 
        open={open} handleClose={handleClose} 
        profileToUpdate={userProfile}
        setSnackBarMsg={setSnackBarMsg}
        setSnackBarSeverity={setSnackBarSeverity} 
        setShowSnackBar={setShowSnackBar}
        setReload={setReload}
        />
    </div>
  );
}

