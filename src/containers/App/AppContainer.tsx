import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { throttle } from "lodash";

import App from "../../components/App";
import {
  screenSizeChanged,
  showStickyNav,
  changeScroll,
  changeHashRoute
} from "../../store/actions/mainActions";
import getTheme from "../../utils/getTheme";
import { getCurrentHashRoute, checkIfSticky } from "../../utils/scrollUtils";
import { Props } from "./types";
import { ReduxState } from "../../store/reducers/types";

const AppContainer: React.FC<Props> = ({
  isDesktop,
  themeIndex,
  stickyNavVisible,
  scrolled,
  hashRoute,
  screenSizeChanged,
  showStickyNav,
  changeScroll,
  changeHashRoute
}) => {
  const screenSizeChangedMemoized = useCallback(screenSizeChanged, []);
  const showStickyNavMemoized = useCallback(showStickyNav, []);
  const changeScrollMemoized = useCallback(changeScroll, []);
  const changeHashRouteMemoized = useCallback(changeHashRoute, []);

  const onResize = useCallback(() => {
    if (!isDesktop && window.innerWidth >= 720) {
      screenSizeChangedMemoized("toDesktop");
    } else if (isDesktop && window.innerWidth < 720) {
      screenSizeChangedMemoized("toMobile");
    }
  }, [isDesktop, screenSizeChangedMemoized]);

  const throttledOnResize = throttle(onResize, 200);

  const onScroll = useCallback(() => {
    // Check if scroll position is 0 to decide the footer animation

    if (window.scrollY === 0 && scrolled) {
      changeScrollMemoized(false);
    } else if (window.scrollY > 0 && !scrolled) {
      changeScrollMemoized(true);
    }

    // Check if sticky nav should be visible

    if (!stickyNavVisible && checkIfSticky()) {
      showStickyNavMemoized(true);
    } else if (stickyNavVisible && !checkIfSticky()) {
      showStickyNavMemoized(false);
    }

    // Determine current hash route

    if (hashRoute !== getCurrentHashRoute()) {
      changeHashRouteMemoized(getCurrentHashRoute());
    }
  }, [
    stickyNavVisible,
    scrolled,
    hashRoute,
    showStickyNavMemoized,
    changeScrollMemoized,
    changeHashRouteMemoized
  ]);

  const throttledOnScroll = throttle(onScroll, 300);

  // Determine if screen is desktop size and whether or not to show sticky nav at the firt render

  useEffect(() => {
    throttledOnScroll();
    if (window.innerWidth >= 720) {
      screenSizeChangedMemoized("toDesktop");
    }
  }, [screenSizeChangedMemoized, throttledOnScroll]);

  // Set up resize listener to determine changes to desktop or mobile screen

  useEffect(() => {
    window.addEventListener("resize", throttledOnResize);

    return () => window.removeEventListener("resize", throttledOnResize);
  }, [throttledOnResize]);

  // Set up scroll listener to determine whether or not to show sticky nav

  useEffect(() => {
    window.addEventListener("scroll", throttledOnScroll);
  }, [throttledOnScroll]);

  return (
    <ThemeProvider theme={getTheme(themeIndex)}>
      <App />
    </ThemeProvider>
  );
};

const mapStateToProps = ({
  main: { isDesktop, themeIndex, stickyNavVisible, scrolled, hashRoute }
}: ReduxState) => ({
  isDesktop,
  themeIndex,
  stickyNavVisible,
  scrolled,
  hashRoute
});

const mapDispatchToProps = {
  screenSizeChanged,
  showStickyNav,
  changeScroll,
  changeHashRoute
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
