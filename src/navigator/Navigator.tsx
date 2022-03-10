import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProfileScreen, QuoteScreen } from "@screens";

export type MainStackParamList = {
  Quote: undefined;
  Profile: undefined;
  Splashscreen: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Quote"
        component={QuoteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
