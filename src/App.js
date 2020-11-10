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



// import React from 'react';
// import Button from '@material-ui/core/Button';

// function App() {
//   return(
//     <div className="App">
//       Hello
//       <Button variant="contained">Click Me</Button>
//     </div>
//   );
// }



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
