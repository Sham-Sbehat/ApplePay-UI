import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SheetContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: 12,
  padding: theme.spacing(2),
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
}));

export const ItemRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const ItemImage = styled('img')({
  width: 60,
  height: 60,
  borderRadius: 8,
  objectFit: 'cover',
});

export const ItemDetails = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

export const ItemTitle = styled(Typography)({
  fontSize: 15,
  fontWeight: 500,
  color: '#000',
});

export const ItemPrice = styled(Typography)({
  fontSize: 15,
  fontWeight: 'bold',
  color: '#000',
});
