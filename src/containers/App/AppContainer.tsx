import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import App from "../../components/App";
import AppContext from "../../appContext";
import { useStorage } from "../../hooks";
import getTheme from "../../utils/getTheme";

const AppContainer = () => {
  const [themeIndex, setThemeIndex] = useState(1);

  useStorage(themeIndex, setThemeIndex, "local", "theme");

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
    <AppContext.Provider value={contextValue}>
      <ThemeProvider theme={getTheme(themeIndex)}>
        <App />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppContainer;
