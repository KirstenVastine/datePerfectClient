import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const DynamicSnackBar = (props) => {
    const {open, handleClose, severity, message}= props;

    function Alert(alertProps) {
        return <MuiAlert elevation={6} variant="filled" {...alertProps} />;
      }
      const classes = useStyles();

      return (
        <div className={classes.root}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
              {message}
            </Alert>
          </Snackbar>
        </div>
      );
    
}

export default DynamicSnackBar;