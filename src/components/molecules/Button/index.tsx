import TouchableArea from '../../atoms/TouchableArea';
import Title from '../../atoms/Title';
import styles from './styles';
import { ButtonInterface } from './interface';

export default function Button(props : ButtonInterface) {
  
  const {type, buttonStyle, textStyle, onPress, value} = props;
  
  return <TouchableArea 
            type={type}
            styles={typeof buttonStyle != 'undefined' ? buttonStyle : styles.opacity} 
            onPress={onPress}
            children={<Title styles={typeof textStyle != 'undefined' ? textStyle : styles.title} 
            value={value} />} 
            />
}