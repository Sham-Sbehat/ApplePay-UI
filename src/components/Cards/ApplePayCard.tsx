import React from "react";
import styled from "styled-components";
import type {ApplePayCardProps} from '../../types/cards';

const Container = styled.div<{ mode: "light" | "dark" }>`
  background: ${({ mode }) => (mode === "dark" ? "#232326" : "#fff")};
  position: absolute;
  top: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Label = styled.div<{ mode: "light" | "dark" }>`
  color: ${({ mode }) => (mode === "dark" ? "#EBEBF599" : "#3C3C4399")};
  font-size: 13px;
`;

const Amount = styled.div<{ mode: "light" | "dark" }>`
  color: ${({ mode }) => (mode === "dark" ? "#FFFFFF" : "#000000")};
  font-weight: 700;
  font-size: 28px;
`;

const Arrow = styled.div`
  color: #000;
  opacity: 0.7;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #eee;
  margin: 16px 0;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ConfirmText = styled.div<{ mode: "light" | "dark" }>`
  font-size: 15px;
  margin-top: 8px;
  color: ${({ mode }) => (mode === "dark" ? "#FFFFFF" : "#000000")};
`;

const LineBar = styled.div`
  width: 40px;
  height: 4px;
  background: #eee;
  border-radius: 2px;
  margin-top: 12px;
`;

const ApplePayCard: React.FC<ApplePayCardProps> = ({ mode, face }) => (
  <Container mode={mode}>
    <Header>
      <div>
        <Label mode={mode}>Pay Stark Industries</Label>
        <Amount mode={mode}>$1.99</Amount>
      </div>
      <Arrow>
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M10.59 7.41L15.17 12l-4.58 4.59L12 18l6-6-6-6z"
          />
        </svg>
      </Arrow>
    </Header>
    <Divider />
    <ActionContainer>
      {face ? (
        <>
          <img
            src="/Button.svg"
            alt="Side Button"
            style={{ width: 32, height: 32 }}
          />
          <ConfirmText mode={mode}>Confirm with Side Button</ConfirmText>
          <LineBar />
        </>
      ) : (
        <>
          <img
            src="/FingerPrint.svg"
            alt="TouchID"
            style={{ width: 32, height: 32 }}
          />
          <ConfirmText mode={mode}>Pay with TouchID</ConfirmText>
        </>
      )}
    </ActionContainer>
  </Container>
);

export default ApplePayCard;
