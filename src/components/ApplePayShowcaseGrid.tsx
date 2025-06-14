import { Box, Typography } from "@mui/material";
import ApplePayColumn from "./ApplePayColumn";

const columns = [
  { label: "Light / FaceID", mode: "light", face: true, height: 844 },
  { label: "Light / TouchID", mode: "light", face: false, height: 812 },
  { label: "Dark / FaceID", mode: "dark", face: true, height: 844 },
  { label: "Dark / TouchID", mode: "dark", face: false, height: 812 },
];

const ApplePayShowcaseGrid = () => (
  <>
    <Typography variant="h6" fontWeight={600} fontSize={18} mt={6} mb={2}>
      ApplePay
    </Typography>
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" gap={4} mb={2}>
        {columns.map((col) => (
          <Typography
            key={col.label}
            fontSize={14}
            color="#000000"
            fontWeight={400}
            lineHeight={24}
            mb={1.5}
            textAlign="center"
            sx={{ letterSpacing: 0.38, width: 127, height: 24 }}
          >
            {col.label}
          </Typography>
        ))}
      </Box>
      <Box
        display="flex"
        gap={4}
        justifyContent="center"
        alignItems="flex-start"
        border="2px dashed #7b61ff"
        p={3}
      >
        {columns.map((col) => (
          <ApplePayColumn
            key={col.label}
            mode={col.mode as "light" | "dark"}
            face={col.face}
            height={col.height}
            instructionHeight={360}
          />
        ))}
      </Box>
    </Box>
  </>
);

export default ApplePayShowcaseGrid;
