import { Button, Icon, ListItem, Text } from "@atoms";
import { MainStackParamList } from "@navigator";
import { NavigationProp, useTheme } from "@react-navigation/native";
import { ThemeType } from "@utils";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

interface QuoteScreenProps {
  navigation: NavigationProp<MainStackParamList, "Quote">;
}

const QuoteScreen = ({ navigation }: QuoteScreenProps) => {
  const theme = useTheme() as ThemeType;

  return (
    <ScrollView style={styles.container(theme)}>
      <Text style={styles.titleText}>Ajustes</Text>
      <ListItem startIcon="gear" style={styles.item} primaryText={"General"} />
      <ListItem
        startIcon="bell"
        style={styles.item}
        primaryText={"Recordatorios"}
      />
      <Text style={styles.titleText}>Tus frases</Text>
      <ListItem
        startIcon="clock"
        style={styles.item}
        primaryText={"Historial"}
      />
      <ListItem
        startIcon="starOn"
        style={styles.item}
        primaryText={"Favoritos"}
      />
    </ScrollView>
  );
};

export default QuoteScreen;
