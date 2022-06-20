import {TextInput} from 'react-native';

const inputType = ({type, styles, value, onChangeText}) => {

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

function TypedInput({type, styles, value, onChangeText}) {
  return inputType(type, styles, value, onChangeText);
}

export default TypedInput;
