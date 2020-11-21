import React, {useEffect} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import { Route, Link, Redirect } from "react-router-dom";
import DeleteAccount from "./DeleteAccount";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

export default function Sitebar(props) {
  const [open, setOpen] = React.useState(false);
  const [profile, setProfile] = React.useState([])
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {
    setSnackBarMsg,
    setSnackBarSeverity,
    setShowSnackBar
  } = props;

  const {clickLogout} = props;

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseForDeleteAccount = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
    props.clickLogout();
  };

const checkForToken= () =>{
  if(!props.sessionToken){
    return <Redirect to="/"/>
  }else{
    return <Redirect to="/user"/>
  }
}

const handleClickOpen = () => {
  setOpen(true);
};



  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h5">
              <Link to={!props.sessionToken ? "/" : "/user"} id="navTitle">
                
                Date Perfect <i class="far fa-heart smallHeart"></i>
              </Link>
            </Typography>

            <div className="logouticon">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {props.sessionToken ? <AccountCircle /> : <p></p>}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  Logout
                </MenuItem>
                <MenuItem onClick={handleClickOpen}>
                  Delete my Account
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <DeleteAccount open={open}  
        accountToDelete={profile} 
        token={props.sessionToken} 
        logoutUser={clickLogout} 
        handleClose={handleCloseForDeleteAccount} 
        setSnackBarMsg={setSnackBarMsg}
        setSnackBarSeverity={setSnackBarSeverity} 
        setShowSnackBar={setShowSnackBar}
      />
      <div className={classes.toolbarMargin} />
      {checkForToken()}
    </React.Fragment>
  );
}
