//React
import React, {useEffect, useState} from 'react';

//UI 
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import theme from '../src/Theme';
import '../src/App.css';

//Components
import Sitebar from '../src/Components/Sitebar/Sitebar';
import VerifiedUserView from './Components/VerifiedUserView/VerifiedUserView';
import Auth from './Components/Auth/Auth';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Footer from './Components/Footer/Footer'
import DeleteAccount from './Components/Sitebar/DeleteAccount';
import ViewProfile from './Components/Profile/MyProfile/ViewProfile'
import UpdateProfileModal from './Components/Profile/MyProfile/UpdateProfileModal';
import InterestPref from './Components/Profile/MyProfile/InterestPref' //address form
import Cuisine from './Components/Profile/MyProfile/Cuisine' //Step 2
import Hobbies from './Components/Profile/MyProfile/Hobbies' //Step 3
import Checkout from './Components/Profile/MyProfile/Checkout'


const button = 'two';

// // const button = 'four';
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

//Styles and Layout
// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     position: 'relative',
//   },
//   layout: {
//     width: 'auto',
//     marginLeft: theme.spacing(2),
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
//       width: 600,
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     },
//   },
//   paper: {
//     marginTop: theme.spacing(3),
//     marginBottom: theme.spacing(3),
//     padding: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
//       marginTop: theme.spacing(6),
//       marginBottom: theme.spacing(6),
//       padding: theme.spacing(3),
//     },
//   },
//   stepper: {
//     padding: theme.spacing(3, 0, 5),
//   },
//   buttons: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//   },
//   button: {
//     marginTop: theme.spacing(3),
//     marginLeft: theme.spacing(1),
//   },
// }));

export function App() {
  //State
  const [sessionToken, setSessionToken] = useState('');
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');
  /////////

  //Logic For Authorization on Component Render/////////////////////
  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
    }, [])

    const updateToken= (newToken) => {
      localStorage.setItem('token', newToken);
      setSessionToken(newToken);
      console.log(sessionToken);
    }

    const protectedViews= () => {
      return (sessionToken === localStorage.getItem('token') ? <VerifiedUserView username= {username} />
      :  <Auth updateToken={updateToken} setUsername={setUsername}  username= {username} password={password} setPassword={setPassword}/> )

    }

    const clearToken = () => {
      localStorage.clear();
      setSessionToken('');
    }
    ///////////////////////////////////////////////////////

    //S`
    // const classes = useStyles();`  
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
  
  return (


    <ThemeProvider theme={theme}>

    {button === 'one' ? <Auth /> :  <UpdateProfileModal />}
   
    <Sitebar sessionToken= {sessionToken}  clickLogout= {clearToken}/>
    {protectedViews()}
  
    </ThemeProvider>
  );
}

export default App;

//comment