import { useTheme } from "@react-navigation/native";
import { ThemeType } from "@utils";
import React from "react";
import { Path, Svg } from "react-native-svg";

export type BellIconProps = {
  fill?: Exclude<keyof ThemeType["colors"], "opacity">;
};

const BellIcon = ({ fill = "primary", ...props }: BellIconProps) => {
  const theme = useTheme() as ThemeType;
  const color: string = theme.colors[fill];

  return (
    <Svg viewBox="0 0 448 512" width={448} height={512} {...props}>
      <Path
        fill={color}
        d="M256 32v17.88C328.5 61.39 384 124.2 384 200v33.4c0 45.4 15.5 89.5 43.8 125l14.9 18.6c5.8 7.2 6.9 17.1 2.9 25.4-4 8.3-12.4 13.6-21.6 13.6H24c-9.23 0-17.635-5.3-21.631-13.6A24.019 24.019 0 015.26 377l14.91-18.6C48.54 322.9 64 278.8 64 233.4V200c0-75.8 55.5-138.61 128-150.12V32c0-17.67 14.3-32 32-32s32 14.33 32 32zm-40 64c-57.4 0-104 46.6-104 104v33.4c0 47.9-13.88 94.6-39.69 134.6H375.7c-25.8-40-39.7-86.7-39.7-134.6V200c0-57.4-46.6-104-104-104h-16zm72 352c0 16.1-6.7 33.3-18.7 45.3S240.1 512 224 512c-17 0-33.3-6.7-45.3-18.7S160 464.1 160 448h128z"
      />
    </Svg>
  );
};

export default BellIcon;