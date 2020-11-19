import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Route, Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Chuys from "../../../Assets/Chuys.jpg"


function DatePlanMeal(props) {
  return (

    <div>
          <Typography className= "cardText" gutterBottom>
          <img src={Chuys}></img>
          </Typography>
          <Typography className= "cardText" gutterBottom>
          <p>This is the  Meal Page</p>
           
          </Typography>
          </div>)
}

export default DatePlanMeal;
