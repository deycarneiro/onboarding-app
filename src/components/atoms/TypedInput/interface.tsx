import { StyleProp, TextStyle } from "react-native";

export interface TypedInputInterface {
    type: 'text' | 'textarea' | 'numeric' | 'password', 
    styles?: StyleProp<TextStyle>, 
    value: string, 
    onChangeText: () => void,
    textAreaStyle?: StyleProp<TextStyle>
}