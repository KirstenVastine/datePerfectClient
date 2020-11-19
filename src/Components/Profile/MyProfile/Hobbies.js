// Need space to list out three hobbies the individual likes.


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Paper from '@material-ui/core/Paper';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
// import InterestPref from './InterestPref';
// import Cuisine from './Cuisine';
// // import Activity from './Activity';


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

// const steps = ['Shipping address', 'Payment details', 'Review your order'];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <InterestPref />;
//     case 1:
//       return <Cuisine />;
//     case 2:
//       return <Activity />;
//     // case 3:
//     //   return <Hobbies/>;
//     default:
//       throw new Error('Unknown step');
//   }
// }

// export default function Checkout() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep(activeStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep(activeStep - 1);
//   };

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <AppBar position="absolute" color="default" className={classes.appBar}>
//         <Toolbar>
//           <Typography variant="h6" color="inherit" noWrap>
//             Date Perfect
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <main className={classes.layout}>
//         <Paper className={classes.paper}>
//           <Typography component="h1" variant="h4" align="center">
//             Checkout
//           </Typography>
//           <Stepper activeStep={activeStep} className={classes.stepper}>
//             {steps.map((label) => (
//               <Step key={label}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//           <React.Fragment>
//             {activeStep === steps.length ? (
//               <React.Fragment>
//                 <Typography variant="h5" gutterBottom>
//                   {/* Thank you for your order. */}
//                   Enjoy your next date!!!
//                 </Typography>
//                 <Typography variant="subtitle1">
//                   {/* Your order number is #2001539. We have emailed your order confirmation, and will
//                   send you an update when your order has shipped. */}
//                   <br />
//                   Your profile is now complete
//                 </Typography>
//               </React.Fragment>
//             ) : (
//               <React.Fragment>
//                 {getStepContent(activeStep)}
//                 <div className={classes.buttons}>
//                   {activeStep !== 0 && (
//                     <Button onClick={handleBack} className={classes.button}>
//                       Back
//                     </Button>
//                   )}
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={handleNext}
//                     className={classes.button}
//                   >
//                     {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
//                   </Button>
//                 </div>
//               </React.Fragment>
//             )}
//           </React.Fragment>
//         </Paper>
//         <Copyright />
//       </main>
//     </React.Fragment>
//   );
// }


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import UploadPhoto from '../UploadPhoto';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Hobbies() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
    <div>
      <UploadPhoto />
    <Typography variant="h6" gutterBottom>
         Share a little about yourself and why you are here.
       </Typography>
      </div>
    <div>
    <Typography variant="h6" gutterBottom>
        List out three hobbies:
      </Typography>
    </div>
    <div>
      <TextField
        label=""
        id="outlined-size-small"
        defaultValue="Hobby 1"
        variant="outlined"
        size="small"
      />
      <br />
      <br />
      <TextField
        label=""
        id="outlined-size-small"
        defaultValue="Hobby 2"
        variant="outlined"
        size="small"
      />
      <br />
      <br />
      <TextField
        label=""
        id="outlined-size-small"
        defaultValue="Hobby 3"
        variant="outlined"
        size="small"
      />
      {/* <TextField
        label="Size"
        id="outlined-size-normal"
        defaultValue="Normal"
        variant="outlined"
      /> */}
    </div>
   </form>
  );
}

