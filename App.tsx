import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignInPage from './src/components/pages/SignIn';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SignInPage />
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
  }
});
