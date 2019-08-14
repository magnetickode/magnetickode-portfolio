import React, { useState } from "react";
import styled from "styled-components";

import Hamburger from "../Hamburger";
import { Props } from "./types";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  border: 0.4rem solid ${({ theme }) => theme.textColor};
  border-radius: 6rem;
  font-family: "Pacifico", cursive;
  font-size: 3.2rem;
  user-select: none;
  cursor: pointer;
`;

const Navbar: React.FC<Props> = ({ isDesktop, changeTheme }) => {
  const [hamburgerOpened, setHamburger] = useState(false);

  const toggleHamburger = () => setHamburger(prevState => !prevState);

  return (
    <StyledNavbar>
      <Logo onClick={changeTheme}>mk</Logo>
      {isDesktop ? (
        <p>Desktop</p>
      ) : (
        <>
          <Hamburger opened={hamburgerOpened} toggleHamburger={toggleHamburger} />
        </>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
