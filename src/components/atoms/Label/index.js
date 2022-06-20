import { StyleSheet, Text, View } from 'react-native';

function Label({value, styles}) {
  return (
    <Text style={styles}>{value}</Text>
  );
}

export default Label;
