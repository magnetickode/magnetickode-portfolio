import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import App from "./App";
import { mainTheme, MainThemeType } from "./theme";
import * as serviceWorker from "./serviceWorker";

const GlobalStyle = createGlobalStyle<{ theme: MainThemeType }>`
  body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.primaryColorRgba(0.9)}, 
        ${({ theme }) => theme.secondaryColorRgba(0.9)}),
        ${({ theme }) => theme.backgroundImage};     
      background-size: cover;
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
