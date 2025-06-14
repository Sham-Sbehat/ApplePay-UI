import { Box, Typography } from "@mui/material";
import ApplePaySummaryCard from "./ApplePaySummaryCard/ApplePaySummaryCard";
import PaymentItem from "./PaymentItem/PaymentItem";
import ApplePayCard from "./Cards/ApplePayCard";
import { Person, Home } from "@mui/icons-material";


import type {ApplePayColumnProps} from '../types/cards'
const ApplePayColumn = ({
  mode,
  face,
  height = 844,
  instructionHeight = 360,
}: ApplePayColumnProps) => (
  <div style={{ position: "relative" }}>
    <Box
      height={height}
      bgcolor="#F2F2F7"
      overflow="hidden"
      fontFamily="SF Pro Display, Arial, sans-serif"
      p={0}
      mb={2}
    >
      <Box
        height={instructionHeight}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="#000000BF"
        width={"100%"}
      >
        <Typography
          fontSize={20}
          color="#fff"
          textAlign="right"
          sx={{ ml: "auto" }}
          width="111"
          height="48"
          lineHeight="24"
        >
          {face ? "Double Click to Pay" : ""}
        </Typography>
      </Box>

      <ApplePaySummaryCard mode={mode}>
        <PaymentItem
          title="Apple Card"
          subtitle1="10880 Malibu Point Malibu Cal..."
          subtitle2="•••• 1234"
          icon="/AppleCard.png"
          mode={mode}
        />
        <PaymentItem
          title="Contact"
          subtitle1="astark@starkindustries.com"
          subtitle2="(123) 456-7890"
          icon={<Person />}
          mode={mode}
        />

        <PaymentItem
          title="Shipping"
          subtitle1="Anthony Stark"
          subtitle2="10880 Malibu Point"
          subtitle3="Malibu CA 90263"
          icon={<Home />}
          mode={mode}
        />
      </ApplePaySummaryCard>

      <ApplePayCard mode={mode} face={face} />
    </Box>
  </div>
);

export default ApplePayColumn;
