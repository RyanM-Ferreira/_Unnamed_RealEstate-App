import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import StylesGlobal, { Colors } from '../stylesGlobal';

export default function Saved({ navigation }) {
    return (
        <View style={StylesGlobal.bodyContainer}>

            <View style={StylesGlobal.navBar}>
                <TouchableOpacity >
                    <Image style={StylesGlobal.icon} source={require('../assets/icons/normal/menuIcon.svg')} />
                </TouchableOpacity>
                <TextInput
                    placeholder="Pelo o que está buscando?"
                    style={StylesGlobal.navInput}
                />
                <TouchableOpacity>
                    <Image style={StylesGlobal.icon} source={require('../assets/icons/normal/loupIcon.svg')} />
                </TouchableOpacity>
            </View>

            <View style={StylesGlobal.header}>
                <View style={StylesGlobal.leftheader}>
                    <Text style={StylesGlobal.headerTitle}>Postagens Salvas</Text>
                </View>
                <View style={StylesGlobal.rightheader}>
                    <Image
                        source={require('../assets/icons/normal/savedIcon.svg')}
                        style={StylesGlobal.icon}
                    />
                </View>
            </View>

            <ScrollView >
                <TouchableOpacity style={StylesGlobal.mainContainer} onPress={() => navigation.navigate('Advertisement')}>
                    <View style={styles.cardHeader}>
                        <View style={styles.cardLeftHeader}>
                            <View style={styles.sellerIcon}>
                                <Image
                                    source={require('../assets/icons/alt/personIcon.svg')}
                                    style={styles.sellerIconImg}
                                />
                            </View>
                            <Text style={styles.sellerText}>[Vendedor]</Text>
                        </View>
                        <TouchableOpacity style={styles.cardRightHeader}>
                            <Image
                                source={require('../assets/icons/normal/dotsIcon.svg')}
                                style={styles.dotsIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardBody}>
                        <View>
                            <Text style={styles.price}>R$ 200.000</Text>
                            <Text style={styles.label}>Disponível para COMPRA em:</Text>
                            <Text style={styles.location}>Centro, Cabreúva.</Text>
                        </View>
                        <View style={styles.infoBox}></View>
                    </View>

                    <View style={styles.cardFooter}>
                        <TouchableOpacity style={styles.textButton}>
                            <Image
                                source={require('../assets/icons/normal/savedIcon.svg')}
                                style={styles.footerIcon} />
                            <Text style={styles.buttonText}>Remover</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.textButton}>
                            <Image
                                source={require('../assets/icons/normal/contactIcon.svg')}
                                style={styles.footerIcon} />
                            <Text style={styles.buttonText}>Contato</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image
                                source={require('../assets/icons/normal/notificationIcon.svg')}
                                style={styles.notifyIcon} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    titleBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 8,
        marginBottom: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        justifyContent: 'space-between',
        height: 70,
    },
    title: {
        color: Colors.primaryColor,
        fontWeight: 'bold',
        fontSize: 20,
    },
    titleIcon: {
        width: 24,
        height: 24,
        tintColor: Colors.primaryColor,
        resizeMode: 'contain',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginHorizontal: 8,
        marginBottom: 12,
        padding: 10,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 15,
        padding: 8,
        width: '100%',

    },
    cardLeftHeader: {
        width: '50%',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    cardRightHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        justifyContent: 'flex-end',
    },
    sellerIcon: {
        width: 35,
        height: 35,
        borderRadius: 6,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6,
    },
    sellerIconImg: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },
    sellerText: {
        color: Colors.primaryColor,
        fontWeight: 'bold',
        fontSize: 16,
    },
    dotsIcon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
        tintColor: Colors.primaryColor,

    },
    cardBody: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
        justifyContent: 'space-between', // distribui proporcionalmente
    },
    price: {
        color: Colors.primaryColor,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 2,
    },
    label: {
        color: '#222',
        fontSize: 11,
    },
    location: {
        color: Colors.primaryColor,
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 2,
        justifyContent: 'flex-start',
    },
    infoDetails: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    infoBox: {
        backgroundColor: '#e3d6fa',
        borderRadius: 8,
        padding: 8,
        marginLeft: 10,
        width: 110,
        height: 60,
    },
    infoText: {
        color: Colors.primaryColor,
        fontSize: 11,
    },
    infoBold: {
        fontWeight: 'bold',
        color: '#222',
    },
    cardFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        justifyContent: 'space-between',
    },
    iconButton: {
        backgroundColor: Colors.primaryColor,
        height: 48,
        width: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        flex: 1,
        backgroundColor: Colors.primaryColor,
        marginRight: 12,
        height: 48,
        borderRadius: 8,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    footerIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: 'white',
    },
    notifyIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        tintColor: 'white',
    },
    bottomMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
        margin: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderWidth: 2,
        borderColor: Colors.primaryColor,
    },
});