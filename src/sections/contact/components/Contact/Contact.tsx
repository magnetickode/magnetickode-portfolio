import React from "react";
import styled from "styled-components";

import { Props } from "./types";

const StyledContact = styled.div`
  height: 150rem;
`;

const Contact: React.FC<Props> = ({ id }) => (
  <StyledContact id={id}>
    <p />
  </StyledContact>
);

export default Contact;
