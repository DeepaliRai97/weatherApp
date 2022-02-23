import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerInner: {
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    box: {
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 15,
      marginBottom: 10,
      alignItems: 'center',
    },
    boxLabel: {
      textTransform: 'uppercase',
      fontSize: 12,
      letterSpacing: 1,
      marginBottom: 5,
    },
    boxText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    image: {
      width: 50,
      height: 40,
      alignContent: 'center',
    },
    tempContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignSelf: 'stretch',
    },
  });

  export default styles;