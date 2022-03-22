import { ThemeType } from "@utils";
import { StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";
import { scale } from "react-native-size-matters";

interface Styles {
  action: ViewStyle;
  actionIcon: ViewStyle;
  actionText: TextStyle;
  container: ViewStyle;
  divider: (theme: ThemeType) => ViewStyle;
  leftContainer: (applyWidth: boolean) => ViewStyle;
  primaryText: TextStyle;
  shadowContainer: ViewStyle;
  startIcon: ViewStyle;
  textContainer: ViewStyle;
  textContainerPadding: ViewStyle;
  [key: string]: any;
}

export const styles = StyleSheet.create<Styles>({
  action: {
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
    padding: scale(5),
  },
  actionIcon: {
    width: scale(18),
    height: scale(18),
  },
  actionText: {
    fontSize: scale(10),
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    minHeight: scale(36),
    width: "100%",
  },
  divider: (theme: ThemeType) => ({
    borderWidth: Platform.OS === "android" ? scale(0.5) : scale(1),
    borderColor: theme.colors.border + theme.colors.opacity[10],
    width: "100%",
  }),
  leftContainer: (applyWidth) => ({
    minWidth: applyWidth ? scale(40) : 0,
  }),
  primaryText: {
    fontWeight: "normal",
    fontSize: scale(10),
  },
  shadowContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  startIcon: {
    marginRight: scale(8),
  },
  textContainer: {
    flex: 1,
  },
  textContainerPadding: {
    paddingHorizontal: scale(5),
  },
});
