import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
  quoteAuthorText: TextStyle;
  quoteText: TextStyle;
  [key: string]: any;
}

export const styles = StyleSheet.create<Styles>({
  quoteAuthorText: {
    marginTop: 10,
    fontSize: 16,
  },
  quoteText: {
    fontSize: 36,
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
