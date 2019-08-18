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

const StyledNavLink = styled.div<StyledNavLinkProps>`
  flex-basis: 20%;
  height: 4rem;
  transition: all 0.3s;
  cursor: pointer;

  & a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: ${({ sticky, theme }) => (sticky ? theme.primaryColor : theme.textColor)};
    text-decoration: none;
  }

  & a:hover,
  & .active {
    background: ${({ sticky, theme }) => (sticky ? theme.primaryColor : theme.textColor)};
    color: ${({ sticky, theme }) => (sticky ? theme.textColor : theme.primaryColor)};
  }
`;

const DesktopNav: React.FC<Props> = ({ sticky }) => (
  <StyledDesktopNav data-test="DesktopNavComponent" sticky={sticky}>
    <StyledNavLink sticky={sticky}>
      <NavLink exact to="/">
        Home
      </NavLink>
    </StyledNavLink>
    <StyledNavLink sticky={sticky}>
      <NavLink to="/skills">Skills</NavLink>
    </StyledNavLink>
    <StyledNavLink sticky={sticky}>
      <NavLink to="/portfolio">Portfolio</NavLink>
    </StyledNavLink>
    <StyledNavLink sticky={sticky}>
      <NavLink to="/about">About</NavLink>
    </StyledNavLink>
    <StyledNavLink sticky={sticky}>
      <NavLink to="/contact">Contact</NavLink>
    </StyledNavLink>
  </StyledDesktopNav>
);

export default DesktopNav;
