import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductsScreen from './ProductsScreen';
import MainScreen from './MainScreen';


const Drawer = createDrawerNavigator();


const DrawerScreen = () => {

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home Page" component={MainScreen} />
      <Drawer.Screen name="Products" component={ProductsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
