import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { scale } from "react-native-size-matters";

interface Styles {
  quoteAuthorText: TextStyle;
  quoteContainer: ViewStyle;
  quoteText: TextStyle;
  [key: string]: any;
}

export const styles = StyleSheet.create<Styles>({
  quoteAuthorText: {
    marginTop: scale(10),
    fontSize: scale(16),
  },
  quoteContainer: { flex: 1, width: "100%", justifyContent: "center" },
  quoteText: {
    fontSize: scale(36),
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
