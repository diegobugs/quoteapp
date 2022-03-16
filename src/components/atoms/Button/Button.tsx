import React, { useRef } from "react";
import { GestureResponderEvent, Pressable, View } from "react-native";

import { useTheme } from "@react-navigation/native";

import Text from "../Text";
import { styles } from "./styles";
import { ButtonProps } from "./types";
import { ThemeType } from "@utils";

const iconColors: {
  [key: string]: keyof Exclude<ThemeType["colors"], "opacity">;
} = {
  contained: "primaryContrast",
  contained_pressed: "primaryContrast",
  outlined: "secondary",
  outlined_pressed: "primary",
};

const Button = ({
  children,
  disabled,
  disableDisabledStyle,
  disableSafeTouch = false,
  disableShadow = false,
  fullWidth,
  startIcon,
  shadowStyle,
  style,
  TextStyle,
  variant = "contained",
  onPress,
  ...props
}: ButtonProps) => {
  const theme = useTheme() as ThemeType;
  const _style = ({ pressed }: { pressed: boolean }) => [
    styles.pressable_common,
    pressed
      ? styles[`pressable_${variant}_pressed`](theme)
      : styles[
          `pressable_${variant}${
            disabled && !disableDisabledStyle ? "_disabled" : ""
          }`
        ](theme),
    fullWidth ? styles.fullWidth : null,
    { ...(!disableShadow && _shadowStyle) },
    style,
  ];
  const isTouched = useRef(false);

  const handleOnPress = (e: GestureResponderEvent) => {
    if (isTouched.current && !disableSafeTouch) {
      return;
    }
    isTouched.current = true;
    setTimeout(() => {
      isTouched.current = false;
    }, 350);

    if (typeof onPress === "function") {
      onPress(e);
    }
  };

  const _shadowStyle = [
    styles.shadow,
    styles[`pressable_${variant}${disabled ? "_disabled" : ""}_shadow`](theme),
    fullWidth ? styles.fullWidth : null,
    shadowStyle,
  ];

  const iconDefaultProps = (pressed: boolean) => {
    return {
      width: 24,
      height: 24,
      fill: pressed ? iconColors[`${variant}_pressed`] : iconColors[variant],
    };
  };

  return (
    <Pressable
      style={_style}
      disabled={disabled}
      onPress={handleOnPress}
      {...props}
    >
      {({ pressed }) =>
        typeof children === "string" ? (
          <>
            {startIcon && (
              <View style={styles.startIcon}>
                {React.cloneElement(startIcon, iconDefaultProps(pressed))}
              </View>
            )}
            <Text
              align="center"
              style={[
                styles.text_common,
                pressed
                  ? styles[`text_${variant}_pressed`](theme)
                  : styles[
                      `text_${variant}${
                        disabled && !disableDisabledStyle ? "_disabled" : ""
                      }`
                    ](theme),
                TextStyle,
              ]}
            >
              {
                // TODO Preguntar a clara por que hace falta el string pero primero fijarse en el componente TEXT que onda el children
                children as string
              }
            </Text>
          </>
        ) : (
          children
        )
      }
    </Pressable>
  );
};

export default Button;
