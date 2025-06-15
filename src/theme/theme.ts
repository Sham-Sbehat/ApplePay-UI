import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      dark: "#1C1C1E",
      light: "rgba(255, 255, 255, 1)",
    },
    secondary: {
      main: "#dc004e",
      dark: "#2C2C2E",
      light: "rgba(235, 235, 235, 1)",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F9F9F9",
    },
    text: {
      primary: "#000000",
      secondary: "#3C3C43",
    },
  },
  typography: {
    caption: {
      fontFamily: '"SF Mono", monospace',
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "0.38px",
      textDecoration: "underline",
      textDecorationStyle: "solid",
    },
    h6: {
      fontWeight: 600,
      fontSize: "17px",
      lineHeight: "22px",
    },
    body1: {
      fontSize: "17px",
      lineHeight: "22px",
    },
    body2: {
      fontSize: "15px",
      lineHeight: "20px",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
