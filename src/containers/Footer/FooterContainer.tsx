import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Footer from "../../components/Footer";
import { Props } from "./types";
import { ReduxState } from "../../store/reducers/types";

const FooterContainer: React.FC<Props> = ({ scrolled }) => {
  const [footerState, setFooterState] = useState("normal");

  /* 
    When the sticky nav is visible meaning the user has scrolled, the footer will be at the very 
    bottom. Otherwise, it should be a fixed element and the code below handles when to show
    enter animation and leave animation.
  */

  useEffect(() => {
    let timeout: number;
    if (!scrolled && footerState !== "enterAnim") {
      setFooterState("enterAnim");
    } else if (scrolled && footerState !== "normal") {
      setFooterState("leaveAnim");
      timeout = setTimeout(() => setFooterState("normal"), 800);
    }

    return () => clearTimeout(timeout);
  }, [scrolled, footerState]);

  return (
    <>
      <Footer footerState={footerState} footerPosition={"absolute"} />
      <Footer footerState={footerState} footerPosition={"fixed"} />
    </>
  );
};

const mapStateToProps = ({ main: { scrolled } }: ReduxState) => ({
  scrolled
});

export default connect(mapStateToProps)(FooterContainer);
