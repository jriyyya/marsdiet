import useGlobalContext, { NavConfig } from "../contexts/globalContext";

export const navConfigDefault: NavConfig = {
  hidden: false,
  colorCycle: false,
  fixed: false,
};

export default function useNavbarConfig() {
  const global = useGlobalContext();

  function hide() {
    global.navConfig.set((config) => ({ ...config, hidden: true }));
  }

  function show() {
    global.navConfig.set((config) => ({ ...config, hidden: false }));
  }

  function disableColorCycle() {
    global.navConfig.set((config) => ({
      ...config,
      colorCycle: false,
    }));
  }

  function enableColorCycle() {
    global.navConfig.set((config) => ({
      ...config,
      colorCycle: true,
    }));
  }

  function setFixed(fixed: boolean) {
    global.navConfig.set((config) => ({
      ...config,
      fixed: fixed,
    }));
  }

  function reset() {
    global.navConfig.set(navConfigDefault);
  }
  return {
    value: global.navConfig.value,
    show,
    hide,
    enableColorCycle,
    disableColorCycle,
    setFixed,
    reset,
  };
}
