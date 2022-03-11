import { ListItem, Text } from "@atoms";
import { MainStackParamList } from "@navigator";
import { NavigationProp, useTheme } from "@react-navigation/native";
import { strings, ThemeType } from "@utils";
import React from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./styles";

interface QuoteScreenProps {
  navigation: NavigationProp<MainStackParamList, "Quote">;
}

const QuoteScreen = ({ navigation }: QuoteScreenProps) => {
  const theme = useTheme() as ThemeType;

  return (
    <ScrollView style={styles.container(theme)}>
      <Text style={styles.titleText}>{strings.Settings}</Text>
      <ListItem
        startIcon="gear"
        style={styles.item}
        primaryText={strings.General}
      />
      <ListItem
        startIcon="bell"
        style={styles.item}
        primaryText={strings.Reminders}
      />
      <Text style={styles.titleText}>{strings.YourQuotes}</Text>
      <ListItem
        startIcon="clock"
        style={styles.item}
        primaryText={strings.History}
      />
      <ListItem
        startIcon="starOn"
        style={styles.item}
        primaryText={strings.Favorite}
      />
    </ScrollView>
  );
};

export default QuoteScreen;
