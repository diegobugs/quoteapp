import { ThemeType } from "@utils";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
  container: ViewStyle;
  day: ViewStyle;
  daySelected: (theme: ThemeType) => ViewStyle;
  daysContainer: (theme: ThemeType) => ViewStyle;
  flex: ViewStyle;
  reminderBlock: (theme: ThemeType) => ViewStyle;
  reminderCard: (theme: ThemeType) => ViewStyle;
  reminderHint: TextStyle;
  row: ViewStyle;
  title: TextStyle;
  [key: string]: any;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginVertical: 16,
  },
  day: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
  },
  daySelected: (theme) => ({
    borderWidth: 1,
    borderRadius: 32,
    borderColor: theme.colors.success,
    opacity: 1,
  }),
  daysContainer: (theme) => ({
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: theme.colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
  }),
  flex: { flex: 1 },
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
  row: { flexDirection: "row" },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 8 },
});
