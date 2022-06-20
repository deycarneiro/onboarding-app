import { View } from 'react-native';

function FormTemplate({inputs}) {
  return (
    <View style={styles.container}>
        <View style={styles.form}>
            {inputs.map(item => {
                return (
                    <View style={styles.formItem}>
                        {item}
                    </View>
                )
            })}
        </View>
    </View>
    );
}

export default FormTemplate;
