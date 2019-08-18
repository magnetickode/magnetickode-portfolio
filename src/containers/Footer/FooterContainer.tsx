import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Footer from "../../components/Footer";
import { Props } from "./types";
import { ReduxState } from "../../store/reducers/types";

const FooterContainer: React.FC<Props> = ({ stickyNavVisible }) => {
  const [footerState, setFooterState] = useState("normal");

  /* 
    When the sticky nav is visible meaning the user has scrolled, the footer will be at the very 
    bottom. Otherwise, it should be a fixed element and the code below handles when to show
    enter animation and leave animation.
  */

  useEffect(() => {
    let timeout: number;
    if (!stickyNavVisible && footerState !== "enterAnim") {
      setFooterState("enterAnim");
    } else if (stickyNavVisible && footerState !== "normal") {
      setFooterState("leaveAnim");
      timeout = setTimeout(() => setFooterState("normal"), 800);
    }

    return () => clearTimeout(timeout);
  }, [stickyNavVisible, footerState]);
  return <Footer footerState={footerState} />;
};

const mapStateToProps = ({ main: { stickyNavVisible } }: ReduxState) => ({
  stickyNavVisible
});

export default connect(mapStateToProps)(FooterContainer);
