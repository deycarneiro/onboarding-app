import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';
import Button from './src/components/molecules/Button';
import TextInput from './src/components/molecules/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Button 
          type="no-feedback"
          textStyle={styles.title}
          buttonStyle={styles.button}
          onPress={() => console.log('Submited')}
          value={"Increase"}
      /> */}
      <TextInput
        type='text'
        // containerStyle={}
        // labelStyle={styles.title}
        // sublabelStyle={styles.sublabel}
        // inputStyle={styles.title}
        label={"Name"}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 14
  },
  button:{
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'gray',
    width: 100,
    height: 50,
    borderRadius: 8,
  },
  title:{
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '400',
    color: 'green'
  }
});
