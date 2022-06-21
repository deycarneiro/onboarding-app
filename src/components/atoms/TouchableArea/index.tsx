import { ReactComponentElement } from 'react';
import { TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { TouchableAreaInterface } from './interface';


const touchableType = (type: String, styles : StyleSheet, children : React.ReactChild, onPress : any) => {

    switch (type) {
        case 'highlight':
            return <TouchableHighlight style={styles} onPress={onPress}>
                    {children}
                   </TouchableHighlight>
        case 'opacity':
            return <TouchableOpacity style={styles} onPress={onPress}>
                    {children}
                  </TouchableOpacity>
        case 'no-feedback':
            return <TouchableWithoutFeedback style={styles} onPress={onPress}>
                    {children}
                    </TouchableWithoutFeedback>
        default:
            return <Text>Not recognized type</Text>
    }
}

function TouchableArea(props : TouchableAreaInterface) {
    const {type, styles, children, onPress} = props
    return touchableType(type, styles, children, onPress);
}

export default TouchableArea;
