import { ReactComponentElement } from 'react';
import { TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';


const touchableType = (type: String, styles : StyleSheet, children : any ) => {

    switch (type) {
        case 'highlight':
            return <TouchableHighlight style={styles}>
                    {children}
                   </TouchableHighlight>
        case 'opacity':
            return <TouchableOpacity style={styles}>
                    {children}
                  </TouchableOpacity>
        case 'without-feedback':
            return <TouchableWithoutFeedback style={styles}>
                    {children}
                    </TouchableWithoutFeedback>
        default:
            return <Text>Not recognized type</Text>
    }
}

function TouchableArea({type, styles, children}) {
    return touchableType(type, styles, children);
}

export default TouchableArea;
