import { ThemeType } from "@utils";
import { StyleSheet, ViewStyle } from "react-native";

interface Styles {
  container: (theme: ThemeType) => ViewStyle;
  quoteContainer: ViewStyle;
  [key: string]: any;
}

export const styles = StyleSheet.create<Styles>({
  container: (theme) => ({
    backgroundColor: theme.colors.primary,
    flex: 1,
    paddingHorizontal: 24,
  }),
  quoteContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
