import { Stack, Typography, Link, Divider } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import { styled } from "@mui/material/styles";

const HeaderIcon = styled("div")({
  width: "56px",
  height: "56px",
  borderRadius: "40px",
  border: "1px solid #EBEBEB",
  backgroundColor: "#fff",
  position: "relative",
  padding: 0,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const PaymentIconStyled = styled(PaymentIcon)({
  width: "27.73px",
  height: "20.29px",
  color: "#000",
});

const Header: React.FC = () => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" spacing={2}>
          <HeaderIcon>
            <PaymentIconStyled />
          </HeaderIcon>
          <Typography
            variant="h4"
            fontWeight={900}
            fontSize="40px"
            letterSpacing={0}
            lineHeight="100%"
          >
            Apple Pay
          </Typography>
        </Stack>
        <Link
          href="https://developer.apple.com/design/human-interface-guidelines/apple-pay/overview/"
          target="_blank"
          rel="noopener"
          underline="always"
          variant="caption"
          sx={{
            color: "#000",
            fontFamily: "SF Mono, monospace",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "24px",
            letterSpacing: "0.38px",
            textDecoration: "underline",
            width: "334px",
            height: "24px",
            display: "inline-block",
            verticalAlign: "middle",
          }}
        >
          Human Interface Guidelines: Apple Pay
        </Link>
      </Stack>
      <Divider sx={{ my: 4 }} />
    </>
  );
};
export default Header;
