import { Typography} from '@mui/material';
import { CardContainer, Row, Label, Value } from './styles';

const PaymentDetails = () => {
  return (
    <CardContainer>
      <Typography variant="subtitle1" fontWeight="bold">
        Payment
      </Typography>

      <Row>
        <Label>Method</Label>
        <Value>Apple Pay •••• 1234</Value>
      </Row>

      <Row>
        <Label>Billing Address</Label>
        <Value>123 Rummana Street, Jenin</Value>
      </Row>
    </CardContainer>
  );
};

export default PaymentDetails;
