import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Person, Home, Bento } from "@mui/icons-material";

import PaymentSection from "../PaymentSection/PaymentSection";
import PaymentItem from "../PaymentItem/PaymentItem";
import ApplePaySummaryCard from "../ApplePaySummaryCard/ApplePaySummaryCard";

import {
  Container,
  BorderBox,
  CaptionTypography,
  StackRow,
  ApplePayCardBox,
  HeaderRow,
  Caption,
  Amount,
  IconWrapper,
  DividerStyled,
  CenterColumn,
  DividerBar,
} from "./PaymentLayout.styled";

const ApplePayCard = ({
  mode,
  face,
}: {
  mode: "light" | "dark";
  face: boolean;
}) => (
  <ApplePayCardBox mode={mode}>
    <HeaderRow>
      <div>
        <Caption mode={mode}>Pay Stark Industries</Caption>
        <Amount mode={mode}>$1.99</Amount>
      </div>
      <IconWrapper mode={mode}>
        <ArrowForwardIosIcon />
      </IconWrapper>
    </HeaderRow>
    <DividerStyled mode={mode} />
    <CenterColumn>
      {face ? (
        <>
          <img
            src={`${import.meta.env.BASE_URL}Button.svg`}
            alt="Side Button"
            style={{ width: 32, height: 32 }}
          />
          <div
            style={{
              fontSize: 13,
              marginTop: 8,
              color: mode === "dark" ? "#fff" : "#000",
            }}
          >
            Confirm with Side Button
          </div>
          <DividerBar mode={mode} />
        </>
      ) : (
        <>
          <img
            src={`${import.meta.env.BASE_URL}FingerPrint.svg`}
            alt="TouchID"
            style={{ width: 32, height: 32 }}
          />
          <div
            style={{
              fontSize: 13,
              marginTop: 8,
              color: mode === "dark" ? "#fff" : "#000",
            }}
          >
            Pay with TouchID
          </div>
        </>
      )}
    </CenterColumn>
  </ApplePayCardBox>
);

const PaymentLayout: React.FC = () => {
  const detailItems = [
    {
      content: (
        <PaymentItem
          title="Apple Card"
          subtitle1="10880 Malibu Point Malibu Cal..."
          subtitle2="•••• 1234"
          icon={`${import.meta.env.BASE_URL}AppleCard.png`}
          mode="light"
        />
      ),
      caption: "Light / Contact",
      mode: "light",
    },
    {
      content: (
        <PaymentItem
          title="Contact"
          subtitle1="astark@starkindustries.com"
          subtitle2="(123) 456-7890"
          icon={<Person />}
          mode="light"
        />
      ),
      caption: "Light / Shipping",
      mode: "light",
    },
    {
      content: (
        <PaymentItem
          title="Shipping"
          subtitle1="Anthony Stark"
          subtitle2="10880 Malibu Point"
          subtitle3="Malibu CA 90263"
          icon={<Home />}
          mode="light"
        />
      ),
      caption: "Light / Shipping",
      mode: "light",
    },
    {
      content: (
        <PaymentItem
          title="Shipping"
          subtitle1="Arrives 5-7 days"
          price="$0.00"
          icon={<Bento />}
          mode="light"
        />
      ),
      caption: "Light / Shipping Method",
      mode: "light",
    },
    {
      content: (
        <PaymentItem
          title="Apple Card"
          subtitle1="10880 Malibu Point Malibu Cal..."
          subtitle2="•••• 1234"
          icon={`${import.meta.env.BASE_URL}AppleCard.png`}
          mode="dark"
        />
      ),
      caption: "Dark / Contact",
      mode: "dark",
    },
    {
      content: (
        <PaymentItem
          title="Contact"
          subtitle1="astark@starkindustries.com"
          subtitle2="(123) 456-7890"
          icon={<Person />}
          mode="dark"
        />
      ),
      caption: "Dark / Shipping",
      mode: "dark",
    },
    {
      content: (
        <PaymentItem
          title="Shipping"
          subtitle1="Anthony Stark"
          subtitle2="10880 Malibu Point"
          subtitle3="Malibu CA 90263"
          icon={<Home />}
          mode="dark"
        />
      ),
      caption: "Dark / Shipping",
      mode: "dark",
    },
    {
      content: (
        <PaymentItem
          title="Shipping"
          subtitle1="Arrives 5-7 days"
          price="$0.00"
          icon={<Bento />}
          mode="dark"
        />
      ),
      caption: "Light / Shipping Method",
      mode: "dark",
    },
  ];

  const paymentDetailsCards = [
    { mode: "light", face: true, caption: "Light / FaceID" },
    { mode: "light", face: false, caption: "Light / TouchID" },
    { mode: "dark", face: true, caption: "Dark / FaceID" },
    { mode: "dark", face: false, caption: "Dark / TouchID" },
  ];
  interface SummaryContentProps {
    mode: "light" | "dark";
    items: typeof detailItems;
  }

  const SummaryContent: React.FC<SummaryContentProps> = ({ mode, items }) => {
    const filteredItems = items.filter(
      (item) => item.content.props.mode === mode
    );

    return (
      <>
        {filteredItems.map((item, idx) => (
          <div key={idx}>{item.content}</div>
        ))}
      </>
    );
  };

  return (
    <Container>
      <BorderBox>
        <CaptionTypography>ApplePay-detailCard</CaptionTypography>
        <PaymentSection title="" items={detailItems.map((i) => ({ ...i }))} />
      </BorderBox>

      <BorderBox>
        <CaptionTypography>ApplePay-paymentDetails</CaptionTypography>
        {paymentDetailsCards.map((item, idx) => (
          <StackRow key={idx} mb={idx !== paymentDetailsCards.length - 1}>
            <ApplePayCard
              mode={item.mode as "light" | "dark"}
              face={item.face}
            />
            <div
              style={{
                minWidth: 240,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                fontSize: "12px",
              }}
            >
              {item.caption}
            </div>
          </StackRow>
        ))}
      </BorderBox>

      <BorderBox>
        <CaptionTypography>ApplePay-summaryCard</CaptionTypography>

        <ApplePaySummaryCard mode="light">
          <SummaryContent mode="light" items={detailItems} />
        </ApplePaySummaryCard>
        <div style={{ marginTop: "20px" }}>
          <ApplePaySummaryCard mode="dark">
            <SummaryContent mode="dark" items={detailItems} />
          </ApplePaySummaryCard>
        </div>
      </BorderBox>
    </Container>
  );
};

export default PaymentLayout;
