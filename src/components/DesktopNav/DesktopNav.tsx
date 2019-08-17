import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Props, StyledDesktopNavProps, StyledNavLinkProps } from "./types";

const StyledDesktopNav = styled.div<StyledDesktopNavProps>`
  display: flex;
  flex-basis: 70%;
  border: 0.25rem
    ${({ sticky, theme }) => (sticky ? theme.primaryColor : theme.textColor)} solid;
  border-radius: 0.6rem;
  user-select: none;
  overflow: hidden;
`;

const StyledNavLink = styled<StyledNavLinkProps | any>(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 20%;
  height: 4rem;
  border: 0;
  font-weight: bold;
  color: ${({ sticky, theme }) => (sticky ? theme.primaryColor : theme.textColor)};
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;

  :hover,
  &.active {
    outline: 0;
    background: ${({ sticky, theme }) => (sticky ? theme.primaryColor : theme.textColor)};
    color: ${({ sticky, theme }) => (sticky ? theme.textColor : theme.primaryColor)};
  }
`;

const DesktopNav: React.FC<Props> = ({ sticky }) => (
  <StyledDesktopNav data-test="DesktopNavComponent" sticky={sticky}>
    <StyledNavLink to="/" sticky={sticky}>
      Home
    </StyledNavLink>
    <StyledNavLink sticky={sticky}>Skills</StyledNavLink>
    <StyledNavLink sticky={sticky}>Portfolio</StyledNavLink>
    <StyledNavLink sticky={sticky}>About</StyledNavLink>
    <StyledNavLink sticky={sticky}>Contact</StyledNavLink>
  </StyledDesktopNav>
);

export default DesktopNav;
