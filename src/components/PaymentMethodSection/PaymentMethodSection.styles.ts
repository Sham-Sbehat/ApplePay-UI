import styled from "styled-components";

export const Container = styled.div<{ bg: string }>`
  background-color: ${({ bg }) => bg};
  margin: 16px;
  width: 300px;
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledDivider = styled.hr`
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 0;
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  gap: 4px;
`;

export const InfoStack = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 10px;
  margin-bottom: 4px;
`;

export const Title = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  font-weight: 700;
  font-size: 1rem;
`;
