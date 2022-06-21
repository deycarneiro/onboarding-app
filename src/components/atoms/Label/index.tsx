import { Text } from 'react-native';
import { LabelInterface } from './interface';

export default function Label(props : LabelInterface) {
  const { value, styles } = props;
  return (<Text style={styles}>{value}</Text>);
}


