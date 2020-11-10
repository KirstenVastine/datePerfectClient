import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../src/Theme';
import Sitebar from '../src/Components/Sitebar/Sitebar';
import '../src/App.css';
import VerifiedUserView from './Components/VerifiedUserView/VerifiedUserView';
import Auth from './Components/Auth/Auth';

const button = 'one'


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Sitebar/>
    {button === 'one' ? <Auth />:  <VerifiedUserView />}
    </ThemeProvider>
  );
}

export default App;

//comment