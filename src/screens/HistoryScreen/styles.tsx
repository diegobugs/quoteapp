import { ThemeType } from "@utils";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

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
    marginBottom: 10,
    paddingHorizontal: 24,
    paddingVertical: 24,
  }),
  item: {
    marginBottom: 8,
  },
  titleText: {
    marginBottom: 8,
  },
});
