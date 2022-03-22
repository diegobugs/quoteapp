import { IconsList } from "../../../assets/icons";
import React, { useCallback, useMemo } from "react";
import { View, ViewProps, ViewStyle, Pressable, StyleProp } from "react-native";
import { Platform } from "react-native";

import { useTheme } from "@react-navigation/native";

import Icon from "../Icon";
import Text, { TextProps } from "../Text";
import { ThemeType } from "@utils";
import { scale } from "react-native-size-matters";
import { styles } from "./styles";

export type ListItemProps = ViewProps & {
  actionIcon?: IconsList;
  actionIconRotation?: number;
  actionStyle?: ViewStyle;
  actionText?: string;
  ActionTextProps?: Partial<TextProps>;
  disableActionIcon?: boolean;
  divider?: boolean;
  DividerProps?: Partial<ViewProps>;
  onActionPress?: () => void;
  primaryText?: string | React.ReactNode;
  PrimaryTextProps?: Partial<TextProps>;
  shadowStyle?: StyleProp<ViewStyle>;
  startIcon?: IconsList;
};

const ListItem = ({
  actionIcon = "arrowRight",
  actionText,
  actionStyle,
  disableActionIcon = false,
  divider = false,
  DividerProps,
  onActionPress,
  primaryText,
  PrimaryTextProps,
  shadowStyle,
  startIcon,
  style,
  ...props
}: ListItemProps) => {
  const theme = useTheme() as ThemeType;
  const { style: dividerStyle, ..._DividerProps } = {
    ...DividerProps,
  };
  const { style: primaryTextStyle, ..._PrimaryTextProps } = {
    ...PrimaryTextProps,
  };

  const iconDefaultProps = useMemo(() => {
    return {
      width: scale(18),
      height: scale(18),
    };
  }, []);

  const Action = useCallback(
    ({ children }) => {
      if (typeof onActionPress !== "undefined") {
        return (
          <Pressable onPress={onActionPress} style={styles.action}>
            {children}
          </Pressable>
        );
      }
      return <View style={styles.action}>{children}</View>;
    },
    [onActionPress]
  );
  return (
    <>
      <View
        style={[shadowStyle, styles.shadowContainer, styles.container, style]}
        {...props}
      >
        {startIcon && (
          <Icon
            icon={startIcon}
            {...iconDefaultProps}
            style={styles.startIcon}
          />
        )}
        <View style={[styles.textContainer]}>
          {typeof primaryText === "string" ? (
            primaryText !== "" ? (
              <Text
                style={[styles.primaryText, primaryTextStyle]}
                numberOfLines={1}
                {..._PrimaryTextProps}
              >
                {primaryText}
              </Text>
            ) : null
          ) : (
            primaryText
          )}
        </View>
        <Action>
          <>
            {actionText && actionText !== "" && (
              <Text style={styles.actionText}>{actionText}</Text>
            )}
            {!disableActionIcon && (
              <Icon
                icon={actionIcon}
                style={[styles.actionIcon, actionStyle]}
                width={scale(18)}
                height={scale(18)}
                fill={"text"}
              />
            )}
          </>
        </Action>
      </View>
      {divider && (
        <View
          style={[styles.divider(theme), dividerStyle]}
          {..._DividerProps}
        />
      )}
    </>
  );
};

export default React.memo(ListItem);
