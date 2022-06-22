
export interface InputInterface {
    type: 'text' | 'textarea' | 'numeric' | 'password',
    containerStyle?: any,
    labelStyle?: any,
    label: string,
    inputStyle?: any,
    sublabelStyle?: any,
    sublabel?: string,
    onChangeText?: () => void,
    value?: any,
    onError?: boolean,
    onErrorStyle?: any,
    onErrorMessage?: string
}