import React, { useState } from "react";
import styled from "styled-components";

import Hamburger from "../Hamburger";
import { Props, StyledNavbarProps, LogoProps } from "./types";

const StyledNavbar = styled.div<StyledNavbarProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.8s ease-in-out;

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

  ${({ sticky, theme }) =>
    sticky &&
    `   
      background: ${theme.textColor};  
  `}
`;

const Logo = styled.div<LogoProps>`
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
  cursor: pointer;
`;

const Navbar: React.FC<Props> = ({
  navbarRef,
  isDesktop,
  stickyNavVisible,
  changeTheme
}) => {
  const [hamburgerOpened, setHamburger] = useState(false);

  const toggleHamburger = () => setHamburger(prevState => !prevState);

  return (
    <StyledNavbar data-test="NavbarComponent" ref={navbarRef} sticky={stickyNavVisible}>
      <div>
        <Logo isDesktop={isDesktop} sticky={stickyNavVisible} onClick={changeTheme}>
          mk
        </Logo>
        {isDesktop ? (
          <p>Desktop</p>
        ) : (
          <>
            <Hamburger
              data-test="Hamburger"
              opened={hamburgerOpened}
              sticky={stickyNavVisible}
              toggleHamburger={toggleHamburger}
            />
          </>
        )}
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
