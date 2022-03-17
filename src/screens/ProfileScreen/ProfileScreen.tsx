import { ListItem, Text } from "@atoms";
import { MainStackParamList } from "@navigator";
import { NavigationProp, useTheme } from "@react-navigation/native";
import { strings, ThemeType } from "@utils";
import React from "react";
import { Pressable, ScrollView, View } from "react-native";
import { styles } from "./styles";

interface QuoteScreenProps {
  navigation: NavigationProp<MainStackParamList, "Quote">;
}

const QuoteScreen = ({ navigation }: QuoteScreenProps) => {
  const theme = useTheme() as ThemeType;

  const goToSetting = () => navigation.navigate("Setting");
  const goToReminder = () => navigation.navigate("Reminder");
  const goToHistory = () => navigation.navigate("History");
  const goToFavorites = () => navigation.navigate("Favorites");

  return (
    <ScrollView style={styles.container(theme)}>
      <Text style={styles.titleText}>{strings.Settings}</Text>
      <Pressable onPress={goToSetting}>
        <ListItem
          startIcon="gear"
          style={styles.item}
          primaryText={strings.General}
        />
      </Pressable>
      <Pressable onPress={goToReminder}>
        <ListItem
          startIcon="bell"
          style={styles.item}
          primaryText={strings.Reminders}
        />
      </Pressable>
      <Text style={styles.titleText}>{strings.YourQuotes}</Text>
      <Pressable onPress={goToHistory}>
        <ListItem
          startIcon="clock"
          style={styles.item}
          primaryText={strings.History}
        />
      </Pressable>
      <Pressable onPress={goToFavorites}>
        <ListItem
          startIcon="starOn"
          style={styles.item}
          primaryText={strings.Favorite}
        />
      </Pressable>
    </ScrollView>
  );
};

export default QuoteScreen;
