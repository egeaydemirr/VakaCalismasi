import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import ProductsScreen from './screens/ProductsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Logout"
        screenOptions={{
          headerTintColor: '#333',
        }}>
        <Drawer.Screen name="HomePage" component={MainScreen} />
        <Drawer.Screen name="Products" component={ProductsScreen} />
        <Drawer.Screen
          name="Logout"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

