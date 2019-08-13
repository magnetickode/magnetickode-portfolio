import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import App from "./App";
import { mainTheme } from "./theme";
import { MainThemeType } from "./types";
import * as serviceWorker from "./serviceWorker";

const GlobalStyle = createGlobalStyle<{ theme: MainThemeType }>`
  html {
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
      color: ${({ theme }) => theme.textColor}
  }
`;

ReactDOM.render(
  <ThemeProvider theme={mainTheme}>
    <>
      <GlobalStyle />
      <App />
    </>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
