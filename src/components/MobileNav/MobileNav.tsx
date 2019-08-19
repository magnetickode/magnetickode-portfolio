import React from "react";
import styled, { keyframes } from "styled-components";
import { NavHashLink as NavLink } from "react-router-hash-link";

import { Props, StyledMobileNavProps, StyledNavLinkProps } from "./types";

const enlargeAnim = keyframes`
  from {
    height: 0;
  } 

  to {
    height: 22.5rem;
  }
`;

const StyledMobileNav = styled.div<StyledMobileNavProps>`
  position: absolute;
  top: 6.9rem;
  right: 2.8rem;
  width: 16rem;
  height: ${({ collapse }) => (collapse ? 0 : "22.5rem")};
  background: ${({ theme }) => theme.textColor};
  border-radius: 0.5rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
  user-select: none;
  overflow: hidden;
  animation: ${enlargeAnim} 0.5s;
  transition: height 0.5s;
`;

const StyledNavLink = styled.div<StyledNavLinkProps>`
  & a {
    width: 100%;
    height: 4.5rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    font-weight: bold;
    background: ${({ active, theme }) => active && theme.primaryColor};
    color: ${({ active, theme }) => (active ? theme.textColor : theme.primaryColor)};
    text-decoration: none;
    transition: all 0.3s;
    cursor: pointer;
  }

  & a:hover {
    background: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.textColor};
  }
`;

const MobileNav: React.FC<Props> = ({ collapse, hashRoute }) => (
  <StyledMobileNav data-test="MobileNavComponent" collapse={collapse}>
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
  </StyledMobileNav>
);

export default MobileNav;
