import { IconsList } from "../../../assets/icons";
import React, { useCallback, useMemo } from "react";
import {
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
  TextStyle,
  Pressable,
  StyleProp,
} from "react-native";
import { Platform } from "react-native";

import { useTheme } from "@react-navigation/native";

import Icon from "../Icon";
import Text, { TextProps } from "../Text";
import { ThemeType } from "@utils";

interface Styles {
  action: ViewStyle;
  actionIcon: ViewStyle;
  container: ViewStyle;
  divider: (theme: ThemeType) => ViewStyle;
  leftContainer: (applyWidth: boolean) => ViewStyle;
  primaryText: TextStyle;
  shadowContainer: ViewStyle;
  startIcon: ViewStyle;
  textContainer: ViewStyle;
  textContainerPadding: ViewStyle;
  [key: string]: any;
}

const styles = StyleSheet.create<Styles>({
  action: {
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
    padding: 5,
  },
  actionIcon: {
    width: 24,
    height: 24,
  },
  avatar: {
    alignItems: "center",
    marginRight: 5,
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    minHeight: 40,
    width: "100%",
  },
  divider: (theme: ThemeType) => ({
    borderWidth: Platform.OS === "android" ? 0.5 : 1,
    borderColor: theme.colors.border + theme.colors.opacity[10],
    width: "100%",
  }),
  leftContainer: (applyWidth) => ({
    minWidth: applyWidth ? 40 : 0,
  }),
  primaryText: {
    fontWeight: "normal",
  },
  shadowContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  startIcon: {
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
  },
  textContainerPadding: {
    paddingHorizontal: 5,
  },
});

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
      width: 24,
      height: 24,
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
            {actionText && actionText !== "" && <Text>{actionText}</Text>}
            {!disableActionIcon && (
              <Icon
                icon={actionIcon}
                style={[styles.actionIcon, actionStyle]}
                width={24}
                height={24}
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
