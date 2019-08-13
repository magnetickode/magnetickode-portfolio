import React, { useContext } from "react";
import styled from "styled-components";

import Context from "../../context";

const StyledNavbar = styled.div`
  display: flex;
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
`;

const Navbar: React.FC = () => {
  const consumeContext = useContext(Context);
  return (
    <StyledNavbar>
      <Logo>mk</Logo>
      <p>{consumeContext.isDesktop ? "Desktop" : "Mobile"}</p>
    </StyledNavbar>
  );
};

export default Navbar;
