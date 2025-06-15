import { Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  StyledCard,
  StyledAppleIcon,
  StyledTypography,
  StyledIconButton,
} from "./ApplePaySummaryCard.styles";

import type {ApplePaySummaryCardProps} from '../../types/cards'

const ApplePaySummaryCard: React.FC<ApplePaySummaryCardProps> = ({
  children,
  mode = "light",
}) => (
  <StyledCard mode={mode}>
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      mb={1}
    >
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <StyledAppleIcon mode={mode} />
        <StyledTypography mode={mode}>Pay</StyledTypography>
      </Stack>
      <StyledIconButton size="small" mode={mode}>
        <CloseIcon />
      </StyledIconButton>
    </Stack>
    <Stack direction="column" spacing={1}>
      {children}
    </Stack>
  </StyledCard>
);

export default ApplePaySummaryCard;
