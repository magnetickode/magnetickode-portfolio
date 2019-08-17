import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";

import Navbar from "../../components/Navbar";
import { changeTheme } from "../../store/actions/mainActions";
import { Props } from "./types";
import { ReduxState } from "../../store/reducers/types";

const NavbarContainer: React.FC<Props> = props => {
  const [hamburgerOpened, setHamburger] = useState(false);

  const toggleHamburger = useCallback(() => setHamburger(prevState => !prevState), [
    setHamburger
  ]);

  const onBodyClick = useCallback(() => hamburgerOpened && setHamburger(false), [
    hamburgerOpened,
    setHamburger
  ]);

  useEffect(() => {
    document.addEventListener("click", onBodyClick);

    return () => document.removeEventListener("click", onBodyClick);
  }, [onBodyClick]);

  return (
    <Navbar
      hamburgerOpened={hamburgerOpened}
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
