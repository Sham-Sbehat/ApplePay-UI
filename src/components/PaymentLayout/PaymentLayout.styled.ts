import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 64px;
`;

export const BorderBox = styled.div`
  min-width: 440px;
  border: 2px dashed #7b61ff;
  border-radius: 16px;
  padding: 30px;
  position: relative;
`;

export const CaptionTypography = styled.div`
  font-family: monospace;
  margin-bottom: 8px;
  margin-left: 8px;
  font-weight: 500;
  font-size: 18px;
`;

export const StackRow = styled.div<{ mb?: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: ${({ mb }) => (mb ? "32px" : "0")};
`;

export const ApplePayCardBox = styled.div<{ mode: "light" | "dark" }>`
  background-color: ${({ mode }) => (mode === "dark" ? "#232526" : "#F5F5F7")};
  color: ${({ mode }) => (mode === "dark" ? "#fff" : "#000")};
  box-shadow: ${({ mode }) =>
    mode === "light" ? "0 1px 3px rgba(0,0,0,0.1)" : "none"};
  padding: 8px 16px;
  min-width: 320px;
  max-width: 340px;
  overflow: hidden;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Caption = styled.div<{ mode: "light" | "dark" }>`
  color: ${({ mode }) => (mode === "dark" ? "#ccc" : "#888")};
  font-size: 12px;
`;

export const Amount = styled.div<{ mode: "light" | "dark" }>`
  font-weight: 700;
  font-size: 28px;
  color: ${({ mode }) => (mode === "dark" ? "#fff" : "#000")};
`;

export const IconWrapper = styled.div<{ mode: "light" | "dark" }>`
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 8px;

  svg {
    font-size: 18px;
    color: ${({ mode }) => (mode === "dark" ? "#ccc" : "#888")};
  }
`;

export const DividerStyled = styled.div<{ mode: "light" | "dark" }>`
  margin: 8px 0;
  border-bottom: 1px solid
    ${({ mode }) => (mode === "dark" ? "#444" : "#E0E0E0")};
`;

export const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
`;

export const DividerBar = styled.div<{ mode: "light" | "dark" }>`
  background: ${({ mode }) => (mode === "dark" ? "#fff" : "#000")};
  width: 120px;
  height: 4px;
  border-radius: 10px;
  margin-top: 16px;
`;
