import styled from 'styled-components';
import { Box, Typography, IconButton } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';

export const StyledCard = styled(Box)<{ mode: 'light' | 'dark' }>`
  background: ${({ mode }) =>
    mode === 'dark'
      ? 'linear-gradient(135deg, #232526 0%, #1a1a1a 100%)'
      : '#F5F5F7'};
  border-radius: 20px 20px 0 0;
  color: ${({ mode }) => (mode === 'dark' ? '#fff' : '#000')};
  padding: 16px;
  position: relative;
  margin-bottom:20px
  height:189px;
  width:343px;
  gap:8px;
`;

export const StyledAppleIcon = styled(AppleIcon)<{ mode: 'light' | 'dark' }>`
  color: ${({ mode }) => (mode === 'dark' ? '#fff' : '#000')};
  width: 18px;
  height: 22px;
`;

export const StyledTypography = styled(Typography)<{ mode: 'light' | 'dark' }>`
  color: ${({ mode }) => (mode === 'dark' ? '#fff' : '#000')};
  font-size: 24px;
`;

export const StyledIconButton = styled(IconButton)<{ mode: 'light' | 'dark' }>`
  color: ${({ mode }) => (mode === 'dark' ? '#fff' : '#000')};
`;
