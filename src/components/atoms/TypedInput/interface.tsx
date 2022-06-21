import { StyleProp, TextStyle } from "react-native";

export interface TypedInputInterface {
    type: 'text' | 'textarea' | 'numeric', 
    styles?: StyleProp<TextStyle>, 
    value: string, 
    onChangeText: () => void
}