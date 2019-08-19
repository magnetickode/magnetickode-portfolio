import React from "react";
import styled from "styled-components";

import { Props } from "./types";

const StyledSkills = styled.div`
  height: 150rem;
  padding-top: 10rem;
`;

const H1 = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: ${({ theme }) => theme.primaryColor};
`;

const Skills: React.FC<Props> = ({ id }) => (
  <StyledSkills id={id}>
    <H1>My Skillset</H1>>
  </StyledSkills>
);

export default Skills;
