"use client";
import React, { createContext, useContext } from "react";
import { menu_list } from "../../public/assets";

interface storeContextProviderProps {
  children: React.ReactNode;
}

type storeContextType = {
  menu_list: { menu_name: string; menu_image: string }[];
};

const storeContext = createContext<storeContextType | undefined>(undefined);

export default function StoreContextProvider({
  children,
}: storeContextProviderProps) {
  const contextValue = { menu_list };
  return (
    <storeContext.Provider value={contextValue}>
      {children}
    </storeContext.Provider>
  );
}

export function useStoreContext() {
  const context = useContext(storeContext);
  if (!context) {
    throw new Error(
      "useStoreContext must be used within a StoreContextProvider"
    );
  } else {
    return context;
  }
}
