import { ThemeType } from "@utils";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
  container: ViewStyle;
  title: TextStyle;
  optionText: TextStyle;
  [key: string]: any;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 8 },
  optionText: {
    marginVertical: 8,
  },
});
