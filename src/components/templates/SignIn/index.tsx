import React from 'react';
import { View } from 'react-native';
import LoginForm from '../../organisms/LoginForm';
import { SignInInterface } from './interface';
import { Container, ContentForm } from './styles';

export default function SignIn(props: SignInInterface) {

    const { valueEmail, valuePassword, onChangeEmail, onChangePassword,
        onErrorPassword, onErrorEmail, onSubmit, formRef } = props;

    return (
        <Container>
            <ContentForm>
                <LoginForm 
                    formRef={formRef}
                    valueEmail={valueEmail}
                    valuePassword={valuePassword}
                    onChangeEmail={onChangeEmail}
                    onChangePassword={onChangePassword}
                    onErrorPassword={onErrorPassword}
                    onErrorEmail={onErrorEmail}
                    onSubmit={onSubmit} />
            </ContentForm>
        </Container>
    )
}