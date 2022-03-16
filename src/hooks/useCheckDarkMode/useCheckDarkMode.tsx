import { useColorScheme } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootStoreType } from "@store";

const useCheckDarkMode = () => {
  const isNativeDarkMode = useColorScheme() === "dark";
  const settings = useSelector((state: RootStoreType) => state.settings);
  const [darkMode, setDarkMode] = useState(settings.darkMode);

  useEffect(() => {
    if (typeof settings.darkMode === "undefined") {
      setDarkMode(isNativeDarkMode);
    } else {
      setDarkMode(settings.darkMode);
    }
  }, [isNativeDarkMode, settings.darkMode]);

  return darkMode;
};

export default useCheckDarkMode;
