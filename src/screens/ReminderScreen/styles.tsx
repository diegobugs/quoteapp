import { ThemeType } from "@utils";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { scale } from "react-native-size-matters";

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
    paddingHorizontal: scale(24),
  },
  day: {
    marginHorizontal: scale(1),
  },
  reminderHint: {
    marginTop: scale(16),
    fontSize: scale(12),
  },
  reminderBlock: (theme) => ({
    flexDirection: "row",
  }),
  reminderCard: (theme) => ({
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: scale(16),
    marginBottom: scale(8),
  }),
  title: { fontSize: scale(14), fontWeight: "600", marginBottom: 8 },
});
