import { StyleSheet, TextStyle } from "react-native";
import { scale } from "react-native-size-matters";

interface Styles {
  quoteAuthorText: TextStyle;
  quoteText: TextStyle;
  [key: string]: any;
}

export const styles = StyleSheet.create<Styles>({
  quoteAuthorText: {
    marginTop: scale(10),
    fontSize: scale(16),
  },
  quoteText: {
    fontSize: scale(36),
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
