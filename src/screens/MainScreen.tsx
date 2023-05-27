import React from 'react';
import { useRoute, } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';

export default function MainScreen() {
  const route = useRoute();
  const { name } = route.params as { name: string };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {name}!</Text>
      <Text style={styles.subtitle}>This is the main screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    padding: 16,
  },
});
