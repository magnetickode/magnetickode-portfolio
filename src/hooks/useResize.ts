import { useEffect, useRef } from "react";
import { throttle } from "lodash";

const useResize = (handler: () => void, throttleBy: number = 300) => {
  const savedHandler = useRef<any>();

  useEffect(() => (savedHandler.current = handler), [handler]);

  const throttledOnResize = useRef(throttle(() => savedHandler.current(), throttleBy));

  useEffect(() => {
    const currentThrottledOnResize = throttledOnResize.current;

    window.addEventListener("resize", currentThrottledOnResize);

    return () => window.removeEventListener("resize", currentThrottledOnResize);
  }, []);
};

export default useResize;
