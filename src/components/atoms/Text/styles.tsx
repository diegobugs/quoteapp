import { StyleSheet, TextStyle } from 'react-native';

import { ThemeType } from '@utils';

import { AlignType, FontFamily } from './types';

type TextStyleWithFamily = (family: FontFamily) => TextStyle;
interface Styles {
  common: TextStyleWithFamily;
  color: (
    theme: ThemeType,
    _color: Exclude<keyof ThemeType['colors'], 'opacity'>,
  ) => TextStyle;
  text_align: (align: AlignType) => TextStyle;

  fontWeight_normal: TextStyleWithFamily;
  fontWeight_bold: TextStyleWithFamily;
  fontWeight_bolder: TextStyleWithFamily;
  fontWeight_lighter: TextStyleWithFamily;
  fontWeight_200: TextStyleWithFamily;
  fontWeight_300: TextStyleWithFamily;
  fontWeight_400: TextStyleWithFamily;
  fontWeight_500: TextStyleWithFamily;
  fontWeight_600: TextStyleWithFamily;
  fontWeight_700: TextStyleWithFamily;
  fontWeight_800: TextStyleWithFamily;
  fontWeight_900: TextStyleWithFamily;

  [key: string]: any;
}

// TODO hacer el tipado para que las funciones sean opcionales cuando se usan
const styles: Styles = StyleSheet.create<Styles>({
  common: family => ({
    fontFamily: `${family}-Regular`,
  }),
  color: (theme, _color) => ({
    color: theme.colors[_color],
  }),
  text_align: align => ({ textAlign: align }),

  fontWeight_normal: family => ({
    fontFamily: `${family}-Regular`,
    fontWeight: 'normal',
  }),
  fontWeight_bold: family => ({
    fontFamily: `${family}-Bold`,
    fontWeight: 'bold',
  }),
  fontWeight_bolder: family => ({
    fontFamily: `${family}-Bold`,
    fontWeight: 'bold',
  }),
  fontWeight_lighter: family => ({
    fontFamily: `${family}-ExtraLight`,
    fontWeight: '200',
  }),
  fontWeight_200: family => ({
    fontFamily: `${family}-ExtraLight`,
    fontWeight: '200',
  }),
  fontWeight_300: family => ({
    fontFamily: `${family}-Light`,
    fontWeight: '300',
  }),
  fontWeight_400: family => ({
    fontFamily: `${family}-Regular`,
    fontWeight: '400',
  }),
  fontWeight_500: family => ({
    fontFamily: `${family}-Medium`,
    fontWeight: '500',
  }),
  fontWeight_600: family => ({
    fontFamily: `${family}-${family === 'Oswald' ? 'SemiBold' : 'DemiBold'}`,
    fontWeight: '600',
  }),
  fontWeight_700: family => ({
    fontFamily: `${family}-Bold`,
    fontWeight: '700',
  }),
  fontWeight_800: family => ({
    fontFamily: `${family}-Bold`,
    fontWeight: '800',
  }),
  fontWeight_900: family => ({
    fontFamily: `${family}-Bold`,
    fontWeight: '900',
  }),
});

export default styles;
