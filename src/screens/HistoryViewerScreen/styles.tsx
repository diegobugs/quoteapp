import { ThemeType } from "@utils";
import { StyleSheet, ViewStyle } from "react-native";
import { scale } from "react-native-size-matters";

interface Styles {
  container: (theme: ThemeType) => ViewStyle;
  quoteContainer: (theme: ThemeType) => ViewStyle;
  [key: string]: any;
}

export const styles = StyleSheet.create<Styles>({
  container: (theme) => ({
    backgroundColor: theme.colors.primary,
    flex: 1,
    paddingHorizontal: scale(24),
  }),
  quoteContainer: (theme) => ({
    backgroundColor: theme.colors.primary,
    flex: 1,
    justifyContent: "center",
  }),
});
