import { ThemeProvider, CssBaseline } from "@mui/material";
import theme  from "./theme/theme";
import PaymentLayout from "./components/payment/PaymentLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PaymentLayout />
    </ThemeProvider>
  );
}

export default App;
