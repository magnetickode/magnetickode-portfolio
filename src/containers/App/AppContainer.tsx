import React, { useEffect, useCallback, useRef } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "../../components/App";
import { screenSizeChanged, showStickyNav } from "../../store/actions/mainActions";
import getTheme from "../../utils/getTheme/getTheme";
import { Props } from "./types";
import { ReduxState } from "../../store/reducers/types";

const AppContainer: React.FC<Props> = ({
  isDesktop,
  themeIndex,
  stickyNavVisible,
  screenSizeChanged,
  showStickyNav
}) => {
  const navbarRef = useRef<HTMLDivElement>(null);

  const screenSizeChangedMemoized = useCallback(screenSizeChanged, []);
  const showStickyNavMemoized = useCallback(showStickyNav, []);

  const onResize = useCallback(() => {
    if (!isDesktop && window.innerWidth >= 720) {
      screenSizeChangedMemoized("toDesktop");
    } else if (isDesktop && window.innerWidth < 720) {
      screenSizeChangedMemoized("toMobile");
    }
  }, [isDesktop, screenSizeChangedMemoized]);

  const onScroll = useCallback(() => {
    if (
      !stickyNavVisible &&
      navbarRef.current &&
      window.scrollY > navbarRef.current.offsetHeight / 10
    ) {
      showStickyNavMemoized(true);
    } else if (stickyNavVisible && window.scrollY === 0) {
      showStickyNavMemoized(false);
    }
  }, [navbarRef, stickyNavVisible, showStickyNavMemoized]);

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

  // Set up scroll listener to determine whether or not to show sticky nav

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <ThemeProvider theme={getTheme(themeIndex)}>
      <App navbarRef={navbarRef} />
    </ThemeProvider>
  );
};

const mapStateToProps = ({
  main: { isDesktop, themeIndex, stickyNavVisible }
}: ReduxState) => ({
  isDesktop,
  themeIndex,
  stickyNavVisible
});

const mapDispatchToProps = {
  screenSizeChanged,
  showStickyNav
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
