import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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
        fontSize: '12px',
        fontWeight: 'bold',
        color: 'black',
      },
      sublabel: {
        fontSize: '8px',
        fontWeight: 'bold',
        color: 'gray',
      },
      sublabelError: {
        fontSize: '8px',
        fontWeight: 'bold',
        color: 'red',
      },
    }
  });
  
export default styles;
