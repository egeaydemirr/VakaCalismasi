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
  const [securityKey, setSecurityKey] = React.useState('');
  const [securityKeyVisible, setSecurityKeyVisible] = React.useState(false);
  const [failedAttempts, setFailedAttempts] = React.useState(0);
  const navigation = useNavigation<any>();

  const handleLogin = () => {
    if (name === 'Test1' && username === 'test1' && password === 'test1') {
      if (failedAttempts >= 2 && securityKey !== '12345') {
        Alert.alert('Invalid security key', 'Please try again');
        return;
      }

      Alert.alert('Successful login', 'Redirecting to the main screen');

      setTimeout(() => {
        navigation.navigate('Drawer', { name: name });
      }, 1000);
    } else if (
      name === 'Test2' &&
      username === 'test2' &&
      password === 'test2'
    ) {
      if (failedAttempts >= 2 && securityKey !== '12345') {
        Alert.alert('Invalid security key', 'Please try again');
        return;
      }

      Alert.alert('Successful login', 'Redirecting to the main screen');
      setTimeout(() => {
        navigation.navigate('Drawer', { name: name });
      }, 1000);
    } else {
      setFailedAttempts(failedAttempts + 1);

      if (failedAttempts >= 2) {
        setSecurityKeyVisible(true);
      }

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

      {securityKeyVisible && (
        <TextInput
          placeholder="Security Key"
          value={securityKey}
          onChangeText={setSecurityKey}
          style={styles.securityKeyInput}
          autoCapitalize="none"
        />
      )}

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  input: {
    height: 40,
    width: '80%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#2ECC71',
    paddingVertical: 12,
    marginBottom: 20,
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  securityKeyInput: {
    height: 40,
    width: '80%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
});
