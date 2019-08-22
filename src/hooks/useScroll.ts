import { useEffect, useRef } from "react";
import { throttle } from "lodash";

const useScroll = (handler: () => void, throttleTo: number = 300) => {
  const savedHandler = useRef<any>();

  useEffect(() => (savedHandler.current = handler), [handler]);

  const throttledOnScroll = useRef(throttle(() => savedHandler.current(), throttleTo));

  useEffect(() => {
    const currentThrottledOnScroll = throttledOnScroll.current;

    window.addEventListener("scroll", currentThrottledOnScroll);

    return () => window.removeEventListener("scroll", currentThrottledOnScroll);
  }, []);
};

export default useScroll;
