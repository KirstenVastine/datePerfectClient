import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import Fab from "@material-ui/core/Fab";
import ViewProfile from "../Profile/MyProfile/ViewProfile"
import Avatar from "@material-ui/core/Avatar"

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

 function ViewMatchProfile(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Fab
    className="profileButton"
    size="small"
    color= "gray"
    aria-label="add"
    onClick={handleClickOpen}
    setOpen={setOpen}
    open={open}
  >
    <AccountBoxOutlinedIcon />
  </Fab>


      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle  color="secondary" id="customized-dialog-title" onClose={handleClose}>
        Match Profile <i class="far fa-heart smallHeart"></i>
        
        </DialogTitle>
        <DialogContent dividers>
        <div className= "profileMatchPic" >
        <img  src={props.picURL} style={{  height:'180px', width: '180px'}} />
        <div className= "matchProfileName">
        <h1 className= "matchTitleView" style={{ color: 'white'}}>{props.matchFirstName}  {props.matchLastName}</h1>
        <h3 className= "matchTitleView" style={{ color: 'white'}}>{props.location} </h3>
        </div>
        
        </div>
     
      
      
            <br></br>
          <Typography gutterBottom>
           ABOUT ME:
          </Typography>
          <Typography gutterBottom>
            {props.bio}
          </Typography>
          <Typography gutterBottom>
            
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ViewMatchProfile;