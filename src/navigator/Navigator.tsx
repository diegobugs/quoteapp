import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@screens';
import { GameScreen } from '@screens';

export type MainStackParamList = {
  Home: undefined;
  Splashscreen: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}        
      />      
    </Stack.Navigator>
  );
};

export default MainNavigator;
