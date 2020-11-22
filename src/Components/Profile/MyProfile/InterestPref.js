//This is the verified user's Profile Create page.
//Here they can set date gender preferences.
//User's name will auto fill.

//ADDRESS FORM
import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { getThemeProps } from '@material-ui/styles';
//Below is for the radio buttons;
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


function InterestPref (props) {


  const {interestPref, setInterestPref} = props;

  const handleChange = (event) => {
    setInterestPref(event.target.value)
  };

    return (
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            {/* Shipping address */}
            Contact Info
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                value={props.firstName}
                onChange={(e) => props.setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
                value={props.lastName}
                onChange={(e) => props.setLastName(e.target.value)}
              />
              </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="Email"
                name="Email"
                label="Email"
                fullWidth
                autoComplete="Email"
                value={props.email}
                onChange={(e) => props.setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
          <TextField
            required
            id="City, State"
            name="City, State"
            label="City, State"
            fullWidth
            autoComplete="City, State"
            value={props.location}
            onChange={(e) => props.setLocation(e.target.value)}
          />
        </Grid>
            <Grid item xs={12}>
          <br />
          <br />
        <Typography variant="h6" gutterBottom>
          Favorite Type of Date Night
      </Typography>
      </Grid>

  
    
      <FormControl component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <RadioGroup aria-label="dateNight" name="dateNight" value={interestPref} onChange={handleChange}>
        <FormControlLabel value="Quirky and Fun" control={<Radio />} label="Quirky and Fun" />
        <FormControlLabel value="Outdoorsy and Adventurous" control={<Radio />} label="Outdoorsy and Adventurous" />
        <FormControlLabel value="Romantic and Thoughtful" control={<Radio />} label="Romantic and Thoughtful" />
        {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
      </RadioGroup>
    </FormControl>

        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Quirky and Fun"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Outdoorsy and Adventurous"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Romantic and Thoughtful"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}


    // return (
    //   <div className="mainDiv">
    //     <div className="titleDiv">
    //       <i class="far fa-heart heart"></i>
    //       <InterestPref fetchInterests={fetchInterests} token={props.token} />
    //       <br></br>
    //       <h1 className="Profile">Create Profile</h1>
    //       <h5 className="ProSub">Taking the Guesswork out of Love</h5>
    //     </div>
    //     <div className="buttonDiv">
    //       <Chip
    //         size="large"
    //         color="secondary"
    //         label="Sign Up"
    //         onClick={handleClick}
    //       />
    //       <br></br>
    //       <Chip
    //         size="large"
    //         color="secondary"
    //         label="Login"
    //         onClick={handleClick}
    //       />
    //     </div>
    //   </div>
    // );
// }

export default InterestPref;