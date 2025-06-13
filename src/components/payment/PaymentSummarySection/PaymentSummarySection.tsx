import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import type { PaymentCardProps, ThemeStyles } from "../../../types/payment";

import {
  Container,
  Header,
  LeftStack,
  PayText,
  ChildrenStack,
} from "./PaymentSummarySection.styles";

const PaymentSummarySection: React.FC<PaymentCardProps> = ({ mode, children }) => {
  const theme = useTheme();
  const currentMode = mode || theme.palette.mode;

  const isDark = currentMode === "dark";

  const styles: ThemeStyles = isDark
    ? {
        bg: "linear-gradient(135deg, #232526 0%, #1a1a1a 100%)",
        iconColor: "#fff",
        text: "#fff",
        subtitle: "#ccc",
      }
    : {
        bg: theme.palette.secondary.light,
        iconColor: theme.palette.primary.dark,
        text: theme.palette.primary.dark,
        subtitle: "#555",
      };

  return (
    <Container bg={styles.bg} textColor={styles.text}>
      <Header>
        <LeftStack>
          <AppleIcon
            style={{ color: styles.iconColor, width: 24, height: 24 }}
          />
          <PayText color={styles.iconColor ?? "#000"}>Pay</PayText>
        </LeftStack>
        {isDark && (
          <IconButton size="small" sx={{ color: styles.iconColor }}>
            <CloseIcon />
          </IconButton>
        )}
      </Header>
      <ChildrenStack>{children}</ChildrenStack>
    </Container>
  );
};

export default PaymentSummarySection;
