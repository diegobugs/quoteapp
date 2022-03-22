import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { scale } from "react-native-size-matters";

interface Styles {
  container: ViewStyle;
  title: TextStyle;
  optionText: TextStyle;
  [key: string]: any;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    paddingHorizontal: scale(24),
  },
  title: { fontSize: scale(16), fontWeight: "600", marginBottom: 8 },
  optionText: {
    marginVertical: scale(8),
  },
});
