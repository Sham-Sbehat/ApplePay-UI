import { Box, Stack, Typography, useTheme } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import type { PaymentItemProps } from "../../types/payment";
import type { ReactNode } from "react";

interface PaymentItemProps {
  title: string;
  subtitle1: string;
  subtitle2?: string;
  subtitle3?: string;
  price?: string;
  icon: string | ReactNode;
  mode: "light" | "dark";
  isSummaryItem?: boolean;
}

const PaymentItem: React.FC<PaymentItemProps> = ({
  title,
  subtitle1,
  subtitle2,
  subtitle3,
  price,
  icon,
  mode = "light",
  isSummaryItem = false,
}) => {
  const theme = useTheme();
  const currentMode = mode;

  const styles = {
    bg: currentMode === "dark" ? theme.palette.secondary.dark : "#fff",
    text: currentMode === "dark" ? "#fff" : "#000",
    subtitle: currentMode === "dark" ? "#ccc" : "#555",
    iconColor: currentMode === "dark" ? "#fff" : "#000",
    cardIconBg: currentMode === "dark" ? theme.palette.primary.dark : theme.palette.secondary.light,
  };

  const textDecoration = currentMode === "dark" && !isSummaryItem ? "underline" : "none";

  return (
    <Box
      sx={{
        bgcolor: styles.bg,
        color: styles.text,
        borderRadius: 4,
        p: 2,
        m: 2,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={3}
      >
        <Stack direction="row" alignItems="flex-start" spacing={2}>
          {icon && (
            <Box display="flex" alignItems="center">
              {typeof icon === "string" ? (
                <img
                  src={icon}
                  alt={title}
                  style={{ width: 40, height: 25 }}
                />
              ) : (
                <Box
                  sx={{
                    backgroundColor: styles.cardIconBg,
                    color: styles.iconColor,
                    borderRadius: "10px",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                  }}
                >
                  {icon}
                </Box>
              )}
            </Box>
          )}

          <Box>
            {typeof icon === "string" ? (
              <>
                <Typography
                  variant="body1"
                  sx={{
                    color: styles.text,
                    textDecoration,
                  }}
                >
                  {title}
                </Typography>
                <Stack direction="column" spacing={0.5}>
                  {subtitle1 && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: styles.subtitle,
                        textDecoration,
                      }}
                    >
                      {subtitle1}
                    </Typography>
                  )}
                  {subtitle2 && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: styles.subtitle,
                        textDecoration,
                      }}
                    >
                      {subtitle2}
                    </Typography>
                  )}
                  {subtitle3 && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: styles.subtitle,
                        textDecoration,
                      }}
                    >
                      {subtitle3}
                    </Typography>
                  )}
                </Stack>
              </>
            ) : (
              <>
                <Typography
                  variant="body2"
                  sx={{
                    color: styles.subtitle,
                    textDecoration,
                  }}
                >
                  {title}
                </Typography>
                <Stack direction="column" spacing={0.5}>
                  {subtitle1 && (
                    <Typography
                      variant="body1"
                      sx={{
                        color: styles.text,
                        textDecoration,
                      }}
                    >
                      {subtitle1}
                    </Typography>
                  )}
                  {subtitle2 && (
                    <Typography
                      variant="body1"
                      sx={{
                        color: styles.text,
                        textDecoration,
                      }}
                    >
                      {subtitle2}
                    </Typography>
                  )}
                  {subtitle3 && (
                    <Typography
                      variant="body1"
                      sx={{
                        color: styles.text,
                        textDecoration,
                      }}
                    >
                      {subtitle3}
                    </Typography>
                  )}
                </Stack>
              </>
            )}
          </Box>
        </Stack>

        <Stack direction="row" spacing={0.5} alignItems="center">
          {price && (
            <Typography
              variant="body2"
              sx={{
                color: styles.subtitle,
                textDecoration,
              }}
            >
              {price}
            </Typography>
          )}
          <ArrowForwardIosIcon
            sx={{ fontSize: "14px", color: styles.subtitle }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default PaymentItem; 