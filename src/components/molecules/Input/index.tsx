import Label from "../../atoms/Label";
import TypedInput from "../../atoms/TypedInput";
import SubLabel from "../../atoms/SubLabel";
import styles from "./styles";
import { InputInterface } from "./interface";
import React from "react";
import { View } from "react-native";

function TextInput(props : InputInterface) {

  const  {type, containerStyle, label, labelStyle, value, 
          inputStyle, sublabel, sublabelStyle, onChangeText} = props;

  return (
    <View style={typeof containerStyle != 'undefined' ? containerStyle : styles.container}>
        <Label styles={typeof labelStyle != 'undefined' ? labelStyle : styles.input.label} value={label}/>
        <TypedInput
            type={type}
            styles={typeof inputStyle != 'undefined' ? inputStyle : styles.input}
            value={value}
            onChangeText={onChangeText} />
        {
          sublabel &&
          <SubLabel styles={typeof sublabelStyle != 'undefined' ? sublabelStyle : styles.input.sublabel} value={sublabel}/>
        }
    </View>
   
  );
}

export default TextInput;
