import { createContext } from "react";

import { ContextType } from "./types";

export const initialContextValue: ContextType = {
  isDesktop: window.innerWidth >= 720
};

const Context = createContext(initialContextValue);

export default Context;
