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



function InterestPref (props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [favoriteDate, setFavoriteDate] = useState('');

    return (
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            {/* Shipping address */}
            What's your name?
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
              />
            </Grid>
            <Grid item xs={12}>
          <br />
          <br />
        <Typography variant="h6" gutterBottom>
          Favorite type of date night.
      </Typography>
      </Grid>


        <Grid item xs={12}>
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
        </Grid>
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