import { StyleSheet } from 'react-native';

// Variables for Colors Palette
export const Colors = {
    primaryColor: '#7C37F4',
    bgColor: '#dbdbdb',
    dImgColor: '#d9c3ff',
    alertColor: '#d32626',
    gradientColor: '#A11D86',
};

/* It's probably good to explain why I use this. It's not a big deal,
but it wasn't mentioned in class. I usually use this like in CSS
to reuse code */
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 16,
        padding: 8,
        width: '100%',
        height: 48,
    },
    leftheader: {
        width: '50%',
        alignItems: 'flex-start',
    },
    rightheader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'flex-end',
    },
    headerTitle:
    {
        color: Colors.primaryColor,
        fontWeight: 'bold',
        marginHorizontal: 8,
        fontSize: 16,
    },
    backButton: {
        padding: 4,
        width: 64,
    },
    backIcon: {
        width: 28,
        height: 28,
        tintColor: Colors.primaryColor,
        resizeMode: 'contain',
    },
});

export default StylesGlobal;