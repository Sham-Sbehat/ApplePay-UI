import styled from "styled-components";

export const Container = styled.div<{ bg: string; textColor: string }>`
  background: ${({ bg }) => bg};
  padding: 16px;
  margin: 16px;
  border-radius: 20px 20px 0 0;
  position: relative;
  color: ${({ textColor }) => textColor};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const LeftStack = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const PayText = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 24px;
  font-weight: 500;
`;

export const ChildrenStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
