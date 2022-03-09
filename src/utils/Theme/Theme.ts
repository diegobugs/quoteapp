import {
  DefaultTheme,
  DarkTheme as RNDarkTheme,
} from '@react-navigation/native';

import { ThemeType } from './types';

const opacity = {
  10: '1A',
  20: 33,
  30: '4D',
  40: 66,
  50: 80,
  60: 90,
  70: 'AA',
  80: 'CC',
  90: 'DD',
  100: 'FF',
};

const Theme: ThemeType = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(123, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    disabled: '#AEAEAE',
    disabledContrast: '#FFFFFF',
    error: '#F92F2F',
    primaryContrast: '#FFFFFF',
    rejected: '#C70B6F',
    rejectedContrast: '#FFFFFF',
    secondary: '#ECE8E0',
    secondaryContrast: '#353535',
    success: '#0BC7C1',
    successContrast: '#FFFFFF',
    opacity,
    warning: '#FFA200',
  },
};

const DarkTheme: ThemeType = {
  ...RNDarkTheme,
  colors: {
    ...RNDarkTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(123, 123, 122)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    disabled: '#AEAEAE',
    disabledContrast: '#FFFFFF',
    error: '#F92F2F',
    primaryContrast: '#FFFFFF',
    rejected: '#C70B6F',
    rejectedContrast: '#FFFFFF',
    secondary: '#ECE8E0',
    secondaryContrast: '#353535',
    success: '#0BC7C1',
    successContrast: '#FFFFFF',
    opacity,
    warning: '#FFA200',
  },
};

export { Theme, DarkTheme };
