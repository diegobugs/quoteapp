import React, { useEffect, useRef, useState } from "react";
import {
  Text as RNText,
  TextStyle,
  Platform,
  NativeSyntheticEvent,
  TextLayoutEventData,
  StyleProp,
} from "react-native";

import { useTheme } from "@react-navigation/native";
import { ThemeType } from "@utils";
import styles from "./styles";
import { TextProps } from "./types";

const Text: React.FunctionComponent<TextProps> = ({
  align = "left",
  allowAutoSize = false,
  children,
  color = "text",
  style,
  numberOfLines,
  containerLayout,
  ...props
}) => {
  const theme = useTheme() as ThemeType;
  const defaultFontSize = useRef<number>(style?.fontSize || 60);
  const [scaleSize, setScaleSize] = useState(defaultFontSize.current);
  let autoSizedChildren = useRef<React.ReactNode>();

  useEffect(() => {
    if (
      allowAutoSize &&
      (typeof numberOfLines === "undefined" || numberOfLines > 1) &&
      typeof containerLayout === "undefined"
    ) {
      console.warn(
        "Multiline text autosize work only when containerLayout is defined"
      );
    }
  }, []);

  // Funcion que se ejecuta cuando se muestra en pantalla el texto
  // En esta funcion se evalue autosize
  // Si allowAutoSize es verdadero, se controla que las lineas no superen 1
  // Se disminuye el tamaño de la fuente de a 5 hasta que ocupe una sola línea
  const handleTextLayout = (
    event: NativeSyntheticEvent<TextLayoutEventData>
  ) => {
    if (allowAutoSize) {
      const { lines } = event.nativeEvent;

      if (numberOfLines === 1) {
        if (lines.length > 1 && scaleSize > 5) {
          setScaleSize((prev: number) => prev - 5);
        }
      } else {
        if (children !== autoSizedChildren.current && containerLayout) {
          const { height, width } = containerLayout;
          const textLength = children?.toString().length;
          if (textLength) {
            const fontSize = Math.sqrt((width * height) / textLength);
            if (fontSize < defaultFontSize.current) {
              setScaleSize(fontSize);
              autoSizedChildren.current = children;
            }
          }
        }
      }
    }
  };

  let _style = style;
  if (Platform.OS === "android") {
    if (style && style.fontWeight) {
      // @ts-ignore
      const { fontWeight, fontStyle, ...oldStyle } = style;
      const isItalic = fontStyle === "italic";
      _style = [
        oldStyle,
        styles[`fontWeight_${fontWeight}${isItalic ? "Italic" : ""}`],
      ];
    } else {
      if (typeof style !== "undefined") {
        Object.values(style).map((_xstyle) => {
          if (_xstyle && _xstyle.fontWeight) {
            const { fontWeight, fontStyle, ...oldStyle } = _xstyle;
            const isItalic = fontStyle === "italic";
            _style = [
              oldStyle,
              styles[`fontWeight_${fontWeight}${isItalic ? "Italic" : ""}`],
            ];
          }
        });
      }
    }
  }

  // Estilo a aplicar
  // Condicionalmente se establece el fontSize si es que allowAutoSize es true
  // Esto hace que el tamaño del texto cambie dinamicamente
  const textStyle: StyleProp<TextStyle> = [
    styles.common,
    styles.color(theme, color),
    styles.text_align(align),
    _style,
    allowAutoSize && { fontSize: scaleSize },
  ];

  return (
    <RNText style={textStyle} onTextLayout={handleTextLayout} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
