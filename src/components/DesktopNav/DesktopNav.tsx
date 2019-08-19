import React from "react";
import styled from "styled-components";
import { NavHashLink as NavLink } from "react-router-hash-link";

import { Props, StyledNavLinkProps } from "./types";

const StyledDesktopNav = styled.div`
  display: flex;
  flex-basis: 70%;
  border: 0.25rem ${({ theme }) => theme.textColor} solid;
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
    background: ${({ active, theme }) => active && theme.textColor};
    color: ${({ active, theme }) => (active ? theme.primaryColor : theme.textColor)};
    text-decoration: none;
  }

  & a:hover {
    background: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const DesktopNav: React.FC<Props> = ({ hashRoute }) => (
  <StyledDesktopNav data-test="DesktopNavComponent">
    <StyledNavLink active={hashRoute === "#home"}>
      <NavLink smooth exact to="/#home">
        Home
      </NavLink>
    </StyledNavLink>
    <StyledNavLink active={hashRoute === "#skills"}>
      <NavLink smooth to="/#skills">
        Skills
      </NavLink>
    </StyledNavLink>
    <StyledNavLink active={hashRoute === "#portfolio"}>
      <NavLink smooth to="/#portfolio">
        Portfolio
      </NavLink>
    </StyledNavLink>
    <StyledNavLink active={hashRoute === "#about"}>
      <NavLink smooth to="/#about">
        About
      </NavLink>
    </StyledNavLink>
    <StyledNavLink active={hashRoute === "#contact"}>
      <NavLink smooth to="/#contact">
        Contact
      </NavLink>
    </StyledNavLink>
  </StyledDesktopNav>
);

export default DesktopNav;
