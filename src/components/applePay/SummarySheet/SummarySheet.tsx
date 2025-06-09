import { Typography } from '@mui/material';
import { SheetContainer, ItemRow, ItemImage, ItemDetails, ItemTitle, ItemPrice } from './styles';

const SummarySheet = () => {
  return (
    <SheetContainer>
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        Items
      </Typography>

      <ItemRow>
        <ItemImage src="https://via.placeholder.com/60" alt="Product Image" />
        <ItemDetails>
          <ItemTitle>Wireless Headphones</ItemTitle>
          <Typography variant="body2" color="text.secondary">
            Noise cancelling over-ear headphones
          </Typography>
        </ItemDetails>
        <ItemPrice>$299.00</ItemPrice>
      </ItemRow>
    </SheetContainer>
  );
};

export default SummarySheet;
