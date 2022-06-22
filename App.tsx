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
      {/* <TextInput
        type='text'
        // containerStyle={}
        // labelStyle={styles.title}
        // sublabelStyle={styles.sublabel}
          inputStyle={styles.inputStyle}
          label={"Name"}
          onError={true}
          onErrorStyle={styles.errorMessage}
          onErrorMessage={"Please enter a name"}
          />
      <TextInput
          type='numeric'
          // containerStyle={}
          // labelStyle={styles.title}
          // sublabelStyle={styles.sublabel}
          inputStyle={styles.inputStyle}
          label={"Age"}
          onError={true}
          onErrorStyle={styles.errorMessage}
          onErrorMessage={"Please enter your age"}
          />
       <TextInput
          type='textarea'
          // containerStyle={}
          // labelStyle={styles.title}
          // sublabelStyle={styles.sublabel}
          inputStyle={styles.textAreaStyle}
          label={"Comments"}
          onError={true}
          onErrorStyle={styles.errorMessage}
          onErrorMessage={"Please enter your age"}
          /> */}
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
  label: {
    fontSize: 12
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
  },
  errorMessage:{
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '400',
    color: 'red'
  },
  inputStyle:{
    width: 300,
    height: 50,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  textAreaStyle:{
    width: 300,
    paddingTop: 0,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
  }
});
