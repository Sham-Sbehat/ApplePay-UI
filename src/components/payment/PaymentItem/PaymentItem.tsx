import { Stack, useTheme } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import type { ReactNode } from "react";
import {
  PaymentItemContainer,
  IconWrapper,
  StyledTitle,
  StyledSubtitle,
  ArrowWrapper,
} from "./PaymentItem.styles";

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
  icon,
  mode = "light",

}) => {
  const theme = useTheme();

  const styles = {
    text: mode === "dark" ? "#fff" : "#000",
    subtitle: mode === "dark" ? "#ccc" : "#555",
    iconColor: mode === "dark" ? "#fff" : "#000",
    cardIconBg: mode === "dark" ? theme.palette.primary.dark : theme.palette.secondary.light,
  };

  

  return (
    <PaymentItemContainer mode={mode}>
      <Stack direction="row" alignItems="center" spacing={2} sx={{ flex: 1 }}>
        {icon && (
          <Box display="flex" alignItems="center">
            {typeof icon === "string" ? (
              <img src={icon} alt={title} style={{ width: 40, height: 25 }} />
            ) : (
              <IconWrapper bg={styles.cardIconBg} color={styles.iconColor}>
                {icon}
              </IconWrapper>
            )}
          </Box>
        )}

        <Box>
          {typeof icon === "string" ? (
            <>
              <StyledTitle colorValue={styles.text} style={{fontSize:'15px'}} >
                {title}
              </StyledTitle>
              <Stack direction="column">
                {subtitle1 && (
                  <StyledSubtitle colorValue={styles.subtitle}  style={{fontSize:'13px'}}>
                    {subtitle1}
                  </StyledSubtitle>
                )}
                {subtitle2 && (
                  <StyledSubtitle colorValue={styles.subtitle} style={{fontSize:'13px'}}>
                    {subtitle2}
                  </StyledSubtitle>
                )}
                {subtitle3 && (
                  <StyledSubtitle colorValue={styles.subtitle} style={{fontSize:'13px'}}>
                    {subtitle3}
                  </StyledSubtitle>
                )}
              </Stack>
            </>
          ) : (
            <>
              <StyledSubtitle colorValue={styles.subtitle} style={{fontSize:'15px'}}>
                {title}
              </StyledSubtitle>
              <Stack direction="column" spacing={0.5}>
                {subtitle1 && (
                  <StyledTitle colorValue={styles.text} style={{fontSize:'13px'}} >
                    {subtitle1}
                  </StyledTitle>
                )}
                {subtitle2 && (
                  <StyledTitle colorValue={styles.text} style={{fontSize:'13px'}}>
                    {subtitle2}
                  </StyledTitle>
                )}
                {subtitle3 && (
                  <StyledTitle colorValue={styles.text}style={{fontSize:'13px'}} >
                    {subtitle3}
                  </StyledTitle>
                )}
              </Stack>
            </>
          )}
        </Box>
      </Stack>
      <ArrowWrapper>
        <ArrowForwardIosIcon sx={{ fontSize: 15, color: styles.subtitle }} />
      </ArrowWrapper>
    </PaymentItemContainer>
  );
};

export default PaymentItem;
