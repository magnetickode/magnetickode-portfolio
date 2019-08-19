import React from "react";
import styled, { keyframes } from "styled-components";

import Hamburger from "../Hamburger";
import MobileNav from "../MobileNav";
import DesktopNav from "../DesktopNav";
import { Props, StyledNavbarProps } from "./types";

const StyledNavbar = styled.div<StyledNavbarProps>`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.5s ease-in-out;

  & > div {
    width: 110rem;
    max-width: 100%;
    padding: 1rem 2rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }

  ::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: ${({ sticky }) => (sticky ? "100%" : 0)};
    background: ${({ theme }) => theme.primaryColor};
    transition: height 0.25s linear, background-color 0.6s ease-in-out;
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

const Logo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: 4.5rem;
  color: ${({ theme }) => theme.textColor};
  border: 0.4rem solid ${({ theme }) => theme.textColor};
  border-radius: 4.5rem;
  font-family: "Pacifico", cursive;
  font-size: 2.6rem;
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
    background: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.primaryColor};
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
  hashRoute,
  changeTheme
}) => (
  <StyledNavbar data-test="NavbarComponent" sticky={stickyNavVisible}>
    <div>
      <Logo onClick={changeTheme}>mk</Logo>
      {isDesktop ? (
        <DesktopNav hashRoute={hashRoute} />
      ) : (
        <>
          <Hamburger
            data-test="Hamburger"
            opened={hamburgerOpened}
            toggleHamburger={toggleHamburger}
          />
          {mobileNavVisible && (
            <MobileNav
              data-test="MobileNav"
              collapse={!hamburgerOpened && mobileNavVisible}
              hashRoute={hashRoute}
            />
          )}
        </>
      )}
    </div>
  </StyledNavbar>
);

export default Navbar;
