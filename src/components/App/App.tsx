import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Routes from "../Routes";
import Navbar from "../../containers/Navbar";
import Footer from "../../containers/Footer";
import { Theme } from "../../utils/getTheme/types";

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Pacifico|Righteous&display=swap');
  html {
    height: 100%;
    font-size: 62.5%;
  }

  body {
      height: 100%;
      margin: 0;
      font-family: "Lato", sans-serif;
      font-size: 1.6rem;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.primaryColorRgba(0.9)}, 
        ${({ theme }) => theme.secondaryColorRgba(0.9)}),
        ${({ theme }) => theme.backgroundImage};     
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      color: ${({ theme }) => theme.textColor};
  }
`;

const StyledApp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow: hidden;
  transition: color 0.2s ease-in-out;
`;

const App: React.FC = () => (
  <>
    <GlobalStyle data-test="AppComponent" />
    <StyledApp>
      <Navbar />
      <Routes />
      <Footer />
    </StyledApp>
  </>
);

export default App;
