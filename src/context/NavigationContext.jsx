import { createContext, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <NavigationContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationProvider };