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
          marginTop: 250,
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
          marginHorizontal: 90,
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
          marginHorizontal: 90,
          marginTop: 10,
          borderRadius: 5,
        }}
      />
      <TouchableOpacity
        style={{ marginTop: 20, marginHorizontal: 100}}>
        <Text>Lupa password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          elevation: 10,
          height: 40,
          width: 200,
          marginHorizontal: 90,
          marginTop: 10,
          borderRadius: 5,}}>
        <Text
        style={{
          marginTop: 10,
          textAlign: 'center',
          fontWeight: 'bold',}}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginTop: 20, marginHorizontal: 100}}>
        <Text>Belum punya akun?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginTop: 20, marginHorizontal: 100}}>
        <Text>DAFTAR</Text>
      </TouchableOpacity>
    </View>
    
  );
};

export default App;

const styles = StyleSheet.create({});
