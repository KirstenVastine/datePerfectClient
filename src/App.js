import React, {useEffect, useState} from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../src/Theme';
import Sitebar from '../src/Components/Sitebar/Sitebar';
import '../src/App.css';
import VerifiedUserView from './Components/VerifiedUserView/VerifiedUserView';
import Auth from './Components/Auth/Auth';

import Footer from './Components/Footer/Footer'
import DeleteAccount from './Components/Sitebar/DeleteAccount';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';

function App() {
  const [sessionToken, setSessionToken] = useState('');
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');

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
    return (
      sessionToken === localStorage.getItem('token') 
      ? <VerifiedUserView username= {username} />
      : <Auth updateToken={updateToken} 
          setUsername={setUsername}  
          username= {username} 
          password={password} 
          setPassword={setPassword}/> 
    );
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Sitebar sessionToken= {sessionToken}  clickLogout= {clearToken}/>
      {protectedViews()}
    </ThemeProvider>
  );
}

export default App;

//comment