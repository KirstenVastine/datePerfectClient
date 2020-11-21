import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DatePlanHome from "./Home_DatePlan";
import DatePlanActivity from "./Activity_DatePlan";
import DatePlanGift from "./Gift_DatePlan";
import DatePlanMeal from "./Meal_DatePlan";
import ListItem from "@material-ui/core/ListItem";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
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
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
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

function DatePlan(props) {
  const [toggle, setToggle] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleToggleMeal = () => {
    setToggle("meal");
  };

  const handleToggleHome = () => {
    setToggle("");
  };

  const handleToggleActivity = () => {
    setToggle("activity");
  };

  const handleToggleGift = () => {
    setToggle("gift");
  };

  const handleClickOpen = (e) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        onClick={handleClickOpen}
        size="small"
        color="secondary"
        aria-label="add"
      >
        <AssignmentIcon />
      </Fab>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          className="modalTitle"
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Your Perfect Date
        </DialogTitle>
        <DialogContent dividers>
          {toggle === "meal" ? (
            <DatePlanMeal />
          ) : toggle === "activity" ? (
            <DatePlanActivity />
          ) : toggle === "gift" ? (
            <DatePlanGift />
          ) : (
            <DatePlanHome
              matchFirstName={props.matchFirstName}
              username={props.username}
              profile={props.profile}
              picURL={props.picURL}
              matchLastName={props.matchLastName}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleToggleHome} color="primary">
            <i class="fas fa-user-check"></i>
          </Button>
          <Button autoFocus onClick={handleToggleMeal} color="primary">
            <i class="fas fa-utensils"></i>
          </Button>
          <Button autoFocus onClick={handleToggleActivity} color="primary">
            <i class="fas fa-biking"></i>
          </Button>
          <Button autoFocus onClick={handleToggleGift} color="primary">
            <i class="fas fa-gift"></i>
          </Button>
        </DialogActions>
        <DialogActions className="connect">
            <a href={`mailto:${props.email}`} className="connect1" target="_blank">
              <Button id="connect" autoFocus>
              <i class="fas fa-envelope"></i>
                Connect
              </Button>
            </a>
            
 
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DatePlan;
