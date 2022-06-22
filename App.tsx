import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';
import Button from './src/components/molecules/Button';
import TextInput from './src/components/molecules/Input';
import Login from './src/components/organisms/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingLeft: 40,
  },
  
});
