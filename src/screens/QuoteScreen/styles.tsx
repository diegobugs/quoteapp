import { ThemeType } from "@utils";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
  bottomContainer: ViewStyle;
  button: (theme: ThemeType) => ViewStyle;
  container: (theme: ThemeType) => ViewStyle;
  quoteContainer: (theme: ThemeType) => ViewStyle;
  [key: string]: any;
}

export const styles = StyleSheet.create<Styles>({
  bottomContainer: {
    alignItems: "flex-end",
  },
  button: (theme) => ({
    backgroundColor: theme.colors.primary,
  }),
  container: (theme) => ({
    backgroundColor: theme.colors.primary,
    flex: 1,
    paddingHorizontal: 24,
  }),
  quoteContainer: (theme) => ({
    backgroundColor: theme.colors.primary,
    flex: 1,
    justifyContent: "center",
  }),
});
