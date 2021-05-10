import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    likes: {
        color: 'white',
        margin: 5,
        fontSize: 14,
    },
    creator: {
        color: 'white',
        margin: 5,
        fontSize: 14,
    },
    creatorContainer: {
        flexDirection: "row",
    },
    image: {
        width: 155,
        height: 155,
        margin: 15,
        borderRadius: 100,
        borderColor: '#606060',
        borderWidth: 4,
    },
    container: {
        alignItems: "center",
    },
    name: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    button: {
        borderColor: '#606060',
        borderWidth: 3,
        backgroundColor: '#383838',
        height: 35,
        width: 100,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default styles;