import { useState, useLayoutEffect, Dispatch, SetStateAction } from "react";

const useStorage = (
  state: any,
  setState: Dispatch<SetStateAction<any>>,
  storageType: "local" | "session",
  dataKey: string
) => {
  const [initiallyRendered, setInitiallyRendered] = useState(false);

  useLayoutEffect(() => {
    if (initiallyRendered) {
      if (storageType === "local") {
        localStorage.setItem(dataKey, JSON.stringify(state));
      } else {
        sessionStorage.setItem(dataKey, JSON.stringify(state));
      }
    } else {
      setInitiallyRendered(true);
      if (storageType === "local") {
        const value = localStorage.getItem(dataKey);

        if (value) {
          setState(JSON.parse(value));
        }
      } else {
        const value = sessionStorage.getItem(dataKey);

        if (value) {
          setState(JSON.parse(value));
        }
      }
    }
  }, [initiallyRendered, state, setState, storageType, dataKey]);
};

export default useStorage;
