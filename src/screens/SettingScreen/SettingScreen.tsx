import { ListItem, Text } from "@atoms";
import { MainStackParamList } from "@navigator";
import { NavigationProp, useTheme } from "@react-navigation/native";
import { strings, ThemeType } from "@utils";
import React from "react";
import { Pressable, ScrollView, View } from "react-native";
import { styles } from "./styles";

interface SettingScreenProps {
  navigation: NavigationProp<MainStackParamList, "Setting">;
}

const SettingScreen = ({ navigation }: SettingScreenProps) => {
  const theme = useTheme() as ThemeType;

  const goToLanguage = () => {
    navigation.navigate("Language");
  };

  const goToDarkMode = () => {
    navigation.navigate("DarkMode");
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
