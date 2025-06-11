import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#007AFF",
      dark: "#0055B3",
      light: "#4DA3FF",
    },
    secondary: {
      main: "#F5F5F7",
      dark: "#E5E5E7",
      light: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F5F5F7",
        },
      },
    },
  },
}); 