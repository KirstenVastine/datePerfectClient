//Here is where the individual can select what type of foods they do not like.
//Thereby showing where not to take your date.

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';




export default function Cuisine (props) {
 
const {cuisine, setCuisine} = props;


  const handleChange = (event) => {
    setCuisine(event.target.value);
    console.log(event.target.value);
  };


  return (

    <FormControl component="fieldset">
    <Typography variant="h6" gutterBottom>
    Favorite Food
    </Typography>
    <FormLabel component="legend"></FormLabel>
    <RadioGroup aria-label="gender" name="gender1" value={cuisine} onChange={handleChange}>
      <FormControlLabel value="steakhouse" control={<Radio />} label="Steak/ Seafood" />
      <FormControlLabel value="barFood" control={<Radio />} label="Bar Food" />
      <FormControlLabel value="mexican" control={<Radio />} label="Mexican" />
      <FormControlLabel value="italian" control={<Radio />} label="Italian" />
      <FormControlLabel value="chinese" control={<Radio />} label="Chinese" />
      <FormControlLabel value="mediterranean" control={<Radio />} label="Mediterranean" />
      <FormControlLabel value="indian" control={<Radio />} label="Indian" />
      {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
    </RadioGroup>
  </FormControl>

  )
};



//DO NOT DELETE 
////Below is the logic to allow multiple options using Checkboxes from Material UI.
//Will need to build the logic that takes the selected checkboxes and turn them into a string to store in the database.
  // const classes = useStyles();
  // const [state, setState] = React.useState({
  //   steakhouse: true,
  //   barFood: false,
  //   mexican: false,
  //   italian: false,
  //   chinese: false,
  //   mediterranean: false,
  //   indian: true,
  // });

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  // const { steakhouse, barFood, mexican, italian, chinese, mediterranean, indian } = state;
  // const error = [ steakhouse, barFood, mexican, italian, chinese, mediterranean, indian ].filter((v) => v).length !== 2;

    // return (
        // <React.Fragment>
        // {/* <p>Is there any type of cuisine you do NOT like?
        //   </p> */}
        //    <Typography variant="h6" gutterBottom>
        //    {/* Is there any type of cuisine you do NOT like? */}
        //    What are your favorite types of cuisine?
        //  </Typography>
        //   <Grid item xs={12}>
        //     <FormControlLabel
        //       control={<Checkbox color="secondary" name="saveAddress" value="Steakhouse" />}
        //       label="Steak/ Seafood"
        //     />
        //   </Grid>
        //   <Grid item xs={12}>
        //     <FormControlLabel
        //       control={<Checkbox color="secondary" name="saveAddress" value="barFood" />}
        //       label="Bar Food"
        //     />
        //   </Grid>
        //   <Grid item xs={12}>
        //     <FormControlLabel
        //       control={<Checkbox color="secondary" name="saveAddress" value="Mexican" />}
        //       label="Mexican"
        //     />
        //   </Grid>
        //   <Grid item xs={12}>
        //     <FormControlLabel
        //       control={<Checkbox color="secondary" name="saveAddress" value="Italian" />}
        //       label="Italian"
        //     />
        //   </Grid>
        //   <Grid item xs={12}>
        //     <FormControlLabel
        //       control={<Checkbox color="secondary" name="saveAddress" value="Chinese" />}
        //       label="Chinese"
        //     />
        //   </Grid>
        //   <Grid item xs={12}>
        //     <FormControlLabel
        //       control={<Checkbox color="secondary" name="saveAddress" value="Mediterranean" />}
        //       label="Mediterranean"
        //     />
        //   </Grid>
        //   <Grid item xs={12}>
        //     <FormControlLabel
        //       control={<Checkbox color="secondary" name="saveAddress" value="Indian" />}
        //       label="Indian"
        //     /> 
        //   </Grid>
        //   </React.Fragment>
//   );
// }
  
//     )
// }

// export default Cuisine;