import { StyleSheet } from 'react-native'
const defaultColorText = "white"
const S = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        padding: 15,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: "#3578e5",
    },
    buttonLink: {
        margin: 5,
        padding: 5,
        alignSelf: 'center'
    },
    textCenter: {
        color: defaultColorText,
        textAlign: 'center'
    },
    textDefault: {
        color: defaultColorText,
    },
    textRight: {
        color: defaultColorText,
        textAlign: "right"
    },
    textLink: {
        color: 'gray',
        fontStyle: 'italic',
        textDecorationLine: "underline",
        textAlign: 'center'
    },
    input: {
        color: defaultColorText,
        padding: 10,
        textAlign: 'center',
        borderRadius: 5,
        borderBottomWidth: 1, borderColor: "#fff9",
        margin: 5,
        marginHorizontal: 10,

    }
})

export default S