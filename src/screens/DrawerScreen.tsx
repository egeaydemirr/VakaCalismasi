import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductsScreen from './ProductsScreen';
import MainScreen from './MainScreen';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Drawer.Navigator>
        <Drawer.Screen name="Home Page" component={MainScreen} />
        <Drawer.Screen name="Products" component={ProductsScreen} />
      </Drawer.Navigator>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    bottom: 16,
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#f5425d',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DrawerScreen;
