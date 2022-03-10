import { ThemeType } from "@utils";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
  bottomContainer: ViewStyle;
  button: (theme: ThemeType) => ViewStyle;
  container: (theme: ThemeType) => ViewStyle;
  header: ViewStyle;
  quoteAuthorText: TextStyle;
  quoteText: TextStyle;
  quoteContainer: ViewStyle;
  [key: string]: any;
}

export const styles = StyleSheet.create<Styles>({
  bottomContainer: {
    alignItems: "flex-end",
  },
  button: (theme) => ({
    backgroundColor: theme.colors.background,
  }),
  container: (theme) => ({
    backgroundColor: theme.colors.background,
    flex: 1,
    marginBottom: 10,
    paddingHorizontal: 24,
  }),
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quoteAuthorText: {
    marginTop: 10,
    fontSize: 16,
  },
  quoteText: {
    fontSize: 36,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  quoteContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
