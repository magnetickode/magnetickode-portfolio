import React, { useState, useEffect, useCallback } from "react";
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

  const throttledOnScroll = throttle(onScroll, 500);

  useEffect(() => {
    window.addEventListener("scroll", throttledOnScroll);

    return () => window.removeEventListener("scroll", throttledOnScroll);
  }, [throttledOnScroll]);
  return <Home opacity={opacity} />;
};

export default HomeContainer;
