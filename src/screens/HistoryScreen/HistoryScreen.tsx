import { ListItem, Text } from "@atoms";
import { MainStackParamList } from "@navigator";
import { useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStoreType } from "@store";
import { strings, ThemeType } from "@utils";
import React, { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";

interface HistoryScreenProps {
  navigation: NativeStackNavigationProp<MainStackParamList, "History">;
}

const HistoryScreen = ({ navigation }: HistoryScreenProps) => {
  const theme = useTheme() as ThemeType;
  const [quotes] = useState(
    useSelector((state: RootStoreType) => state.quotes.quotes)
  );

  return (
    <ScrollView style={styles.container(theme)}>
      <Text style={styles.titleText}>{strings.History}</Text>
      {quotes.map((quote, index) => (
        <ListItem
          key={index}
          startIcon="starOff"
          style={styles.item}
          primaryText={quote.quote}
          disableActionIcon
        />
      ))}
    </ScrollView>
  );
};

export default HistoryScreen;
