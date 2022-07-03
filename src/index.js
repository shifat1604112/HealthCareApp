import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

const themeX = createTheme({
  palette: {
    type: "dark",
    grey: {
      800: "#97C4B8", // overrides failed
      900: "#FA58B6" // overrides success
    },
    background: {
      paper: "#92B4EC"
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={themeX}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

