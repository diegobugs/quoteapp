import { ThemeType } from "@utils";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { scale } from "react-native-size-matters";

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
  timeContainer: ViewStyle;
  timeText: TextStyle;
  [key: string]: any;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    paddingHorizontal: scale(24),
    marginVertical: scale(16),
  },
  day: {
    width: scale(32),
    height: scale(32),
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
  },
  daySelected: (theme) => ({
    borderWidth: scale(1),
    borderRadius: scale(32),
    borderColor: theme.colors.success,
    opacity: 1,
  }),
  daysContainer: (theme) => ({
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: theme.colors.primary,
    paddingVertical: scale(16),
    borderRadius: scale(12),
  }),
  flex: { flex: 1 },
  reminderHint: {
    marginTop: scale(16),
  },
  reminderBlock: (theme) => ({
    flexDirection: "row",
  }),
  reminderCard: (theme) => ({
    backgroundColor: theme.colors.primary,
    borderRadius: scale(12),
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: scale(16),
    marginBottom: scale(8),
  }),
  row: { flexDirection: "row" },
  timeContainer: { justifyContent: "center", flex: 1, alignItems: "center" },
  timeText: { fontSize: scale(80) },
});
