import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Upload from '../UploadPhoto'
import { AirlineSeatReclineExtraOutlined } from '@material-ui/icons';


export default function UpdateProfile(props) {
  const {
    openUpdateProfile, handleCloseUpdateProfile,
    profileToUpdate, setSnackBarMsg,
    setSnackBarSeverity,setShowSnackBar, ViewProfile
  } = props;

  const token = localStorage.getItem("token");

  console.log(profileToUpdate);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [interestedIn, setInterestedIn] = useState('');
  const [gender, setGender] = useState('');
  const [dateType, setdateType] = useState('');
  const [cuisine, setCuisine ] = useState('');
  const [bio, setBio] = useState('');
  const [picUrl, setPicUrl] = useState('');
  const [email, setEmail] = useState('');
  const [hobby1, setHobby1] = useState('');
  const [hobby2, setHobby2] = useState('');
  const [hobby3, setHobby3] = useState('');

  React.useEffect(()=>{
    //using the '?' helps prevent react message "cannot read property of undefined which happens when you do a dot on an empty object"
    setFirstName(profileToUpdate?.firstName);
    setLastName(profileToUpdate?.lastName);
    setLocation(profileToUpdate?.location);
    // setInterestedIn(profileToUpdate?.interestedIn);
    // setGender(profileToUpdate?.gender);
    setdateType(profileToUpdate?.dateType);
    setCuisine(profileToUpdate?.cuisine);
    setPicUrl(profileToUpdate?.picUrl);
    setBio(profileToUpdate?.bio);
    setEmail(profileToUpdate?.email);

    //separating the hobbies string from the database into an array to display in hobby1, hobby2, hobby3
    const hobbyList = profileToUpdate?.hobbies?.split(',');
    if(hobbyList){
      setHobby1(hobbyList[0] ?? '');
      setHobby2(hobbyList[1] ?? '');
      setHobby3(hobbyList[2] ?? '');
    }
    
  },[profileToUpdate]);

  const profileEdit = (event) =>{
    event.preventDefault();

    // create a clean list of hobbies
    let hobbiesText = '';

    // create hobbies array so that i can loop through and check each before adding to my clean hobbies list
    const hobbiesArray = [hobby1, hobby2, hobby3];
    for(let hobby of hobbiesArray){
      if(hobby !== ''){
        if(hobbiesText !== '')
          hobbiesText += `, ${hobby}`;
        else
          hobbiesText = hobby;
      }
    }

    let reload = false;

    fetch(`http://localhost:4000/profile/${profileToUpdate.id}`, {
      method: 'PUT',
      body: JSON.stringify(
        {
          profile: {
            firstName:firstName, 
            lastName:lastName, 
            location:location, 
            interestedIn:interestedIn, 
            gender:gender, 
            dateType:dateType, 
            cuisine: cuisine, 
            picUrl:picUrl, 
            bio:bio, 
            hobbies:hobbiesText, 
            email:email  
      }}),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    })
    .then( result => {
      if(result.status=== 200){
        console.log('This was a success');
        setSnackBarMsg('Profile updated successfully!!!');
        setSnackBarSeverity('success');
        reload = true;
      }
      else{
        console.log('This was a failure');
        setSnackBarMsg('Profile update failed!!!');
        setSnackBarSeverity('error');
      }
      handleCloseUpdateProfile(reload);
      ViewProfile();
      setShowSnackBar(true);
      console.log(result);
    })
    .catch(e => console.log(e));
  }

  return (
    <div className="mainDiv">
        <Dialog 
          open={openUpdateProfile} 
          onClose={handleCloseUpdateProfile} 
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Profile Edit
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Edit your profile
            </DialogContentText>
            <Upload sessionToken={token}/>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="firstname"
                  label="First Name"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  fullWidth
                />
              </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="lastname"
                    label="Last Name"
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="location"
                  name="location"
                  label="City, State"
                  fullWidth
                  autoComplete="given-name"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="given-name"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                  <TextField
                    id="filled-multiline-static"
                    name="bio"
                    label="Bio"
                    multiline
                    rows={4}
                    variant="filled"
                    fullWidth
                    value={bio}
                    onChange={e => {setBio(e.target.value)}}
                  />
              </Grid>
            </Grid>
            {/*<Grid container spacing={3}>
               <Grid item xs={12} sm={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="gender"
                  label="Gender"
                  type="text"
                  fullWidth
                  value={gender}
                  onChange={e =>setGender(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="interestedIn"
                  label="Interested In"
                  type="text"
                  fullWidth
                  value={interestedIn}
                  onChange={e =>setInterestedIn(e.target.value)}
                />
              </Grid>
            </Grid> */}
          {/* <Grid container spacing={3}>        */}
          {/* <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={e =>{setGender(e.target.value)}}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl> */}
            {/* </Grid> */}
          {/* <FormControl component="fieldset">
            <FormLabel component="legend">Interested In</FormLabel>
            <RadioGroup aria-label="interestedIn" name="gender1" 
              value={interestedIn} onChange={e =>{setInterestedIn(e.target.value)}}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl> */}
            
            {/* </Grid><Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="cuisine"
                  label="Cuisine"
                  type="name"
                  fullWidth
                  value={cuisine}
                  onChange={e =>setCuisine(e.target.value)}
                />
              </Grid> */}

            <DialogTitle id="form-dialog-title"
              className="hobbiesText" 
              margin="dense">
                Hobbies
            </DialogTitle>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="hobby"
                  name="hobby1hobby2hobby3"
                  label="Hobby 1"
                  fullWidth
                  autoComplete="given-name"
                  value={hobby1}
                  onChange={e =>setHobby1(e.target.value)}
                />
            </Grid>
          
            <Grid item xs={12} sm={4}>
              <TextField 
                id="hobby2"
                name="hobby2"
                label="Hobby 2"
                fullWidth
                autoComplete="family-name"
                value={hobby2}
                onChange={e =>setHobby2(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="hobby3"
                name="hobby3"
                label="Hobby 3"
                fullWidth
                autoComplete="family-name"
                value={hobby3}
                onChange={e =>setHobby3(e.target.value)}
              />
            </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseUpdateProfile} color="primary">
              Cancel
            </Button>
            <Button onClick={e => profileEdit(e)} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  );
}