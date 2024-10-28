import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#000000',
    },
    primary: {
      main: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: '##011016',
          fontSize: '12px',
          fontWeight: 400,
        },
      },
    },
  },
});
