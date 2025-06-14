import { Box, Stack, Typography, IconButton } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import CloseIcon from "@mui/icons-material/Close";
import type { ReactNode } from "react";

interface ApplePaySummaryCardProps {
  children: ReactNode;
  mode?: "light" | "dark";
}

const ApplePaySummaryCard: React.FC<ApplePaySummaryCardProps> = ({ children, mode = "light" }) => (
  <Box
    sx={{
      background:
        mode === "dark"
          ? "linear-gradient(135deg, #232526 0%, #1a1a1a 100%)"
          : "#F5F5F7",
      borderRadius: "20px 20px 0 0",
      color: mode === "dark" ? "#fff" : "#000",
      p: 2,
      position: "relative",
      minWidth: 320,
      boxShadow: mode === "light" ? 2 : undefined,
    }}
  >
    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <AppleIcon sx={{ color: mode === "dark" ? "#fff" : "#000", width: 24, height: 24 }} />
        <Typography color={mode === "dark" ? "#fff" : "#000"} fontSize={24}>
          Pay
        </Typography>
      </Stack>
      <IconButton size="small" sx={{ color: mode === "dark" ? "#fff" : "#000" }}>
        <CloseIcon />
      </IconButton>
    </Stack>
    <Stack direction="column" spacing={1}>
      {children}
    </Stack>
  </Box>
);

export default ApplePaySummaryCard; 