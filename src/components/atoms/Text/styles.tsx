import { StyleSheet, TextStyle } from "react-native";
import { scale } from "react-native-size-matters";
import { ThemeType } from "@utils";

import { AlignType, FontFamily } from "./types";

type TextStyleWithFamily = (family: FontFamily) => TextStyle;
interface Styles {
  common: TextStyle;
  color: (
    theme: ThemeType,
    _color: Exclude<keyof ThemeType["colors"], "opacity">
  ) => TextStyle;
  text_align: (align: AlignType) => TextStyle;
  fontWeight_normal: TextStyle;
  fontWeight_bold: TextStyle;
  fontWeight_bolder: TextStyle;
  fontWeight_lighter: TextStyle;
  fontWeight_200: TextStyle;
  fontWeight_300: TextStyle;
  fontWeight_400: TextStyle;
  fontWeight_600: TextStyle;
  fontWeight_700: TextStyle;
  fontWeight_800: TextStyle;
  fontWeight_900: TextStyle;
  [key: string]: any;
}

const fontWeights = {
  fontWeight_normal: {
    fontFamily: "Montserrat-Regular",
  },
  fontWeight_bold: {
    fontFamily: "Montserrat-Bold",
  },
  fontWeight_boldItalic: {
    fontFamily: "Montserrat-BoldItalic",
  },
  fontWeight_bolder: {
    fontFamily: "Montserrat-ExtraBold",
  },
  fontWeight_bolderItalic: {
    fontFamily: "Montserrat-ExtraBoldItalic",
  },
  fontWeight_lighter: {
    fontFamily: "Montserrat-ExtraLight",
  },
  fontWeight_lighterItalic: {
    fontFamily: "Montserrat-ExtraLightItalic",
  },
  fontWeight_100: {
    fontFamily: "Montserrat-Thin",
  },
  fontWeight_100Italic: {
    fontFamily: "Montserrat-ThinItalic",
  },
  fontWeight_200: {
    fontFamily: "Montserrat-ExtraLight",
  },
  fontWeight_200Italic: {
    fontFamily: "Montserrat-ExtraLightItalic",
  },
  fontWeight_300: {
    fontFamily: "Montserrat-Light",
  },
  fontWeight_300Italic: {
    fontFamily: "Montserrat-LightItalic",
  },
  fontWeight_400: {
    fontFamily: "Montserrat-Regular",
  },
  fontWeight_400Italic: {
    fontFamily: "Montserrat-Italic",
  },
  fontWeight_500: {
    fontFamily: "Montserrat-Medium",
  },
  fontWeight_500Italic: {
    fontFamily: "Montserrat-MediumItalic",
  },
  fontWeight_600: {
    fontFamily: "Montserrat-SemiBold",
  },
  fontWeight_600Italic: {
    fontFamily: "Montserrat-SemiBoldItalic",
  },
  fontWeight_700: {
    fontFamily: "Montserrat-Bold",
  },
  fontWeight_700Italic: {
    fontFamily: "Montserrat-BoldItalic",
  },
  fontWeight_800: {
    fontFamily: "Montserrat-ExtraBold",
  },
  fontWeight_800Italic: {
    fontFamily: "Montserrat-ExtraBoldItalic",
  },
  fontWeight_900: {
    fontFamily: "Montserrat-Black",
  },
  fontWeight_900Italic: {
    fontFamily: "Montserrat-BlackItalic",
  },
};

const styles: Styles = StyleSheet.create<Styles>({
  common: {
    fontFamily: "Montserrat-Regular",
    fontSize: scale(14),
  },
  color: (
    theme: ThemeType,
    _color: Exclude<keyof ThemeType["colors"], "opacity">
  ) => ({
    color: theme.colors[_color],
  }),
  text_align: (align: AlignType) => ({ textAlign: align }),
  ...fontWeights,
});

export default styles;
