import { ThemeType } from "@utils";
import { StyleSheet } from "react-native";

import { scale } from "react-native-size-matters";

import { Styles } from "./types";

export const styles: Styles = StyleSheet.create<Styles>({
  fullWidth: {
    width: "100%",
  },
  pressable_common: {
    alignContent: "center",
    alignItems: "center",
    borderRadius: scale(12),
    display: "flex",
    flexDirection: "row",
    height: scale(50),
    minHeight: scale(48),
    minWidth: scale(48),
    justifyContent: "center",
  },

  pressable_contained: (theme: ThemeType) => ({
    backgroundColor: theme.colors.primary,
  }),
  pressable_contained_shadow: (theme: ThemeType) => ({
    shadowColor: theme.colors.primary,
  }),
  pressable_contained_disabled: (theme: ThemeType) => ({
    backgroundColor: theme.colors.disabled,
  }),
  pressable_contained_disabled_shadow: (theme: ThemeType) => ({
    shadowColor: theme.colors.disabled,
  }),
  pressable_contained_pressed: (theme: ThemeType) => ({
    opacity: 0.5,
  }),
  pressable_text: (theme: ThemeType) => ({}),
  pressable_text_shadow: (theme: ThemeType) => ({
    shadowColor: theme.colors.primary,
  }),
  pressable_text_disabled: (theme: ThemeType) => ({}),
  pressable_text_disabled_shadow: (theme: ThemeType) => ({
    shadowColor: theme.colors.disabled,
  }),
  pressable_text_pressed: (theme: ThemeType) => ({
    opacity: 0.5,
  }),

  startIcon: {
    paddingRight: 0,
    position: "absolute",
    left: scale(36),
  },

  text_contained: (theme: ThemeType) => ({
    color: theme.colors.primaryContrast,
  }),
  text_contained_disabled: (theme: ThemeType) => ({
    color: theme.colors.disabledContrast,
  }),
  text_contained_pressed: (theme: ThemeType) => ({
    color: theme.colors.primaryContrast,
  }),
  text_common: {
    flex: 1,
  },
  text_text: (theme: ThemeType) => ({
    color: theme.colors.primary,
  }),
  text_text_disabled: (theme: ThemeType) => ({
    color: theme.colors.disabled,
  }),
  text_text_pressed: (theme: ThemeType) => ({
    opacity: 0.5,
  }),
  shadow: {
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,

    // Android
    elevation: 5,
  },
});
