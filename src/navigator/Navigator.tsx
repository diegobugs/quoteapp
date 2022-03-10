import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { QuoteScreen } from "@screens";

export type MainStackParamList = {
  Quote: undefined;
  Splashscreen: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Quote" component={QuoteScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
