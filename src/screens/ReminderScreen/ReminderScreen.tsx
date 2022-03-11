import { Icon, ListItem, Text } from "@atoms";
import { MainStackParamList } from "@navigator";
import { NavigationProp, useTheme } from "@react-navigation/native";
import { RootStoreType, settingsActions } from "@store";
import { ThemeType } from "@utils";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";

interface ReminderScreenProps {
  navigation: NavigationProp<MainStackParamList, "Quote">;
}

const ReminderScreen = ({ navigation }: ReminderScreenProps) => {
  const theme = useTheme() as ThemeType;
  const appConfigured = useSelector(
    (state: RootStoreType) => state.settings.appConfigured
  );

  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

export default ReminderScreen;
