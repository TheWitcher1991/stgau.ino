import {StyleSheet} from 'react-native'
import API from '../utils/setting';

const formStyle = StyleSheet.create({
    buttonLight: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
        backgroundColor: '#fefefe',
        marginTop: 10,
        borderRadius: 10,
    },
    labelText: {
        fontSize: 15,
        lineHeight: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        fontFamily: API.fontMain,
        color: '#111111',
    },
    inputMini: {
        height: 48,
        marginBottom: 20,
        borderWidth: 1,
        fontFamily: API.fontMain,
        padding: 16,
        fontSize: 14,
        backgroundColor: '#212121',
        color: '#585858',
        borderRadius: 10,
    }
})

export default formStyle