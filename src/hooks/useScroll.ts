import { useState, useEffect, useRef } from "react";
import { throttle } from "lodash";

const useScroll = (handler: (scrollY: number) => void, throttleTo: number = 300) => {
  const [scrollY, setScrollY] = useState();

  useEffect(() => {
    setScrollY(window.scrollY);
  }, []);

  const throttledOnScroll = useRef(
    throttle(() => setScrollY(window.scrollY), throttleTo)
  );

  useEffect(() => {
    const currentThrottledOnScroll = throttledOnScroll.current;

    window.addEventListener("scroll", currentThrottledOnScroll);

    return () => window.removeEventListener("scroll", currentThrottledOnScroll);
  }, []);

  handler(scrollY);
};

export default useScroll;
