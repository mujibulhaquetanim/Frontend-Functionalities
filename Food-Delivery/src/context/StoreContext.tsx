import React, { createContext } from "react";
import { menu_list } from "../../public/assets";
import { StaticImageData } from "next/image";

interface storeContextProviderProps {
  children: React.ReactNode;
}

type storeContextType = {
  menu_list: { menu_name: string; menu_image: StaticImageData }[];
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
