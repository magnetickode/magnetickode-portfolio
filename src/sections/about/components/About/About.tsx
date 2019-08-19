import React from "react";
import styled from "styled-components";

import { Props } from "./types";

const StyledAbout = styled.div`
  height: 150rem;
`;

const About: React.FC<Props> = ({ id }) => (
  <StyledAbout id={id}>
    <p />
  </StyledAbout>
);

export default About;
