import { ThemeProvider, CssBaseline } from "@mui/material";
import theme  from "./theme/theme";
import PaymentLayout from "./components/payment/PaymentLayout/PaymentLayout";
import SectionTitle from "./components/Section/SectionTitle"
import Header from "./components/Header/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
       <SectionTitle title="Atoms" />
      <PaymentLayout />
       <SectionTitle title="Templates" />
    </ThemeProvider>
  );
}

export default App;
