import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#8a0015', 
    },
    secondary: {
      main: '#b32b3a',
    },
    background: {
      default: '#f7f2ec', 
      paper: '#ffffff',  
    },
    text: {
      primary: '#332d27', 
      secondary: '#332d27',
    },
  },
});

export default theme