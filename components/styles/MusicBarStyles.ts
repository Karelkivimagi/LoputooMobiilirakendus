import { generateKeyPair } from "node:crypto";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    nameContainer: {
        marginTop: 6,
    },
    iconsContainer: {
        paddingRight: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: 70,
        justifyContent: 'space-around'
        
    },
    progress: {
        height: 7,
        backgroundColor: '#bcbcbc',
    },
    row: {
        flexDirection: 'row',
    },
    container: {
        borderTopColor: '#606060',
        borderTopWidth: 3,
        position: 'absolute',
        bottom: 47,
        width: '100%',
        backgroundColor: '#383838',

    },
    image: {
        margin: 10,
        width: 40,
        height: 40,
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white'
    },
    artist: {
        color: 'white',
        fontSize: 14,
    }
})

export default styles;