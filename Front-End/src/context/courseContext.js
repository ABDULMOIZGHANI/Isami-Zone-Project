import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
