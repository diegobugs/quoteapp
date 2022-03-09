import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text as RNText } from 'react-native';

import { ThemeType } from '@utils';

import styles from './styles';
import { TextProps } from './types';

const Text: React.FunctionComponent<TextProps> = ({
  align = 'left',
  children,
  color = 'text',
  fontFamily = 'AvenirNext',
  fontWeight = 'normal',
  style,

  ...props
}) => {
  const theme = useTheme() as ThemeType;
  return (
    <RNText
      style={[
        styles.common(fontFamily),
        styles.color(theme, color),
        styles.text_align(align),
        styles[`fontWeight_${fontWeight}`](fontFamily),
        style,
      ]}
      {...props}>
      {children}
    </RNText>
  );
};

export default Text;
