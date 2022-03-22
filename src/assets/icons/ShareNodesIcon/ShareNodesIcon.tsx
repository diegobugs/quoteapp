import { useTheme } from "@react-navigation/native";
import { ThemeType } from "@utils";
import React from "react";
import { Path, Svg } from "react-native-svg";

export type ShareNodesIconProps = {
  fill?: Exclude<keyof ThemeType["colors"], "opacity">;
};

const ShareNodesIcon = ({
  fill = "primary",
  ...props
}: ShareNodesIconProps) => {
  const theme = useTheme() as ThemeType;
  const color: string = theme.colors[fill];

  return (
    <Svg viewBox="0 0 448 512" width={448} height={512} {...props}>
      <Path
        fill={color}
        d="M448 127.1c0 53.9-43 96-96 96-25.9 0-49.4-9.3-66.6-26l-94.1 47c.5 3.9-.2 7-.2 11.9 0 4 .7 7.1.2 11.9l94.1 47c17.2-16.7 40.7-26.9 66.6-26.9 53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96 0-4.9.2-8 .7-11.9l-94.1-47C145.4 341.8 121.9 352 96 352c-53.02 0-96-43-96-96 0-53.9 42.98-96 96-96 25.9 0 49.4 10.2 66.6 26.9l94.1-47c-.5-4.8-.7-7.9-.7-11.9 0-53.02 42.1-96 96-96 53 0 96 42.98 96 96v-.9zm-352.9 160c18.6 0 32-13.4 32-32 0-16.8-13.4-32-32-32-16.77 0-32 15.2-32 32 0 18.6 15.23 32 32 32zM352 95.1c-17.7 0-32 15.2-32 32 0 18.6 14.3 32 32 32s32-13.4 32-32c0-16.8-14.3-32-32-32zm0 320.9c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"
      />
    </Svg>
  );
};

export default ShareNodesIcon;
