import { useState, useEffect, useRef } from "react";
import { throttle } from "lodash";

const useResize = (handler: (screenWidth: number) => void, throttleBy: number = 300) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const throttledOnResize = useRef(
    throttle(() => setScreenWidth(window.innerWidth), throttleBy)
  );

  useEffect(() => {
    const currentThrottledOnResize = throttledOnResize.current;

    window.addEventListener("resize", currentThrottledOnResize);

    return () => window.removeEventListener("resize", currentThrottledOnResize);
  }, []);

  useEffect(() => {
    handler(screenWidth);
  }, [screenWidth, handler]);
};

export default useResize;
