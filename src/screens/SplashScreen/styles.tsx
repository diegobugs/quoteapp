import { ThemeType } from "@utils";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { scale } from "react-native-size-matters";

interface Styles {
  container: (theme: ThemeType) => ViewStyle;
  logo: ImageStyle;
  title: TextStyle;
  [key: string]: any;
}

export const styles = StyleSheet.create<Styles>({
  container: (theme) => ({
    flex: 1,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  }),
  logo: { width: scale(256), height: scale(256) },
  title: {
    fontWeight: "600",
    fontSize: scale(16),
  },
});
