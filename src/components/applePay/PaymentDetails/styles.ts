import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: 12,
  padding: theme.spacing(2),
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
}));

export const Row = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 8,
});

export const Label = styled(Typography)({
  fontSize: 14,
  color: '#555',
});

export const Value = styled(Typography)({
  fontSize: 14,
  fontWeight: 500,
  color: '#000',
});
