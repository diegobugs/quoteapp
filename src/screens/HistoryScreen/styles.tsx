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
    marginBottom: scale(10),
    paddingHorizontal: scale(24),
    paddingVertical: scale(24),
  }),
  item: {
    marginBottom: scale(8),
  },
  titleText: {
    marginBottom: scale(8),
  },
});
