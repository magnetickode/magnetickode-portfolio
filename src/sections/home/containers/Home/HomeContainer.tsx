import React, { useState, useCallback } from "react";

import Home from "../../components/Home";
import { useScroll } from "../../../../hooks";

const HomeContainer: React.FC = () => {
  const [opacity, setOpacity] = useState(1);

  const onScroll = useCallback(scrollY => {
    if (window.innerHeight > scrollY) {
      if (scrollY === 0) {
        setOpacity(1);
      } else {
        setOpacity(1 - scrollY / window.innerHeight - 0.1);
      }
    }
  }, []);

  useScroll(onScroll);
  return <Home opacity={opacity} />;
};

export default HomeContainer;
