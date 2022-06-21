import { Text } from 'react-native';
import { TitleInterface } from './interface';

function Title(props : TitleInterface) {

  const {styles, value} = props;
  
  return (
    <Text style={styles}>{value}</Text>
  );
}

export default Title;
