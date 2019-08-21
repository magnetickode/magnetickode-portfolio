import React, { useState, useEffect, useCallback, useContext } from "react";

import Navbar from "../../components/Navbar";
import AppContext from "../../appContext";
import { useScroll, useResize } from "../../hooks";
import { getCurrentHashRoute, checkIfSticky } from "../../utils/scrollUtils";

const NavbarContainer: React.FC = () => {
  const [hamburgerOpened, setHamburger] = useState(false);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
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

  // Wait for mobile nav collapse animation to complete before unmounting the component

  useEffect(() => {
    let timeout: number;

    if (!hamburgerOpened && mobileNavVisible) {
      timeout = setTimeout(() => setMobileNavVisible(false), 1000);
    } else if (hamburgerOpened && !mobileNavVisible) {
      setMobileNavVisible(true);
    }

    return () => clearTimeout(timeout);
  }, [hamburgerOpened, mobileNavVisible]);

  const onScroll = useCallback(
    scrollY => {
      // Check if sticky nav should be visible

      if (!stickyNavVisible && checkIfSticky(scrollY)) {
        setStickyNavVisible(true);
      } else if (stickyNavVisible && !checkIfSticky(scrollY)) {
        setStickyNavVisible(false);
      }

      // Determine current hash route

      const currentHashRoute = getCurrentHashRoute(scrollY);

      if (hashRoute !== currentHashRoute) {
        setHashRoute(currentHashRoute);
      }
    },
    [stickyNavVisible, hashRoute]
  );

  useScroll(onScroll);

  const onResize = useCallback(
    screenWidth => {
      if (!isDesktop && screenWidth >= 720) {
        setIsDesktop(true);
      } else if (isDesktop && screenWidth < 720) {
        setIsDesktop(false);
      }
    },
    [isDesktop]
  );

  useResize(onResize);

  return (
    <Navbar
      hamburgerOpened={hamburgerOpened}
      mobileNavVisible={mobileNavVisible}
      toggleHamburger={toggleHamburger}
      isDesktop={isDesktop}
      stickyNavVisible={stickyNavVisible}
      hashRoute={hashRoute}
      changeTheme={changeTheme}
    />
  );
};

export default NavbarContainer;
