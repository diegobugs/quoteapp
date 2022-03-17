import { ThemeType } from "@utils";
import { StyleSheet, ViewStyle } from "react-native";

interface Styles {
  button: (theme: ThemeType) => ViewStyle;
  header: ViewStyle;
  quoteButtons: ViewStyle;
  [key: string]: any;
}

export const styles = StyleSheet.create<Styles>({
  button: (theme) => ({
    backgroundColor: theme.colors.primary,
  }),
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quoteButtons: {
    flexDirection: "row",
  },
});
