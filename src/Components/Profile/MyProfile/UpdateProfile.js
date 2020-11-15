import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';


export default function UpdateProfileModal(props) {
  const {open, handleClose} = props;

  return (
    <div className="mainDiv">
      
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
          <DialogTitle id="form-dialog-title" margin="dense">Hobbies</DialogTitle>
          
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
    </div>
  );
}