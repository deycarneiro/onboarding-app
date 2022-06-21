import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: 150,
        height: 40
    },
    input: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'gray',
      label: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'gray',
      },
      sublabel: {
        fontSize: 8,
        fontWeight: 'bold',
        color: 'gray',
      },
      sublabelError: {
        fontSize: 8,
        fontWeight: 'bold',
        color: 'red',
      },
    }
  });
  
export default styles;
