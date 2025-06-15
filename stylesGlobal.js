import { StyleSheet } from 'react-native';

// Variables for Colors Palette
export const Colors = {
    primaryColor: '#7C37F4',
    bgColor: '#dbdbdb',
    dImgColor: '#d9c3ff',
    alertColor: '#d32626',
    gradientColor: '#A11D86',
};

const StylesGlobal = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        padding: 16,
    },
    gradientBodyContainer: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        padding: 16,
    },
    mainContainer: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
    },
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 2,
        height: 48,
        padding: 8,
        borderColor: Colors.primaryColor,
        backgroundColor: 'white',
        marginBottom: 8,
    },
    navInput: {
        flex: 1,
        margin: 8,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
});

export default StylesGlobal;
