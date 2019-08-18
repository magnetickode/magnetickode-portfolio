import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

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
    background: ${({ sticky, theme }) => (sticky ? theme.primaryColor : theme.textColor)};
    color: ${({ sticky, theme }) => (sticky ? theme.textColor : theme.primaryColor)};
    text-decoration: none;
    transition: all 0.3s;
    cursor: pointer;
  }

  & a:hover,
  & .active {
    background: ${({ sticky, theme }) => (sticky ? theme.textColor : theme.primaryColor)};
    color: ${({ sticky, theme }) => (sticky ? theme.primaryColor : theme.textColor)};
  }
`;

const MobileNav: React.FC<Props> = ({ sticky, collapse }) => (
  <StyledMobileNav data-test="MobileNavComponent" collapse={collapse}>
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
  </StyledMobileNav>
);

export default MobileNav;
