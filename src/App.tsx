import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 50,
          marginTop: 350,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Log in
      </Text>
      <TextInput
        placeholder="Nomor/Email"
        style={{
          backgroundColor: 'white',
          elevation: 10,
          height: 40,
          width: 200,
          marginHorizontal: 140,
          marginTop: 10,
          borderRadius: 5,
        }}
      />
      <TextInput
        placeholder="password"
        style={{
          backgroundColor: 'white',
          elevation: 10,
          height: 40,
          width: 200,
          marginHorizontal: 140,
          marginTop: 10,
          borderRadius: 5,
        }}
      />
      <TouchableOpacity
        style={{ marginTop: 20, marginHorizontal: 150}}>
        <Text>Lupa password.?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
