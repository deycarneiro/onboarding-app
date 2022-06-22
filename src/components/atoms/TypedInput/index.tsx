import {StyleProp, TextInput, TextStyle} from 'react-native';
import { TypedInputInterface } from './interface';

const inputType = (type : string, styles : StyleProp<TextStyle>, value: string, onChangeText : any) => {

    switch(type){
        case 'text':
            return  <TextInput
            style={styles}
            value={value}
            keyboardType="default"
            onChangeText={onChangeText}
          />       
        case 'textarea':
            return  <TextInput
            style={styles}
            keyboardType="default"
            value={value}
            numberOfLines={5}
            maxLength={140}
            multiline
            onChangeText={onChangeText}
          />        
          case 'numeric': 
            return  <TextInput
            style={styles}
            value={value}
            keyboardType="numeric"
            onChangeText={onChangeText}
          />
        default:
            return <Text>Not recognized type</Text>
    }

}

function TypedInput(props : TypedInputInterface) {

  const {type, styles, value, onChangeText} = props;

  return inputType(type, styles, value, onChangeText);
}

export default TypedInput;
