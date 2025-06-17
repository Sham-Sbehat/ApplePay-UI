import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import PaymentLayout from "./components/PaymentLayout/PaymentLayout";
import SectionTitle from "./components/Section/SectionTitle";
import Header from "./components/Header/Header";
import ApplePayShowcaseGrid from "./components/ApplePayShowcaseGrid";
import Chart from './components/Chart/LineChartLC';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <SectionTitle title="Atoms" />
      <PaymentLayout />
      <SectionTitle title="Templates" />
      <ApplePayShowcaseGrid />
      <Chart />
    </ThemeProvider>
  );
}

export default App;
