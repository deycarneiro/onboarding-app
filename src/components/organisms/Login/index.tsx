import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../../molecules/Button';
import TextInput from '../../molecules/Input';

export default function Login() {
  return (
    <View style={styles.container}>
       <TextInput
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
          type='password'
          // containerStyle={}
          // labelStyle={styles.title}
          // sublabelStyle={styles.sublabel}
          inputStyle={styles.inputStyle}
          label={"Password"}
          onError={true}
          onErrorStyle={styles.errorMessage}
          onErrorMessage={"Please enter your password"}
          />
          <Button 
            type='opacity'
            onPress={() => console.log('Login success')}
            buttonStyle={styles.button}
            textStyle={styles.textButton}
            value={"Login"}
          />
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
  },
  label: {
    fontSize: 12
  },
  button:{
    backgroundColor: 'blue',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderStyle: 'solid',
    width: 100,
    height: 30,
    borderRadius: 5,
    paddingLeft: 15
  },
  textButton:{
    color: 'white'
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

