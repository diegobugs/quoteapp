import { Theme } from '@react-navigation/native';

export type Opacity = { [key: number]: string | number };

export type ThemeType = Theme & {
  colors: {
    disabled: string;
    disabledContrast: string;
    error: string;
    opacity: Opacity;
    primaryContrast: string;
    rejected: string;
    rejectedContrast: string;
    secondary: string;
    secondaryContrast: string;
    success: string;
    successContrast: string;
    warning: string;
  };
};
