// src/components/common/Button/styles.ts
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #000;
  color: #fff;
  border-radius: 12px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #1a1a1a;
  }
`;
