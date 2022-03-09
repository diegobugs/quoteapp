import { TextProps as RNTextProps } from 'react-native';

import { ThemeType } from '@utils';

export type AlignType = 'center' | 'left' | 'right';

export type FontFamily = 'AvenirNext' | 'Oswald';

export type FontWeight =
  | 'normal'
  | 'bold'
  | 'bolder'
  | 'lighter'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type TextProps = RNTextProps & {
  align?: AlignType;
  color?: Exclude<keyof ThemeType['colors'], 'opacity'>;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
};
