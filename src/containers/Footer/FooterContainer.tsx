import React, { useState, useEffect, useCallback } from "react";

import Footer from "../../components/Footer";
import { useScroll } from "../../hooks";

const FooterContainer: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
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

  const onScroll = useCallback(() => {
    // Check if scroll position is 0 to decide the footer animation

    if (window.scrollY === 0 && scrolled) {
      setScrolled(false);
    } else if (window.scrollY > 0 && !scrolled) {
      setScrolled(true);
    }
  }, [scrolled]);

  useScroll(onScroll);

  return (
    <>
      <Footer footerState={"normal"} footerPosition={"absolute"} />
      <Footer footerState={footerState} footerPosition={"fixed"} />
    </>
  );
};

export default FooterContainer;
