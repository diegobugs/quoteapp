import { useTheme } from "@react-navigation/native";
import { ThemeType } from "@utils";
import React from "react";
import { Path, Svg } from "react-native-svg";

export type LanguageIconProps = {
  fill?: Exclude<keyof ThemeType["colors"], "opacity">;
};

const LanguageIcon = ({ fill = "primary", ...props }: LanguageIconProps) => {
  const theme = useTheme() as ThemeType;
  const color: string = theme.colors[fill];

  return (
    <Svg viewBox="0 0 640 512" width={640} height={512} {...props}>
      <Path
        fill={color}
        d="M448 164c11 0 20 8.1 20 20v4h60c11 0 20 8.1 20 20 0 11-9 20-20 20h-2l-1.6 4.5c-8.9 23.6-22.5 46.6-39.7 65.4.9.5 1.8.2 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.8 27.5-5.6 9.5-17.9 12.5-27.4 6.8l-18.9-11.3c-4.4-2.7-9.7-5.5-13.1-8.5-10.5 7.5-21.9 14-33.9 19.4l-3.7 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-7 18.5-9.8l-12.1-12.2c-7.9-7.8-7.9-20.4 0-28.2 7.8-7.9 20.4-7.9 28.2 0l14.6 14.5.6-.3c12.4-12.2 22.5-27.4 29.8-45H376c-11.9 0-20-8.1-20-20 0-11 8.1-20 20-20h52v-4c0-11 8.1-20 20-20v.9zm-288 69.2l19 42.8h-38.9l19.9-42.8zM0 128c0-35.35 28.65-64 64-64h512c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128zm320 256h256V128H320v256zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-63.98 144c-4.48 9.2.06 21.9 10.16 26.4 10.09 4.5 21.92-.1 26.42-10.2l8.9-21h73.6l8.9 21c4.5 10.1 16.3 14.7 26.4 10.2 10.1-4.5 14.7-17.2 10.2-26.4l-64-144z"
      />
    </Svg>
  );
};

export default LanguageIcon;
