import { createTheme } from '@mui/material/styles';

const customBreakpoints = {
  mobile: 0,
  tablet: 640,
  laptop: 1024,
  desktop: 1070,
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
    background: {
      default: '#dadada',
      paper: '#ffffff',
      test: `#e52f2f`,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      ...customBreakpoints,
    },
  },
});

export { theme, customBreakpoints };
