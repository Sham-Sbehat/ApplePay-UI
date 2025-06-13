import styled from "styled-components";

export const Box = styled.div<{ bg: string }>`
  background-color: ${({ bg }) => bg};
  margin: 16px;
`;

export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Text = styled.div<{ color: string }>`
  color: ${({ color }) => color};
`;

export const Divider = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 150px;
  height: 4px;
  border-radius: 10px;
  margin-top: 20px;
`;
