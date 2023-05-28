import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Welcome to the Products App!</Text>
      <Text style={styles.description}>
        Explore our wide range of products and find what you need.
      </Text>
      <Text style={styles.subText}>Start shopping now!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
  },
  subText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
