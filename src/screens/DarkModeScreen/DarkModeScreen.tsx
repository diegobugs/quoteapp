import { ListItem } from "@atoms";
import { MainStackParamList } from "@navigator";
import { NavigationProp, useTheme } from "@react-navigation/native";

import { RootStoreType, settingsActions } from "@store";
import { LanguageType, strings, ThemeType } from "@utils";
import React, { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";

interface LanguageScreenProps {
  navigation: NavigationProp<MainStackParamList, "Language">;
}

const LanguageScreen = ({ navigation }: LanguageScreenProps) => {
  const theme = useTheme() as ThemeType;
  const [darkMode, setDarkMode] = useState(
    useSelector((state: RootStoreType) => state.settings.darkMode)
  );
  const dispatch = useDispatch();

  const selectDarkMode = (mode: undefined | Boolean) => {
    dispatch(settingsActions.setSettings({ darkMode: mode }));
    setDarkMode(mode);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Pressable onPress={() => selectDarkMode(false)}>
          <ListItem
            style={styles.optionText}
            divider
            primaryText={strings.LightMode}
            onActionPress={() => selectDarkMode(false)}
            actionIcon="check"
            {...(darkMode !== false && { disableActionIcon: true })}
          />
        </Pressable>
        <Pressable onPress={() => selectDarkMode(true)}>
          <ListItem
            style={styles.optionText}
            divider
            primaryText={strings.DarkMode}
            onActionPress={() => selectDarkMode(true)}
            actionIcon="check"
            {...(darkMode !== true && { disableActionIcon: true })}
          />
        </Pressable>
        <Pressable onPress={() => selectDarkMode(undefined)}>
          <ListItem
            style={styles.optionText}
            primaryText={strings.DefaultMode}
            onActionPress={() => selectDarkMode(undefined)}
            actionIcon="check"
            {...(darkMode !== undefined && { disableActionIcon: true })}
          />
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default LanguageScreen;
