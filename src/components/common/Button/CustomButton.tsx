// src/components/common/Button/CustomButton.tsx
import React from 'react';
import { StyledButton } from './styles';

type CustomButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default CustomButton;
