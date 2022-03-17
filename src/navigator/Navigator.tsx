import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  AddReminderScreen,
  DarkModeScreen,
  HistoryScreen,
  IntervalScreen,
  LanguageScreen,
  ProfileScreen,
  QuoteScreen,
  ReminderScreen,
  SettingScreen,
  SplashScreen,
} from "@screens";
import { useSelector } from "react-redux";
import { RootStoreType } from "@store";
import { DarkTheme, ReminderType, strings, Theme } from "@utils";
import { NavigationContainer } from "@react-navigation/native";
import { useCheckDarkMode } from "@hooks";

export type MainStackParamList = {
  AddReminder:
    | {
        reminder: ReminderType;
      }
    | undefined;
  DarkMode: undefined;
  History: undefined;
  Interval: undefined;
  Language: undefined;
  Profile: undefined;
  Quote: undefined;
  Reminder: undefined;
  Setting: undefined;
  Splash: undefined;
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
        name="AddReminder"
        options={{ headerTitle: strings.TitleAddReminder, headerBackTitle: "" }}
        component={AddReminderScreen}
      />
      <Stack.Screen
        name="Setting"
        options={{ headerTitle: strings.General }}
        component={SettingScreen}
      />
      <Stack.Screen
        name="DarkMode"
        options={{ headerTitle: strings.DarkMode }}
        component={DarkModeScreen}
      />
      <Stack.Screen
        name="History"
        options={{ headerTitle: strings.History }}
        component={HistoryScreen}
      />
      <Stack.Screen
        name="Interval"
        options={{ headerTitle: strings.History }}
        component={IntervalScreen}
      />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  const darkMode = useCheckDarkMode();
  return (
    <NavigationContainer theme={darkMode ? DarkTheme : Theme}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
