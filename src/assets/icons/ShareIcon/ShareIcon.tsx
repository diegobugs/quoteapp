import { useTheme } from "@react-navigation/native";
import { ThemeType } from "@utils";
import React from "react";
import { Path, Svg } from "react-native-svg";

export type ShareIconProps = {
  fill?: Exclude<keyof ThemeType["colors"], "opacity">;
};

const ShareIcon = ({ fill = "primary", ...props }: ShareIconProps) => {
  const theme = useTheme() as ThemeType;
  const color: string = theme.colors[fill];

  return (
    <Svg viewBox="0 0 512 512" width={512} height={512} {...props}>
      <Path
        fill={color}
        d="M503.7 226.2l-176 151.1c-15.38 13.3-39.69 2.545-39.69-18.16V272.1C132.9 274.3 66.06 312.8 111.4 457.8c5.031 16.09-14.41 28.56-28.06 18.62C39.59 444.6 0 383.8 0 322.3 0 170.1 127.4 137.9 288 136V56.02c0-20.67 24.28-31.46 39.69-18.16l176 151.1c11.11 10.44 11.11 27.64.01 37.24z"
      />
    </Svg>
  );
};

export default ShareIcon;
