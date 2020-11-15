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
import UpdateProfileModal from './UpdateProfile';


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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div className= "mainDiv topBorder">
    <Card className={classes.root}>
      <CardActionArea>
      <Fab color="secondary" aria-label="edit">
        <EditIcon onClick={handleClickOpen} />
      </Fab>
      <div className="imageContainer">
      <div className="imageDiv">
      <div className="imageInnerDiv">
      //img goes here<CardMedia
          className={classes.media}
          image="../../../src/asset/datePerfect.png"
          title="user-image" />
      </div>
        </div>
      </div>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Charlie E
          </Typography>
          <Typography>
          <p>Indianapolis, Indiana</p>
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Write about yourself. Write about yourself. Talk about yourself. Talk about yourself
            </Typography>

            <Typography variant="body2" color="textSeconday" component="h2">
            <h5> HOBBIES </h5>
            <p><span>hob1 | </span><span>hob3 | </span><span>hob2 | </span></p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>


    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Profile Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit your profile
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
          />
          <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="currentcity"
            name="currentcity"
            label="Current City"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="currentstate"
            name="currentstate"
            label="Current State"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        </Grid>
          <TextField
          id="filled-multiline-static"
          label="About section"
          multiline
          rows={4}
          variant="filled"
          fullWidth
        />
          <DialogTitle className="hobbiesTitle" id="form-dialog-title" margin="dense">Hobbies</DialogTitle>
          
          <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            id="hobby1"
            name="hobby1"
            label="Hobby 1"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField 
            id="hobby2"
            name="hobby2"
            label="Hobby 2"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="hobby3"
            name="hobby3"
            label="Hobby 3"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
      <UpdateProfileModal sessionToken={props.sessionToken} open={open} handleClose={handleClose}/>
    
    </div>
  );
}

