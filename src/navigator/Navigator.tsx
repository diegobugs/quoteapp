import React, { useMemo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  AddReminderScreen,
  DarkModeScreen,
  FavoritesScreen,
  HistoryScreen,
  HistoryViewerScreen,
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
import {
  DarkTheme,
  QuoteType,
  ReminderType,
  strings,
  Theme,
  ThemeType,
} from "@utils";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { ShareProvider, useCheckDarkMode } from "@hooks";
import { Platform, StatusBar } from "react-native";
import { ShareMenu } from "@molecules";

import { scale } from "react-native-size-matters";

export type MainStackParamList = {
  AddReminder:
    | {
        reminder: ReminderType;
      }
    | undefined;
  DarkMode: undefined;
  Favorites: undefined;
  History: undefined;
  HistoryViewer: {
    quote: QuoteType;
  };
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
  const theme = useTheme() as ThemeType;
  const settings = useSelector((state: RootStoreType) => state.settings);
  strings.setLanguage(settings.language || "ES");

  const screenOptions = useMemo(() => {
    return {
      headerTitleStyle: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: scale(16),
      },
    };
  }, []);

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Splash"
        options={{ headerShown: false }}
        component={SplashScreen}
      />
      <Stack.Screen
        name="Quote"
        component={QuoteScreen}
        options={{ headerShown: false, animation: "fade" }}
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
      <Stack.Screen
        name="Favorites"
        options={{ headerTitle: strings.Favorite }}
        component={FavoritesScreen}
      />
      <Stack.Screen
        name="HistoryViewer"
        options={{
          headerShown: false,
        }}
        component={HistoryViewerScreen}
      />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  const darkMode = useCheckDarkMode();

  const barStyle = useMemo(() => {
    return darkMode ? "light-content" : "dark-content";
  }, [darkMode]);

  return (
    <NavigationContainer theme={darkMode ? DarkTheme : Theme}>
      <ShareProvider>
        <StatusBar
          hidden={false}
          barStyle={barStyle}
          backgroundColor={"transparent"}
          translucent
        />
        <MainNavigator />
        <ShareMenu />
      </ShareProvider>
    </NavigationContainer>
  );
};

export default Navigator;
