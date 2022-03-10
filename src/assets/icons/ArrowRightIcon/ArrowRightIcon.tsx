import { useTheme } from "@react-navigation/native";
import { ThemeType } from "@utils";
import React from "react";
import { Path, Svg } from "react-native-svg";

export type ArrowRightIconProps = {
  fill?: Exclude<keyof ThemeType["colors"], "opacity">;
};

const ArrowRightIcon = ({
  fill = "primary",
  ...props
}: ArrowRightIconProps) => {
  const theme = useTheme() as ThemeType;
  const color: string = theme.colors[fill];

  return (
    <Svg viewBox="0 0 256 512" width={256} height={512} {...props}>
      <Path
        fill={color}
        d="M64 448c-8.188 0-16.38-3.125-22.62-9.375-12.5-12.5-12.5-32.75 0-45.25L178.8 256 41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
      />
    </Svg>
  );
};

export default ArrowRightIcon;
