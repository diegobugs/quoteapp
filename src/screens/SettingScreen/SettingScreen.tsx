import { ListItem, Text } from "@atoms";
import { MainStackParamList } from "@navigator";
import { NavigationProp, useTheme } from "@react-navigation/native";
import { RootStoreType } from "@store";
import { strings, ThemeType } from "@utils";
import React, { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";

interface SettingScreenProps {
  navigation: NavigationProp<MainStackParamList, "Setting">;
}

const SettingScreen = ({ navigation }: SettingScreenProps) => {
  const theme = useTheme() as ThemeType;
  const [settings] = useState(
    useSelector((state: RootStoreType) => state.settings)
  );

  const goToLanguage = () => {
    navigation.navigate("Language");
  };

  const goToDarkMode = () => {
    navigation.navigate("DarkMode");
  };

  const goToInterval = () => {
    navigation.navigate("Interval");
  };

  return (
    <ScrollView style={styles.container(theme)}>
      <Text style={styles.titleText}>{strings.Customize}</Text>
      <Pressable onPress={goToLanguage}>
        <ListItem
          startIcon="language"
          style={styles.item}
          primaryText={strings.Language}
        />
      </Pressable>
      <Pressable onPress={goToDarkMode}>
        <ListItem
          startIcon="darkMode"
          style={styles.item}
          primaryText={strings.DarkMode}
        />
      </Pressable>
      <Text style={styles.titleText}>{strings.Quotes}</Text>
      <Pressable onPress={goToInterval}>
        <ListItem
          startIcon="clock"
          style={styles.item}
          primaryText={strings.Interval}
          actionText={`${settings.newQuoteInterval} min`}
        />
      </Pressable>
      <Text style={styles.titleText}>{strings.Other}</Text>
      <ListItem
        disableActionIcon
        style={styles.item}
        primaryText={strings.PrivacyPolicy}
      />
      <ListItem
        disableActionIcon
        style={styles.item}
        primaryText={strings.TermsAndConditions}
      />
    </ScrollView>
  );
};

export default SettingScreen;
