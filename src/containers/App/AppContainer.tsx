import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";

import App from "../../components/App";
import AppContext from "../../appContext";
import { useStorage } from "../../hooks";
import getTheme from "../../utils/getTheme";

const AppContainer = () => {
  const [themeIndex, setThemeIndex] = useState(1);

  useStorage(themeIndex, setThemeIndex, "local", "theme");

  const theme = getTheme(themeIndex);

  const contextValue = {
    changeTheme() {
      if (themeIndex < 5) {
        setThemeIndex(themeIndex + 1);
      } else {
        setThemeIndex(0);
      }
    }
  };
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={theme.ico.favicon} />
        <link rel="icon" href={theme.ico.size16} sizes="16x16" />
        <link rel="icon" href={theme.ico.size32} sizes="32x32" />
        <link rel="icon" href={theme.ico.size192} sizes="192x192" />
        <link rel="icon" href={theme.ico.size512} sizes="512x512" />
        <link rel="apple-touch-icon" href={theme.ico.appleTouch} />
        <link rel="manifest" href={theme.ico.manifest} />
        <meta name="theme-color" content={theme.primaryColor} />
      </Helmet>
      <AppContext.Provider value={contextValue}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
};

export default AppContainer;
