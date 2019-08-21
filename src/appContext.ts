import { createContext } from "react";

const AppContext = createContext({
  changeTheme: (): void | null => null
});

export default AppContext;
