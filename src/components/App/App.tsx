import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "../Routes";
import Navbar from "../../containers/Navbar";
import { Theme } from "../../utils/getTheme/types";

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  html {
    height: 100%;
    font-size: 62.5%;
  }

  body {
      @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Pacifico&display=swap');
      
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
      height: 100%;
      color: ${({ theme }) => theme.textColor};
  }
`;

const StyledApp = styled.div`
  width: 110rem;
  max-width: 100%;
  margin: auto;
  padding: 8rem 2rem 0 2rem;
  box-sizing: border-box;
  overflow: hidden;
  transition: color 0.2s ease-in-out;

  @media (min-width: 720px) {
    padding-top: 15rem;
  }
`;

const App: React.FC = () => (
  <>
    <GlobalStyle data-test="AppComponent" />
    <Router>
      <StyledApp>
        <Navbar />
        <Routes />
      </StyledApp>
    </Router>
  </>
);

export default App;
