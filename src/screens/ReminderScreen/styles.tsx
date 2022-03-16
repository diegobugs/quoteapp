import { ThemeType } from "@utils";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
  container: ViewStyle;
  day: TextStyle;
  reminderBlock: (theme: ThemeType) => ViewStyle;
  reminderCard: (theme: ThemeType) => ViewStyle;
  reminderHint: TextStyle;
  title: TextStyle;
  [key: string]: any;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  day: {
    marginHorizontal: 1,
  },
  reminderHint: {
    marginTop: 16,
  },
  reminderBlock: (theme) => ({
    flexDirection: "row",
  }),
  reminderCard: (theme) => ({
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    marginBottom: 8,
  }),
  title: { fontSize: 16, fontWeight: "600", marginBottom: 8 },
});
