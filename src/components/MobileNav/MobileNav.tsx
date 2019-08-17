import React from "react";
import styled, { keyframes } from "styled-components";

import { Props, NavItemProps } from "./types";

const enlargeAnim = keyframes`
  from {
    height: 0;
  } 

  to {
    height: 22.5rem;
  }
`;

const StyledMobileNav = styled.div`
  position: absolute;
  top: 6.9rem;
  right: 2.8rem;
  width: 16rem;
  background: ${({ theme }) => theme.textColor};
  border-radius: 0.5rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
  user-select: none;
  overflow: hidden;
  animation: ${enlargeAnim} 0.5s;
`;

const NavItem = styled.div<NavItemProps>`
  width: 100%;
  height: 4.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  font-weight: bold;
  background: ${({ sticky, theme }) => (sticky ? theme.primaryColor : theme.textColor)};
  color: ${({ sticky, theme }) => (sticky ? theme.textColor : theme.primaryColor)};
  transition: all 0.35s;
  cursor: pointer;

  :hover {
    background: ${({ sticky, theme }) => (sticky ? theme.textColor : theme.primaryColor)};
    color: ${({ sticky, theme }) => (sticky ? theme.primaryColor : theme.textColor)};
  }
`;

const MobileNav: React.FC<Props> = ({ sticky }) => (
  <StyledMobileNav data-test="MobileNavComponent">
    <NavItem sticky={sticky}>Home</NavItem>
    <NavItem sticky={sticky}>Skills</NavItem>
    <NavItem sticky={sticky}>Portfolio</NavItem>
    <NavItem sticky={sticky}>About</NavItem>
    <NavItem sticky={sticky}>Contact</NavItem>
  </StyledMobileNav>
);

export default MobileNav;
