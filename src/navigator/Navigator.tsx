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
import { strings } from "@utils";

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
  const appConfigured = useSelector(
    (state: RootStoreType) => state.settings.appConfigured
  );

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
          headerShown: appConfigured ? true : false,
          title: strings.TitleLanguage,
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
        options={{ title: strings.TitleProfile }}
        component={ProfileScreen}
      />
      <Stack.Screen name="Reminder" component={ReminderScreen} />
      <Stack.Screen
        name="Setting"
        options={{ title: strings.General }}
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
