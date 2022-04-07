import { ThemeType } from "@utils";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { scale } from "react-native-size-matters";

interface Styles {
  container: (theme: ThemeType) => ViewStyle;
  item: ViewStyle;
  titleText: TextStyle;
  [key: string]: any;
}

export const styles = StyleSheet.create<Styles>({
  container: (theme) => ({
    backgroundColor: theme.colors.background,
    flex: 1,
    marginBottom: scale(36),
    paddingHorizontal: scale(24),
    paddingTop: scale(12),
  }),
  item: {
    marginBottom: scale(8),
  },
  titleText: {
    marginBottom: scale(8),
  },
});
