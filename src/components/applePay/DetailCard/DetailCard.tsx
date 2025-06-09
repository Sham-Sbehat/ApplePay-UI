import { Typography } from '@mui/material';
import { CardContainer, Row, Label, Value } from './styles';

const DetailCard = () => {
  return (
    <CardContainer>
      <Typography variant="subtitle1" fontWeight="bold">
        Contact
      </Typography>
      <Row>
        <Label>Email</Label>
        <Value>sham@example.com</Value>
      </Row>
      <Row>
        <Label>Phone</Label>
        <Value>+970 599 123 456</Value>
      </Row>

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>
        Shipping Address
      </Typography>
      <Row>
        <Label>Address</Label>
        <Value>123 Rummana St, Jenin</Value>
      </Row>
    </CardContainer>
  );
};

export default DetailCard;
