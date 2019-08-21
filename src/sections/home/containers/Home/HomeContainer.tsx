import React, { useState, useEffect, useCallback, useRef } from "react";
import { throttle } from "lodash";

import Home from "../../components/Home";

const HomeContainer: React.FC = () => {
  const [opacity, setOpacity] = useState(1);

  // Reduce opacity of Home content as user scrolls down

  const onScroll = useCallback(() => {
    if (window.innerHeight > window.scrollY) {
      if (window.scrollY === 0) {
        setOpacity(1);
      } else {
        setOpacity(1 - window.scrollY / window.innerHeight - 0.2);
      }
    }
  }, []);

  const throttledOnScroll = useRef(throttle(onScroll, 200));

  // useEffect(() => {
  //   window.addEventListener("scroll", throttledOnScroll.current);

  //   return () => window.removeEventListener("scroll", throttledOnScroll.current);
  // }, []);
  return <Home opacity={opacity} />;
};

export default HomeContainer;
