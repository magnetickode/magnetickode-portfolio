import React, { useState, useEffect, useCallback, useContext } from "react";
import { Helmet } from "react-helmet";

import Navbar from "../../components/Navbar";
import AppContext from "../../appContext";
import { useScroll, useResize } from "../../hooks";
import { getCurrentHashRoute, checkIfSticky } from "../../utils/scrollUtils";

const NavbarContainer: React.FC = () => {
  const [hamburgerOpened, setHamburger] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [stickyNavVisible, setStickyNavVisible] = useState(false);
  const [hashRoute, setHashRoute] = useState("#home");

  const toggleHamburger = useCallback(() => {
    setHamburger(prevState => !prevState);
  }, [setHamburger]);

  const onBodyClick = useCallback(() => hamburgerOpened && setHamburger(false), [
    hamburgerOpened
  ]);

  const { changeTheme } = useContext(AppContext);

  // Close the hamburger and mobile nav when clicked anywhere

  useEffect(() => {
    document.addEventListener("click", onBodyClick);

    return () => document.removeEventListener("click", onBodyClick);
  }, [onBodyClick]);

  const onScroll = useCallback(() => {
    // Check if sticky nav should be visible

    if (!stickyNavVisible && checkIfSticky(window.scrollY)) {
      setStickyNavVisible(true);
    } else if (stickyNavVisible && !checkIfSticky(window.scrollY)) {
      setStickyNavVisible(false);
    }

    // Determine current hash route

    const currentHashRoute = getCurrentHashRoute(window.scrollY);

    if (hashRoute !== currentHashRoute) {
      setHashRoute(currentHashRoute);
    }
  }, [stickyNavVisible, hashRoute]);

  useScroll(onScroll);

  // Check if screen is desktop size on first render

  useEffect(() => {
    if (window.innerWidth >= 720) {
      setIsDesktop(true);
    }
  }, []);

  // Check if screen is desktop size on resize

  const onResize = useCallback(() => {
    if (!isDesktop && window.innerWidth >= 720) {
      setIsDesktop(true);
    } else if (isDesktop && window.innerWidth < 720) {
      setIsDesktop(false);
    }
  }, [isDesktop]);

  useResize(onResize);

  return (
    <>
      <Helmet>
        <title>
          {hashRoute.slice(1, 2).toUpperCase() + hashRoute.slice(2)} - magnetickode
        </title>
      </Helmet>
      <Navbar
        hamburgerOpened={hamburgerOpened}
        toggleHamburger={toggleHamburger}
        isDesktop={isDesktop}
        stickyNavVisible={stickyNavVisible}
        hashRoute={hashRoute}
        changeTheme={changeTheme}
      />
    </>
  );
};

export default NavbarContainer;
