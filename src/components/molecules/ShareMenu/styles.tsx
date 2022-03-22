import { ThemeType } from "@utils";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { scale } from "react-native-size-matters";

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
  appsContainer: { paddingHorizontal: scale(16) },
  container: (theme) => ({
    borderTopLeftRadius: scale(24),
    borderTopRightRadius: scale(24),
    backgroundColor: theme.colors.background,
  }),
  content: { marginVertical: scale(16) },
  button: {
    backgroundColor: "transparent",
    flexDirection: "column",
    marginEnd: scale(10),
    width: scale(50),
  },
  buttonText: {
    fontSize: scale(10),
  },
  optionsContainer: {
    flexDirection: "row",
    paddingHorizontal: scale(16),
    marginTop: scale(8),
  },
});
