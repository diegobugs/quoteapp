import { ThemeType } from "@utils";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
  appsContainer: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  container: (theme: ThemeType) => ViewStyle;
  content: ViewStyle;
  optionsContainer: ViewStyle;
  [key: string]: any;
}

export const styles = StyleSheet.create<Styles>({
  appsContainer: { paddingHorizontal: 24 },
  container: (theme) => ({
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: theme.colors.background,
  }),
  content: { marginVertical: 24 },
  button: {
    backgroundColor: "transparent",
    flexDirection: "column",
    marginEnd: 10,
    width: 60,
  },
  buttonText: {
    fontSize: 12,
  },
  optionsContainer: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginTop: 16,
  },
});
