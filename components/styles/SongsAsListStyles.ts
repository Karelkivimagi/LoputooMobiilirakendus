import { generateKeyPair } from "node:crypto";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rightContainer: {
        marginLeft: 10,
        marginBottom: 5,
        justifyContent: 'space-between'
    },
    container: {
        flexDirection: 'row',
        margin: 10
    },
    image: {
        width: 80,
        height: 80,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    artist: {
        color: 'white',
        fontSize: 15,
    }
})

export default styles;