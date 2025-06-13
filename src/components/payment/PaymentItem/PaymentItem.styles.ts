import styled from "styled-components";
import { Box, Typography } from "@mui/material";

export const PaymentItemContainer = styled(Box)<{ mode: "light" | "dark" }>`
  background-color: ${({ theme, mode }) =>
    mode === "dark" ? theme.palette.secondary.dark : "#fff"};
  color: ${({ mode }) => (mode === "dark" ? "#fff" : "#000")};
  border-radius: 16px;
  padding: 18px;
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const IconWrapper = styled(Box)<{ bg: string; color: string }>`
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  border-radius: 10px;
  padding: 6px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled(Typography)<{ colorValue: string }>`
  color: ${({ colorValue }) => colorValue};
  font-weight: bold;
  font-size:15;
`;

export const StyledSubtitle = styled(Typography)<{ colorValue: string }>`
  color: ${({ colorValue }) => colorValue};
  font-size: 13px;
`;

export const ArrowWrapper = styled(Box)`
  display: flex;
  align-items: center;
`;
