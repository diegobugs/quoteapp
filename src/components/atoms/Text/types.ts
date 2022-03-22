import { TextProps as RNTextProps, TextStyle } from "react-native";

import { ThemeType } from "@utils";

export type AlignType = "center" | "left" | "right";

export type FontFamily = "AvenirNext" | "Oswald" | "Roboto" | "Montserrat";

export type FontWeight =
  | "normal"
  | "bold"
  | "bolder"
  | "lighter"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type TextProps = RNTextProps & {
  align?: AlignType;
  allowAutoSize?: boolean;
  color?: Exclude<keyof ThemeType["colors"], "opacity">;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  style?: TextStyle;
};
