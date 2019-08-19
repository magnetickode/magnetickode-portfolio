import React from "react";
import styled from "styled-components";

import { Props } from "./types";

const StyledPortfolio = styled.div`
  height: 150rem;
`;

const Portfolio: React.FC<Props> = ({ id }) => (
  <StyledPortfolio id={id}>
    <p />
  </StyledPortfolio>
);

export default Portfolio;
