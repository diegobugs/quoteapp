import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  LanguageScreen,
  ProfileScreen,
  QuoteScreen,
  ReminderScreen,
  SettingScreen,
  SplashScreen,
} from "@screens";
import { useSelector } from "react-redux";
import { RootStoreType } from "@store";
import { DarkTheme, strings, Theme } from "@utils";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";

export type MainStackParamList = {
  Quote: undefined;
  Profile: undefined;
  Splash: undefined;
  Language: undefined;
  Reminder: undefined;
  Setting: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  const settings = useSelector((state: RootStoreType) => state.settings);
  strings.setLanguage(settings.language || "ES");

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        options={{ headerShown: false }}
        component={SplashScreen}
      />
      <Stack.Screen
        name="Language"
        options={{
          headerShown: settings.appConfigured ? true : false,
          headerTitle: strings.TitleLanguage,
        }}
        component={LanguageScreen}
      />
      <Stack.Screen
        name="Quote"
        component={QuoteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        options={{ headerTitle: strings.TitleProfile, headerBackTitle: "" }}
        component={ProfileScreen}
      />
      <Stack.Screen
        name="Reminder"
        options={{ headerTitle: strings.TitleReminder }}
        component={ReminderScreen}
      />
      <Stack.Screen
        name="Setting"
        options={{ headerTitle: strings.General }}
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : Theme}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
