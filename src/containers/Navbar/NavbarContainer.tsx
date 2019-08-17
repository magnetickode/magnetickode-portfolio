import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";

import Navbar from "../../components/Navbar";
import { changeTheme } from "../../store/actions/mainActions";
import { Props } from "./types";
import { ReduxState } from "../../store/reducers/types";

const NavbarContainer: React.FC<Props> = props => {
  const [hamburgerOpened, setHamburger] = useState(false);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleHamburger = useCallback(() => {
    setHamburger(prevState => !prevState);
  }, [setHamburger]);

  const onBodyClick = useCallback(() => hamburgerOpened && setHamburger(false), [
    hamburgerOpened,
    setHamburger
  ]);

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
  }, [hamburgerOpened, mobileNavVisible, setMobileNavVisible]);

  return (
    <Navbar
      hamburgerOpened={hamburgerOpened}
      mobileNavVisible={mobileNavVisible}
      toggleHamburger={toggleHamburger}
      {...props}
    />
  );
};

const mapStateToProps = ({ main: { isDesktop, stickyNavVisible } }: ReduxState) => ({
  isDesktop,
  stickyNavVisible
});

const mapDispatchToProps = {
  changeTheme
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContainer);
