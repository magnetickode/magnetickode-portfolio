import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "../../components/App";
import { screenSizeChanged } from "../../store/actions/mainActions";
import getTheme from "../../utils/getTheme/getTheme";
import { Props } from "./types";
import { ReduxState } from "../../store/reducers/types";

const AppContainer: React.FC<Props> = ({ isDesktop, themeIndex, screenSizeChanged }) => {
  const screenSizeChangedMemoized = useCallback(screenSizeChanged, []);

  const onResize = useCallback(() => {
    if (!isDesktop && window.innerWidth >= 720) {
      screenSizeChangedMemoized("toDesktop");
    } else if (isDesktop && window.innerWidth < 720) {
      screenSizeChangedMemoized("toMobile");
    }
  }, [isDesktop, screenSizeChangedMemoized]);

  // Determine if screen is desktop size at the firt render

  useEffect(() => {
    if (window.innerWidth >= 720) {
      screenSizeChangedMemoized("toDesktop");
    }
  }, [screenSizeChangedMemoized]);

  // Set up resize listener to determine changes to desktop or mobile screen

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [onResize]);

  return (
    <ThemeProvider theme={getTheme(themeIndex)}>
      <App />
    </ThemeProvider>
  );
};

const mapStateToProps = ({ main: { isDesktop, themeIndex } }: ReduxState) => ({
  isDesktop,
  themeIndex
});

const mapDispatchToProps = {
  screenSizeChanged
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
