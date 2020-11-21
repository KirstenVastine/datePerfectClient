import React, { useState, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import AssignmentIcon from "@material-ui/icons/Assignment";
import InputBase from "@material-ui/core/InputBase";
import DatePlan from "./DatePlan/DatePlan";
import Button from "@material-ui/core/Button";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import Fab from "@material-ui/core/Fab";

const messages = [
  {
    id: 1,
    primary: "Bob Baker",
    secondary: `Chicago, IL`,
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 2,
    primary: "Carol Lynn",
    secondary: `Chicago, IL`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    id: 3,
    primary: "George Carlsen",
    secondary: `Chicago, IL`,
    person: "/static/images/avatar/2.jpg",
  },
  {
    id: 4,
    primary: "Emma Young",
    secondary: `Chicago, IL`,
    person: "/static/images/avatar/3.jpg",
  },
  {
    id: 5,
    primary: "Freida French",
    secondary: `Chicago, IL`,
    person: "/static/images/avatar/4.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },

  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function ViewMatchProfile(props) {
  const classes = useStyles();
  const [profile, setProfile] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  // const[myName, setMyName] =useState('name')
  const [matchName, setMatchName] = useState("matchName");

  const changePageNumber = (event, direction) => {
    event.preventDefault();
    if (direction === "down") {
      if (pageNumber > 0) {
        setPageNumber(pageNumber - 1);
        fetchProfiles(pageNumber - 1);
      }
    }
    if (direction === "up") {
      setPageNumber(pageNumber + 1);
      fetchProfiles(pageNumber + 1);
    }
  };

  const handleButton = () => {
    console.log(profile);
    //  {profile.length <= 0 ? {style= {display:"block"}} :  {style= {display:"block"}}}
  };
  // {profile.length <= 0 ? {style= {display:"block"}} :  {style= {display:"block"}}}

  // if (articles.length >= 10) {
  //   nextBtn.style.display = "block";
  // } else {
  //   nextBtn.style.display = "none";
  // }

  // if (pageNumber <= 0) {
  //   previousBtn.style.display = "none";
  // } else {
  //   previousBtn.style.display = "block";
  // }

  const fetchProfiles = (p) => {
    console.log(props.sessionToken);
    console.log(p);
    fetch(
      `http://localhost:4000/profile/all${p !== undefined ? `?page=${p}` : ""}`,
      {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: props.sessionToken,
        }),
      }
    )
      .then((res) => res.json())
      .then((json) => {
        console.log("matchtable", json);
        setProfile(json); //taking information from the server and setting it to our state
      });
  };

  useEffect(() => {
    fetchProfiles(0);
  }, []);

  console.log(profile);

  return (
    <div className="matchDiv">
      <div className="titleDiv matchTitle">
        <i class="far fa-heart heart"></i>
        <h1 className="title">Find Your Perfect Match</h1>
      </div>

      <React.Fragment>
        <CssBaseline />
        <Paper square id="paper" className={classes.paper}>
          <div className={classes.root}>
            <AppBar id="matchBar" position="static">
              <Toolbar style={{ width: "100%" }}>
                <Typography
                  className={classes.title}
                  variant="h6"
                  noWrap
                ></Typography>
                <div className="search" className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
                <div className="pageButton">
                  <Button
                    variant="contained"
                    color="secondary"
                    style={
                      pageNumber === 0
                        ? { display: "none" }
                        : { display: "inline-block" }
                    }
                    onClick={(e) => changePageNumber(e, "down")}
                  >
                    Previous 5
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={
                      profile.length >= 5
                        ? { display: "inline-block" }
                        : { display: "none" }
                    }
                    onClick={(e) => changePageNumber(e, "up")}
                  >
                    Next 5
                  </Button>
                </div>
              </Toolbar>
            </AppBar>
          </div>

          <List className={classes.list}>
            {profile.map(
              ({ id, firstName, lastName, location, picURL, email }) => (
                <React.Fragment key={id}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={picURL} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={firstName + " " + lastName}
                      secondary={location}
                      value={firstName}
                    />
                    <Fab
                      className="profileButton"
                      size="small"
                      color= "gray"
                      aria-label="add"
                    >
                      <AccountBoxOutlinedIcon />
                    </Fab>
                    <DatePlan
                      matchFirstName={firstName}
                      matchLastName={lastName}
                      email={email}
                      picURL={picURL}
                      username={props.username}
                      profile={profile}
                      userProfile={props.userProfile}
                    />
                  </ListItem>
                </React.Fragment>
              )
            )}
          </List>
        </Paper>
      </React.Fragment>
    </div>
  );
}

//https://stackoverflow.com/questions/60789004/about-infinite-scroll-in-react-js-and-material-ui
//https://youtu.be/NZKUirTtxcg
