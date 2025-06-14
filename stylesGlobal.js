
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
    },
    mainContainer: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        margin: 16,
    },
});

export default StylesGlobal;
