import { Box, Stack, Typography, useTheme, IconButton } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import CloseIcon from "@mui/icons-material/Close";
import type { PaymentCardProps, ThemeStyles } from "../../types/payment";

const PaymentSummarySection: React.FC<PaymentCardProps> = ({ mode, children }) => {
  const theme = useTheme();
  const currentMode = mode || theme.palette.mode;

  const isDark = currentMode === "dark";

  const styles: ThemeStyles =
    isDark
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
    <Box
      sx={{
        background: styles.bg,
        p: 2,
        m: 2,
        borderRadius: "20px 20px 0 0",
        position: "relative",
        color: styles.text,
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <AppleIcon
            sx={{
              color: styles.iconColor,
              width: 24,
              height: 24,
            }}
          />
          <Typography color={styles.iconColor} fontSize={24}>
            Pay
          </Typography>
        </Stack>
        {isDark && (
          <IconButton size="small" sx={{ color: styles.iconColor }}>
            <CloseIcon />
          </IconButton>
        )}
      </Stack>
      <Stack direction="column" spacing={1}>
        {children}
      </Stack>
    </Box>
  );
};

export default PaymentSummarySection; 