import { createContext, useContext, useState } from "react";

const NavigationContext = createContext();
export const useNavigator = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <NavigationContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </NavigationContext.Provider>
  );
};
