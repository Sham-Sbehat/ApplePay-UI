import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import type { PaymentMethodProps, ThemeStyles } from "../../types/payment";

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  mode,
  icon,
  text,
  showDivider = false,
}) => {
  const theme = useTheme();
  const currentMode = mode || theme.palette.mode;

  const styles: ThemeStyles =
    currentMode === "dark"
      ? {
          bg: theme.palette.primary.dark,
          text: "#fff",
          subtitle: "#ccc",
        }
      : {
          bg: theme.palette.secondary.light,
          text: theme.palette.primary.dark,
          subtitle: "#555",
        };

  return (
    <Box bgcolor={styles.bg} m={2}>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        {typeof icon === "string" ? (
          <img src={icon} alt={text} style={{ width: 32, height: 32 }} />
        ) : (
          <Box
            sx={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>
        )}
        <Typography color={styles.text}>{text}</Typography>
        {showDivider && (
          <Divider
            sx={{
              background: styles.text,
              width: 150,
              height: 4,
              borderRadius: 10,
              marginTop: 20,
            }}
          />
        )}
      </Stack>
    </Box>
  );
};

export default PaymentMethod; 