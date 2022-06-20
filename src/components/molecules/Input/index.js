import Label from "../../atoms/Label";
import TypedInput from "../../atoms/TypedInput";
import SubLabel from "../../atoms/SubLabel";
import styles from "../styles";

function TextInput({label, value, sublabel}) {
  return (
    <View styles={styles.container}>
        <Label styles={styles.input.label}>{label}</Label>
        <TypedInput
            type='text'
            styles={styles.input}
            value={value}
            onChangeText={onChangeText} />
        <SubLabel styles={styles.input.sublabel}>{sublabel}</SubLabel>
    </View>
   
  );
}

export default TextInput;
