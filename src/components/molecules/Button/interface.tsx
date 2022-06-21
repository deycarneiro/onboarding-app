
export interface ButtonInterface {
    type: 'highlight' | 'opacity' | 'no-feedback', 
    buttonStyle?: any,
    textStyle?: any; 
    onPress?: () => void,
    value: string
}