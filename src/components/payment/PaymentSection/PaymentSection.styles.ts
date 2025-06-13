import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.h6<{ isSummarySheet: boolean }>`
  margin-bottom: 16px;
  text-decoration: ${({ isSummarySheet }) => (isSummarySheet ? "none" : "underline")};
  font-size: 1rem;
  font-weight: 700;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

export const ContentBox = styled.div`
  border-radius: 15px;
  width: 375px;
  height:92px;
  flex: 1;
`;

export const CaptionWrapper = styled.div`
  min-width: 100px;
  text-align: right;
`;

export const Caption = styled.div`
  font-weight: 500;
  fontSize: "12px",
`;
