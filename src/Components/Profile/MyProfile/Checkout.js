import React, {useState} from 'react';
// import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import InterestPref from './InterestPref';
import Cuisine from './Cuisine';
import Hobbies from './Hobbies';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// //First page variables
// const [firstName, setFirstName] = useState ('')
// const [lastName, setLastName] = useState ('')
// const [quirky, setQuirky] = useState ('')
// const [adventurous, setAdventurous] = useState ('')
// const [romantic, setRomantic] = useState ('')

// //Second page variables for cuisine options
// const [steakhouse, setSteakhouse] = useState ('')
// const [barFood, setBarFood] = useState ('')
// const [mexican, setMexican] = useState ('')
// const [italian, setItalian] = useState ('')
// const [chinese, setChinese] = useState ('')
// const [mediterranean, setMediterranean] = useState ('')
// const [indian, setIndian] = useState ('')

// //Third page variables for Hobbies.
// const [hobbyOne, setHobbyOne] = useState ('')
// const [hobbyTwo, setHobbyTwo] = useState ('')
// const [hobbyThree, setHobbyThree] = useState ('')


// const profileData = {
//     firstName: firstName,
//     lastName: lastName,
//     quirky: quirky,
//     adventurous: adventurous,
//     romantic: romantic,
//     steakhouse: steakhouse,
//     barFood: barFood,
//     mexican: mexican,
//     italian: italian,
//     chinese: chinese,
//     mediterranean: mediterranean,
//     indian: indian,
//     hobbyOne: hobbyOne,
//     hobbyTwo: hobbyTwo,
//     hobbyThree: hobbyThree
// }

// const handleFirstPageSubmit = (e) => {
//     e.preventDefault();
//     fetch(`http://localhost:4000/profile/`, {
//         method: "POST",
//         body: JSON.stringify({firstName: firstName, lastName: lastName, quirky: quirky, adventurous: adventurous, romantic: romantic, steakhouse: steakhouse, barFood: barFood, mexican: mexican, italian: italian, chinese: chinese, mediterranean: mediterranean, indian: indian, hobbyOne: hobbyOne, hobbyTwo: hobbyTwo, hobbyThree: hobbyThree}),
//         headers: new Headers({
//             'Content-Type': 'application/json',
//             'Authorization': props.token
//         })
//     }) .then((res) => console.log(res))
//     .then((firstPageData) => {
//         console.log(firstPageData);
//         setFirstName('');
//         setLastName('');
//         setQuirky('');
//         setAdventurous('');
//         setRomantic('');
//         setSteakhouse('');
//         setBarFood('');
//         setMexican('');
//         setItalian('');
//         setChinese('');
//         setMediterranean('');
//         setIndian('');
//         setHobbyOne('');
//         setHobbyTwo('');
//         setHobbyThree('');
//         props.fetchTrails();
//     })
//     .catch(err => console.log(err))
// }



const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Lets make a start', 'Food Preferences', 'Activities'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <InterestPref  />;
    case 1:
      return <Cuisine/>;
    case 2:
      return <Hobbies />;
    // case 3:
    //   return <Checkout />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  //First page variables
const [firstName, setFirstName] = useState ('')
const [lastName, setLastName] = useState ('')
const [quirky, setQuirky] = useState ('')
const [adventurous, setAdventurous] = useState ('')
const [romantic, setRomantic] = useState ('')

//Second page variables for cuisine options
const [steakhouse, setSteakhouse] = useState ('')
const [barFood, setBarFood] = useState ('')
const [mexican, setMexican] = useState ('')
const [italian, setItalian] = useState ('')
const [chinese, setChinese] = useState ('')
const [mediterranean, setMediterranean] = useState ('')
const [indian, setIndian] = useState ('')

//Third page variables for Hobbies.
const [hobbyOne, setHobbyOne] = useState ('')
const [hobbyTwo, setHobbyTwo] = useState ('')
const [hobbyThree, setHobbyThree] = useState ('')

const profileData = {
    firstName: firstName,
    lastName: lastName,
    quirky: quirky,
    adventurous: adventurous,
    romantic: romantic,
    steakhouse: steakhouse,
    barFood: barFood,
    mexican: mexican,
    italian: italian,
    chinese: chinese,
    mediterranean: mediterranean,
    indian: indian,
    hobbyOne: hobbyOne,
    hobbyTwo: hobbyTwo,
    hobbyThree: hobbyThree
}

const handleFirstPageSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/profile/`, {
        method: "POST",
        body: JSON.stringify({firstName: firstName, lastName: lastName, quirky: quirky, adventurous: adventurous, romantic: romantic, steakhouse: steakhouse, barFood: barFood, mexican: mexican, italian: italian, chinese: chinese, mediterranean: mediterranean, indian: indian, hobbyOne: hobbyOne, hobbyTwo: hobbyTwo, hobbyThree: hobbyThree}),
        headers: new Headers({
            'Content-Type': 'application/json',
            // 'Authorization': props.token
        })
    }) .then((res) => console.log(res))
    .then((firstPageData) => {
        console.log(firstPageData);
        setFirstName('');
        setLastName('');
        setQuirky('');
        setAdventurous('');
        setRomantic('');
        setSteakhouse('');
        setBarFood('');
        setMexican('');
        setItalian('');
        setChinese('');
        setMediterranean('');
        setIndian('');
        setHobbyOne('');
        setHobbyTwo('');
        setHobbyThree('');
        profileData();
    })
    .catch(err => console.log(err))
}

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

//   const handleSubmit = (e) => {
//       e.preventDefault();
//       fetch('http://localhost:4000/profile/', {
//           method: 'POST',
//           body: JSON.stringify({profile:  {}})
//       })

//   }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Create Profile
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  {/* Thank you for your order. */}
                  Enjoy your next date!!!
                </Typography>
                <Typography variant="subtitle1">
                  <br />
                  {/* Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped. */}
                  Your profile is now complete
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
