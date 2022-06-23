
export interface LoginFormInterface {
    valueEmail: string,
    valuePassword?: string,
    onChangeEmail: (value: string) => void,
    onChangePassword: (value: string) => void,
    onErrorPassword?: boolean,
    onErrorEmail?: boolean,
    onSubmit: any,
    formRef: React.RefObject<any>;
  }
  