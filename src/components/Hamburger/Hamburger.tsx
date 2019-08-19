import React from "react";
import styled from "styled-components";

import { Props, StyledHamburgerProps } from "./types";

const StyledHamburger = styled.div<StyledHamburgerProps>`
  width: 4rem;
  transform: scale(0.8);
  cursor: pointer;

  :after,
  :before,
  & > div {
    background-color: ${({ theme }) => theme.textColor};
    border-radius: 3px;
    content: "";
    display: block;
    height: 5px;
    margin: 7px 0;
    transition: all 0.2s ease-in-out;
  }

  ${({ opened }) =>
    opened &&
    `
    :before {
      transform: translateY(12px) rotate(135deg);
    }

    :after {
      transform: translateY(-12px) rotate(-135deg);
    }

    & > div {
      transform: scale(0);
    }
  `}
`;

const Hamburger = ({ opened, toggleHamburger }: Props) => (
  <StyledHamburger
    opened={opened}
    onClick={toggleHamburger}
    data-test="HamburgerComponent"
  >
    <div />
  </StyledHamburger>
);

export default Hamburger;
