import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../../molecules/Button';
import styles from './styles';
import TextInput from '../../molecules/Input';
import { LoginFormInterface } from './interface';
import { Form } from '@unform/mobile';

export default function LoginForm(props: LoginFormInterface) {

  const { valueEmail, valuePassword, onChangePassword, onChangeEmail,
    onErrorEmail, onErrorPassword, onSubmit, formRef} = props;

  const handleSubmit = () => {
    return formRef.current.submitForm()
  }

  return (
    <Form ref={formRef} onSubmit={onSubmit}>
      <TextInput
        type='text'
        inputStyle={styles.inputStyle}
        value={valueEmail}
        onChangeText={onChangeEmail}
        label={"Email"}
        onError={onErrorEmail}
        onErrorStyle={styles.errorMessage}
        onErrorMessage={"Please enter a name"}
      />
      <TextInput
        type='password'
        inputStyle={styles.inputStyle}
        value={valuePassword}
        onChangeText={onChangePassword}
        label={"Password"}
        onError={onErrorPassword}
        onErrorStyle={styles.errorMessage}
        onErrorMessage={"Please enter your password"}
      />
      <Button
        type='opacity'
        onPress={handleSubmit}
        buttonStyle={styles.button}
        textStyle={styles.textButton}
        value={"Login"}
      />
    </Form>
  );
}

