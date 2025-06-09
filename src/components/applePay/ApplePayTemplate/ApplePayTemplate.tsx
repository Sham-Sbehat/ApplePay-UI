import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import DetailCard from '../DetailCard/DetailCard';
import SummarySheet from '../SummarySheet/SummarySheet';
import PaymentDetails from '../PaymentDetails/PaymentDetails';

const Container = styled(Box)(({ theme }) => ({
  maxWidth: 390,
  margin: '0 auto',
  backgroundColor: '#f5f5f7',
  padding: theme.spacing(2),
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const ApplePayTemplate = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 1,
          color: '#000',
        }}
      >
        Apple Pay
      </Typography>

      <DetailCard />
      <SummarySheet />
      <PaymentDetails />
    </Container>
  );
};

export default ApplePayTemplate;
