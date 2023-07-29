import React, { ReactNode, createContext, useContext, useState } from "react";
import { navConfigDefault } from "../hooks/useNavbarConfig";

interface GlobalContextType {
  modalState: {
    modal: ReactNode;
    setModal: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  };
  navConfig: {
    value: NavConfig;
    set: React.Dispatch<React.SetStateAction<NavConfig>>;
  };
}

export interface NavConfig {
  hidden: boolean;
  colorCycle: boolean;
  fixed: boolean;
}

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ReactNode | null>();
  const [navConfig, setNavConfig] = useState<NavConfig>(navConfigDefault);
  const value: GlobalContextType = {
    modalState: { modal, setModal },
    navConfig: { value: navConfig, set: setNavConfig },
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export default function useGlobalContext() {
  return useContext(GlobalContext);
}
