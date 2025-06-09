import {Stack, Box, Typography, Link, IconButton, Divider } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import { styled } from '@mui/material/styles';


const HeaderIcon = styled(PaymentIcon)(({ theme }) => ({
  fontSize: '1.5rem',
  marginRight: '8px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.light, 
  border: `2px solid ${theme.palette.secondary.light}`, 
  padding: '4px',
}));


const Header: React.FC = () => {

  return (
        <>
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Box sx={{ 
            display: 'flex', 
            alignItems: 'center' 
        }}
        >
        <IconButton 
            edge="start" 
            size="small" 
            sx={{ mr: 1 }}
            >
          <HeaderIcon fontSize="small" />
        </IconButton>
        <Typography variant="h4" fontWeight={900}>
          Apple Pay
        </Typography>
      </Box>
      <Link 
        href="https://developer.apple.com/design/human-interface-guidelines/apple-pay/overview/"
        target="_blank"
        rel="noopener"
        underline="always"
        variant="caption"
        sx={(theme) => ({
            color: theme.palette.primary.dark,
            textDecorationColor: theme.palette.primary.dark,
        })}
      >
        Human Interface Guidelines:Apple Pay
      </Link>
    </Stack>
    <Divider sx={{ my: 4}}/>
        </>

  );
}   
export default Header;
