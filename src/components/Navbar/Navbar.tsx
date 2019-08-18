import React from "react";
import styled, { keyframes } from "styled-components";

import Hamburger from "../Hamburger";
import MobileNav from "../MobileNav";
import DesktopNav from "../DesktopNav";
import { Props, StyledNavbarProps, LogoProps } from "./types";

const StyledNavbar = styled.div<StyledNavbarProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.8s ease-in-out;
  background: ${({ sticky, theme }) => (sticky ? theme.textColor : "transparent")};

  & > div {
    width: 110rem;
    max-width: 100%;
    padding: 1.5rem 2rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }

  @media (min-width: 720px) {
    & > div {
      padding: 2rem;
    }
  }
`;

const showTooltip = keyframes`
  0% {
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  80% {
    opacity: 1
  }

  100% {
    visibility: hidden;
  }
`;

const Logo = styled.div<LogoProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ isDesktop }) => (isDesktop ? "6rem" : "4.5rem")};
  height: ${({ isDesktop }) => (isDesktop ? "6rem" : "4.5rem")};
  color: ${({ sticky, theme }) => (sticky ? theme.primaryColor : theme.textColor)};
  border: 0.4rem solid
    ${({ sticky, theme }) => (sticky ? theme.primaryColor : theme.textColor)};
  border-radius: ${({ isDesktop }) => (isDesktop ? "6rem" : "4.5rem")};
  font-family: "Pacifico", cursive;
  font-size: ${({ isDesktop }) => (isDesktop ? "3.2rem" : "2.6rem")};
  user-select: none;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }

  ::after {
    content: "Click here to change theme";
    position: absolute;
    bottom: -3rem;
    left: 3rem;
    width: 20rem;
    height: 3rem;
    border-radius: 2rem;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
    font-family: "Lato", sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ sticky, theme }) => (sticky ? theme.primaryColor : theme.textColor)};
    color: ${({ sticky, theme }) => (sticky ? theme.textColor : theme.primaryColor)};
    opacity: 0;
    animation: ${showTooltip} 3.5s;
    animation-delay: 2s;
    animation-fill-mode: forwards;

    @media (min-width: 720px) {
      left: 5rem;
    }
  }
`;

const Navbar: React.FC<Props> = ({
  hamburgerOpened,
  mobileNavVisible,
  toggleHamburger,
  isDesktop,
  stickyNavVisible,
  changeTheme
}) => (
  <StyledNavbar data-test="NavbarComponent" sticky={stickyNavVisible}>
    <div>
      <Logo isDesktop={isDesktop} sticky={stickyNavVisible} onClick={changeTheme}>
        mk
      </Logo>
      {isDesktop ? (
        <DesktopNav sticky={stickyNavVisible} />
      ) : (
        <>
          <Hamburger
            data-test="Hamburger"
            opened={hamburgerOpened}
            sticky={stickyNavVisible}
            toggleHamburger={toggleHamburger}
          />
          {mobileNavVisible && (
            <MobileNav
              data-test="MobileNav"
              sticky={stickyNavVisible}
              collapse={!hamburgerOpened && mobileNavVisible}
            />
          )}
        </>
      )}
    </div>
  </StyledNavbar>
);

export default Navbar;
