import {
  DefaultTheme,
  DarkTheme as RNDarkTheme,
} from "@react-navigation/native";

import { ThemeType } from "./types";

const opacity = {
  10: "1A",
  20: 33,
  30: "4D",
  40: 66,
  50: 80,
  60: 90,
  70: "AA",
  80: "CC",
  90: "DD",
  100: "FF",
};

const Theme: ThemeType = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#809BCE",
    background: "#FFFFFF",
    card: "#FFFFFF",
    text: "#000000",
    border: "#adabb6",
    notification: "rgb(255, 69, 58)",
    disabled: "#AEAEAE",
    disabledContrast: "#FFFFFF",
    error: "#F92F2F",
    primaryContrast: "#FFFFFF",
    rejected: "#C70B6F",
    rejectedContrast: "#FFFFFF",
    secondary: "#95B8D1",
    secondaryContrast: "#353535",
    success: "#B8E0D2",
    successContrast: "#353535",
    opacity,
    warning: "#D6EADF",
  },
};

const DarkTheme: ThemeType = {
  ...RNDarkTheme,
  colors: {
    ...RNDarkTheme.colors,
    primary: "#394c6f",
    background: "#111724",
    card: "#111724",
    text: "#FFFFFF",
    border: "#adabb6",
    notification: "rgb(255, 69, 58)",
    disabled: "#AEAEAE",
    disabledContrast: "#FFFFFF",
    error: "#F92F2F",
    primaryContrast: "#FFFFFF",
    rejected: "#C70B6F",
    rejectedContrast: "#FFFFFF",
    secondary: "#95B8D1",
    secondaryContrast: "#353535",
    success: "#B8E0D2",
    successContrast: "#353535",
    opacity,
    warning: "#D6EADF",
  },
};

export { Theme, DarkTheme };
