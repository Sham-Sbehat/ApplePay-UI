import React from "react";
import type { ReactNode } from "react";
import {
  Container,
  Title,
  ItemWrapper,
  ContentBox,
} from "./PaymentSection.styles";

interface PaymentSectionProps {
  title: string;
  items: {
    content: ReactNode;
    caption: string;
  }[];
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ title, items }) => {
  const isSummarySheet = title === "ApplePay-summarySheet";

  return (
    <Container>
      <Title isSummarySheet={isSummarySheet}>{title}</Title>
      {items.map((item, index) => (
        <ItemWrapper key={index}>
           <ContentBox>{item.content}</ContentBox>
          {item.caption && (
            <>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center",  fontSize: "12px"}}>
              {item.caption}
              </div>
            </>
          )}
        </ItemWrapper>
      ))}
    </Container>
  );
};

export default PaymentSection;
