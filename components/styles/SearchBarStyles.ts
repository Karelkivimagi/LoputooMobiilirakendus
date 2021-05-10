import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 30,
        backgroundColor: 'white',
        borderRadius: 8,
        top: 0,
        position: 'absolute',
        color: 'white',
    },
    searchField: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16,
        backgroundColor: 'white',
        color: 'white',
    },
    
}); 

const stylesResults = StyleSheet.create({
    containerResults: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    }
  })
  

export default styles;
export default stylesResults;