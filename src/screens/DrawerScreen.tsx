import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductsScreen from './ProductsScreen';
import MainScreen from './MainScreen';
import { useRoute } from '@react-navigation/native';

const Drawer = createDrawerNavigator();


const DrawerScreen = () => {
  const route = useRoute();
  const { name } = route.params as { name: string };
  console.log(name)
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home Page" component={MainScreen} />
      <Drawer.Screen name="Products" component={ProductsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
