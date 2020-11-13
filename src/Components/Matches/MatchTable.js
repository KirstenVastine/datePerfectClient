import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import AssignmentIcon from '@material-ui/icons/Assignment';
import InputBase from '@material-ui/core/InputBase';
import SearchBar from "material-ui-search-bar"
import {Route} from 'react-router-dom';



const messages = [
  {
    id: 1,
    primary: "Bob Baker",
    secondary:
    `Chicago, IL`,
    person: "/static/images/avatar/5.jpg"
  },
  {
    id: 2,
    primary: "Carol Lynn",
    secondary:`Chicago, IL`,
    person: "/static/images/avatar/1.jpg"
  },
  {
    id: 3,
    primary: "George Carlsen",
    secondary:
    `Chicago, IL`,
    person: "/static/images/avatar/2.jpg"
  },
  {
    id: 4,
    primary: "Emma Young",
    secondary: `Chicago, IL`,
    person: "/static/images/avatar/3.jpg"
  },
  {
    id: 5,
    primary: "Freida French",
    secondary:
    `Chicago, IL`,
    person: "/static/images/avatar/4.jpg"
  }
];

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing(2)
  },
  subheader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: "auto",
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  }
  
}));

export default function ViewMatchProfile() {
  const classes = useStyles();

  return (
    
      <div className= "matchDiv">
      <div className= "titleDiv matchTitle">
      <i class="far fa-heart heart"></i>
      <h1 className="title">Find Your Perfect Match</h1>
      <br></br>
      <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          style={{
            margin: '0 auto',
            maxWidth: 800,
        
            
          }}
        />
     
 

 
      
      </div>
     
      
    <React.Fragment>
      <CssBaseline />
      <Paper square id="paper" className={classes.paper}>
        <List className={classes.list}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
                <Fab size="small" color="secondary" aria-label="add">
  <AssignmentIcon />
</Fab>
                
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        
      </AppBar>
      
    </React.Fragment>
   {/*} <Route path= "/" exact render={()=> <h1>Home</h1>} />
          <Route path= "/" exact render={()=> <h1>Home2</h1>} />*/}

    </div>
  );
}
