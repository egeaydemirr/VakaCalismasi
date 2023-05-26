import React from 'react';
import {
  View,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const navigation = useNavigation<any>();

  const handleLogin = () => {
    if (name === 'Test1' && username === 'test1' && password === 'test1') {
      Alert.alert('Successful login', 'Redirecting to the main screen');

      setTimeout(() => {
        navigation.navigate('HomePage', { name: 'Test1' });
      }, 1000);
    } else if (
      name === 'Test2' &&
      username === 'test2' &&
      password === 'test2'
    ) {
      Alert.alert('Successful login', 'Redirecting to the main screen');
      setTimeout(() => {
        navigation.navigate('HomePage', { name: 'Test2' });
      }, 1000);
    } else {
      Alert.alert('Invalid credentials', 'Please try again');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        autoCapitalize="none"
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
  verification: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
});
