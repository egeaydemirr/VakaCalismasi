import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

export default function MainScreen() {
  const route = useRoute();
  const { name } = route.params as { name: string };
  const navigation = useNavigation<any>();

  const handleProductsPress = () => {
    navigation.navigate('Products');
  };

  return (
    <View>
      <TouchableOpacity onPress={handleProductsPress}>
        <Text>Products</Text>
      </TouchableOpacity>

      <Text>MainScreen {name}</Text>
    </View>
  );
}
