import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import LoginScreen from './screens/LoginScreen';
import IntroScreen from './screens/IntroScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerScreen from './screens/DrawerScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Drawer"
          component={DrawerScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
