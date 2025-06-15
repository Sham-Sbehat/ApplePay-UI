import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import PaymentLayout from "./components/PaymentLayout/PaymentLayout";
import SectionTitle from "./components/Section/SectionTitle";
import Header from "./components/Header/Header";
import ApplePayShowcaseGrid from "./components/ApplePayShowcaseGrid";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <SectionTitle title="Atoms" />
      <PaymentLayout />
      <SectionTitle title="Templates" />
      <ApplePayShowcaseGrid />
    </ThemeProvider>
  );
}

export default App;
