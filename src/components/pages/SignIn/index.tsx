import React, { useRef, useState } from "react";
import SignIn from "../../templates/SignIn";
import * as Yup from 'yup';

export default function SignInPage() {

  const formRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const schemaEmail = Yup.string().email().required();
  const schemaPassword = Yup.string().required();

  const schemaValidation = Yup.object().shape({
    email: schemaEmail,
    password: schemaPassword
  });

  const handleSubmit = async (data: { email: string; password: string }) => {
    try {
      formRef.current.setErrors({});
      await schemaValidation.validate(data, {
        abortEarly: false
      });

      const { email, password } = data;
      console.log(email, password);

    } catch (err) {
      console.log("Error:", err);
      if (err instanceof Yup.ValidationError) {

        const validationErrors: { [key: string]: string } = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <SignIn
      valueEmail={email}
      valuePassword={password}
      onChangeEmail={(value) => { setEmail(value) }}
      onChangePassword={(value) => { setPassword(value) }}
      onErrorPassword={false}
      onErrorEmail={false}
      onSubmit={() => handleSubmit({ email: email, password: password })}
      formRef={formRef} />);

}