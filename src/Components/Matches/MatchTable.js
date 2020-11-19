import React, {useState, useEffect} from "react";
import {fade,  makeStyles } from "@material-ui/core/styles";
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
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));






export default function ViewMatchProfile(props) {
  const classes = useStyles();
  const [profile, setProfile] = useState([]); 
  const[pageNumber, setPageNumber] = useState(0);
  // const[myName, setMyName] =useState('name')
  const[matchName, setMatchName] = useState('matchName')

  


  const changePageNumber= (event, direction) =>{
    event.preventDefault()
    if(direction ==='down'){
      if(pageNumber >0) {
        setPageNumber(pageNumber-1);
        fetchProfiles();
      }
    }
    if(direction === 'up') {
      setPageNumber(pageNumber + 1);
      fetchProfiles();
    }
  }


const fetchProfiles = () =>{
   console.log(props.sessionToken)
    fetch('http://localhost:4000/profile/all', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization':props.sessionToken
        })
    }).then((res=> res.json()))
    .then((json) => {
        console.log("matchtable", json)
        setProfile(json) //taking information from the server and setting it to our state
    })
}

useEffect(() => {
    fetchProfiles();
   
}, [])

console.log(profile)




  return (
  
    <div className="matchDiv">
      <div className="titleDiv matchTitle">
        <i class="far fa-heart heart"></i>
        <h1 className="title">Find Your Perfect Match</h1>
     

      </div>

      <React.Fragment>
        <CssBaseline />
        <Paper square id="paper" className={classes.paper}>
        <div  className={classes.root}>
        <AppBar  id="matchBar" position="static">
          <Toolbar  >

            <Typography className={classes.title} variant="h6" noWrap>
            
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
     
          <List className={classes.list}>
            {profile.map(({id, firstName, lastName, picURL}) => (
              <React.Fragment key={id}>
                <ListItem button >
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={picURL} />
                  </ListItemAvatar>
                  <ListItemText primary={firstName} secondary={lastName} value={firstName} onClick={(e) => setMatchName(firstName) }  />
                  <DatePlan matchName={matchName} username={props.username} profile={profile}  />
                </ListItem>
                
              </React.Fragment>
              
          
            ))}
        
          </List>
          <div>
          <button onClick={(e)=> changePageNumber(e, 'down')}>Previous 10</button>
          <button onClick={(e)=> changePageNumber(e, 'up')}>Next 10</button>
          </div>
          
        </Paper>
        
       
      
      </React.Fragment>
    </div>

  );
}

//https://stackoverflow.com/questions/60789004/about-infinite-scroll-in-react-js-and-material-ui
//https://youtu.be/NZKUirTtxcg