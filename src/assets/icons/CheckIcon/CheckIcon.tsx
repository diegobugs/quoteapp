import { useTheme } from "@react-navigation/native";
import { ThemeType } from "@utils";
import React from "react";
import { Path, Svg } from "react-native-svg";

export type CheckIconProps = {
  fill?: Exclude<keyof ThemeType["colors"], "opacity">;
};

const CheckIcon = ({ fill = "success", ...props }: CheckIconProps) => {
  const theme = useTheme() as ThemeType;
  const color: string = theme.colors[fill];

  return (
    <Svg viewBox="0 0 448 512" width={448} height={512} {...props}>
      <Path
        fill={color}
        d="M438.6 105.4c12.5 12.5 12.5 32.7 0 45.2l-256 256c-12.5 12.5-32.7 12.5-45.2 0L9.372 278.6c-12.496-12.5-12.496-32.7 0-45.2 12.498-12.5 32.758-12.5 45.258 0L159.1 338.7l234.3-233.3c12.5-12.52 32.7-12.52 45.2 0z"
      />
    </Svg>
  );
};

export default CheckIcon;
