import React from "react";
import { NavigationProvider } from "../NavigationContext";
import { LoadingProvider } from "../LoadingContext";

const Providers = ({ children }) => {
  return (
    <LoadingProvider>
      <NavigationProvider>
        {children}
      </NavigationProvider>
    </LoadingProvider>
  );
};

export default Providers;
