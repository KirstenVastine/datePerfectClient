
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../src/Theme";
import Sitebar from "../src/Components/Sitebar/Sitebar";
import "../src/App.css";
import VerifiedUserView from "./Components/VerifiedUserView/VerifiedUserView";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import MatchTable from "./Components/Matches/MatchTable"
import { BrowserRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import Logo from "./Components/Auth/Logo";
import DatePlan from "./Components/Matches/DatePlan/DatePlan"
import DatePlanActivity from "./Components/Matches/DatePlan/Activity_DatePlan";
import ViewProfile from "./Components/Profile/MyProfile/ViewProfile";
import Upload from "./Components/Profile/UploadPhoto";
import ProfileCreate from "./Components/Profile/Create/ProfileCreate"


const button = "four";


function App() {
  const [sessionToken, setSessionToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <VerifiedUserView username={username} />
    ) : (
      <Logo
        updateToken={updateToken}
        setUsername={setUsername}
        username={username}
        password={password}
        setPassword={setPassword}
      />
    );
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
   
  };

  return (


    <ThemeProvider theme={theme}>

      {protectedViews}
      <BrowserRouter>
      <Route path="/">
      <Sitebar 
      sessionToken={sessionToken}
      clickLogout={clearToken}/>
      </Route>

      
  
        
          
         
        <Route exact path="/">
        <Logo updateToken={updateToken}
        setUsername={setUsername}
        username={username}
        password={password}
        setPassword={setPassword}/>
        </Route>

        <Route exact path="/login">
         <Login setUsername={setUsername} username={username}
         password={password}
         sessionToken={sessionToken}
         setPassword={setPassword}
         updateToken={updateToken}/>
         </Route>
        
         <Route exact path="/signup">
         <Signup setUsername={setUsername} username={username}
         password={password}
         sessionToken={sessionToken}
         setPassword={setPassword}
         updateToken={updateToken}/>
         </Route>

         <Route exact path="/profile">
         <ViewProfile setUsername={setUsername} username={username}
         password={password}
         sessionToken={sessionToken}
         setPassword={setPassword}
         updateToken={updateToken}/>
         </Route>

         <Route exact path="/upload">
         <Upload setUsername={setUsername} username={username}
         password={password}
         sessionToken={sessionToken}
         setPassword={setPassword}
         updateToken={updateToken}/>
         </Route>


         <Route exact path="/date">
         <DatePlan setUsername={setUsername} username={username}
         password={password}
         sessionToken={sessionToken}
         setPassword={setPassword}
         updateToken={updateToken}/>
         </Route>

           
         <Route exact path="/date/activity">
         <DatePlanActivity updateToken={updateToken}
         setUsername={setUsername}
         username={username}
         password={password}
         setPassword={setPassword}/>
         </Route>
       
        <Route exact path="/user">
        <VerifiedUserView  username={username} sessionToken={sessionToken}/>
        </Route>
        
        <Route exact path="/user/match">
        <MatchTable username={username}  sessionToken={sessionToken}/>
        </Route>

        <Route exact path="/createprofile">
        <ProfileCreate username={username}  sessionToken={sessionToken}/>
        </Route>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

//comment
