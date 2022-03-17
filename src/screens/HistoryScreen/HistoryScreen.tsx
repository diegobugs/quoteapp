import { ListItem, Text } from "@atoms";
import { MainStackParamList } from "@navigator";
import { useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStoreType } from "@store";
import { QuoteType, strings, ThemeType } from "@utils";
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

  const onQuotePress = (quote: QuoteType) => {
    navigation.navigate("HistoryViewer", { quote: quote });
  };

  return (
    <ScrollView style={styles.container(theme)}>
      {quotes?.length == 0 && (
        <Text style={styles.titleText}>{strings.NoHistory}</Text>
      )}
      {quotes.map((quote, index) => (
        <Pressable key={index} onPress={() => onQuotePress(quote)}>
          <ListItem style={styles.item} primaryText={quote.quote} />
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default HistoryScreen;
