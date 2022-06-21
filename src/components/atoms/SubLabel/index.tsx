import {Text} from 'react-native';
import { SubLabelInterface } from './interface';

function SubLabel(props : SubLabelInterface) {
  const {styles, value} = props;
  
  return (
    <Text style={styles}>{value}</Text>
  );
}

export default SubLabel;
