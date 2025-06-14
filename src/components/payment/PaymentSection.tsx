import { Box, Typography, Stack } from "@mui/material";

interface PaymentSectionProps {
  title: string;
  items: {
    content: React.ReactNode;
    caption: string;
  }[];
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ title, items }) => {
  const isSummarySheet = title === "ApplePay-summarySheet";

  return (
    <Box
      sx={{
        border: "2px dashed #007AFF",
        borderRadius: 4,
        p: 2,
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          textDecoration: isSummarySheet ? "none" : "underline",
        }}
      >
        {title}
      </Typography>
      <Stack spacing={2}>
        {items.map((item, index) => (
          <Box key={index}>
            {item.content}
            {item.caption && (
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  mt: 1,
                  color: "text.secondary",
                }}
              >
                {item.caption}
              </Typography>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default PaymentSection; 