import React, { useState, useCallback } from "react";

import Home from "../../components/Home";
import { useScroll } from "../../../../hooks";

const HomeContainer: React.FC = () => {
  const [opacity, setOpacity] = useState(1);

  const onScroll = useCallback(() => {
    if (window.innerHeight > window.scrollY) {
      if (window.scrollY === 0) {
        setOpacity(1);
      } else {
        setOpacity(1 - window.scrollY / window.innerHeight - 0.1);
      }
    }
  }, []);

  // useScroll(onScroll, 200);
  return <Home opacity={opacity} />;
};

export default HomeContainer;
