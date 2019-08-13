import React, { useContext, useState } from "react";
import styled from "styled-components";

import Context from "../../context";
import Hamburger from "../Hamburger";

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
`;

const Navbar: React.FC = () => {
  const consumeContext = useContext(Context);

  const [hamburgerOpened, setHamburger] = useState(false);

  const toggleHamburger = () => setHamburger(prevState => !prevState);

  return (
    <StyledNavbar>
      <Logo>mk</Logo>
      <Hamburger opened={hamburgerOpened} toggleHamburger={toggleHamburger} />
    </StyledNavbar>
  );
};

export default Navbar;
