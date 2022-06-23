import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingTop: 40,
    },
    label: {
      fontSize: 12
    },
    button:{
      backgroundColor: 'blue',
      alignItems: 'flex-start',
      justifyContent: 'center',
      borderStyle: 'solid',
      width: 70,
      height: 30,
      borderRadius: 5,
      paddingLeft: 10
    },
    textButton:{
      color: 'white',
      fontWeight: 'bold',
    },
    title:{
      fontSize: 20,
      fontStyle: 'italic',
      fontWeight: '400',
      color: 'green'
    },
    errorMessage:{
      fontSize: 14,
      fontStyle: 'italic',
      fontWeight: '400',
      color: 'red'
    },
    inputStyle:{
      width: 300,
      height: 50,
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderColor: 'gray'
    },
    textAreaStyle:{
      width: 300,
      paddingTop: 0,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'gray',
    }
  });
  
export default styles;