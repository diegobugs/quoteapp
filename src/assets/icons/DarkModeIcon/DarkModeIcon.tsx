import { useTheme } from "@react-navigation/native";
import { ThemeType } from "@utils";
import React from "react";
import { Path, Svg } from "react-native-svg";

export type DarkModeIconProps = {
  fill?: Exclude<keyof ThemeType["colors"], "opacity">;
};

const DarkModeIcon = ({ fill = "primary", ...props }: DarkModeIconProps) => {
  const theme = useTheme() as ThemeType;
  const color: string = theme.colors[fill];

  return (
    <Svg viewBox="0 0 512 512" width={512} height={512} {...props}>
      <Path
        fill={color}
        d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 64v384c106 0 192-86 192-192 0-106.9-86-192-192-192z"
      />
    </Svg>
  );
};

export default DarkModeIcon;
