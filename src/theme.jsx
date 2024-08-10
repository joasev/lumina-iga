import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009955',
      light: '#22B06A',
      superlight: '#0099551A',
      hover: '#00884A',
    },
    secondary: {
      main: '#1B1B1B',
    },
    background: {
      default: '#121212',
      paper: '#1B1B1B',
      container: '#242424',
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#A0A0A0',
    },
  },
});

export default theme;
