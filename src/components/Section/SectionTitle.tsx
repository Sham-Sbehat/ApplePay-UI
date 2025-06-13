import React from "react";
import styled from "styled-components";
import { Divider } from "@mui/material";

type SectionTitleProps = {
  title: string;
};

const Title = styled.h2`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
`;

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <>
      <Title>{title}</Title>
      <Divider sx={{ my: 4 }} />
    </>
  );
};

export default SectionTitle;
