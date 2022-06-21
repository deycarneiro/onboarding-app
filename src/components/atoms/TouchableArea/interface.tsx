import { TouchableHighlightComponent, TouchableHighlightProps, TouchableOpacityProps, TouchableWithoutFeedbackProps } from "react-native";

export interface TouchableAreaInterface {
    type: 'highlight' | 'opacity' | 'no-feedback', 
    styles?: any, 
    children: React.ReactChild,
    onPress?: () => void
}