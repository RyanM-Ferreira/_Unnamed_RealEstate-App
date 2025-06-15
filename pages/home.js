import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import StylesGlobal from '../stylesGlobal';
import { Colors } from './../stylesGlobal';

export default function Home({ navigation }) {
    return (
        <ScrollView style={StylesGlobal.bodyContainer} showsHorizontalScrollIndicator={false}>

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

            <TouchableOpacity onPress={() => navigation.navigate('Advertisement')}>
                <View style={StylesGlobal.mainContainer}>

                    <View style={styles.header}>
                        <View style={styles.profileIcon}>
                            <Image style={styles.icon} source={require('../assets/icons/alt/personIcon.svg')} />
                        </View>
                        <Text style={styles.sellerText}>[Vendedor]</Text>
                    </View>

                    <View style={styles.imageView} />

                    <View style={styles.detailsRow}>
                        <Text style={styles.price}>R$ 350.000</Text>

                        <View style={styles.infoSection}>
                            <Text style={styles.typeFor}>Disponível para COMPRA em</Text>
                            <Text style={styles.locationTitle}>Portal do Éden, Itu.</Text>
                        </View>
                    </View>

                    <View style={styles.detailsRow}>
                        <Text style={styles.detail}><Text style={styles.detailAccent}>Área: </Text>500m²</Text>
                        <Text style={styles.detail}><Text style={styles.detailAccent}>Qt. Cômodos: </Text>05</Text>
                        <Text style={styles.detail}><Text style={styles.detailAccent}>Banheiros: </Text>02</Text>
                        <Text style={styles.detail}><Text style={styles.detailAccent}>Garagem: </Text>01</Text>
                    </View>

                    <View style={styles.buttonsView}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image style={styles.icon} source={require('../assets/icons/alt/savedIcon.svg')} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.textButton}>
                            <Text style={styles.buttonText}>Contato</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.iconButton}>
                            <Image style={styles.icon} source={require('../assets/icons/alt/rightArrow.svg')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    profileIcon: {
        backgroundColor: Colors.primaryColor,
        borderRadius: 8,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sellerText: {
        marginLeft: 8,
        color: Colors.primaryColor,
        fontSize: 16,
        fontWeight: '500',
    },
    imageView: {
        backgroundColor: Colors.dImgColor,
        height: 140,
        borderRadius: 8,
        marginBottom: 12,
        width: '100%',
    },
    infoSection: {
        marginBottom: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primaryColor,
        marginBottom: 4,
    },
    typeFor: {
        fontSize: 13,
        color: 'black',
    },
    locationTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.primaryColor,
    },
    detailsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 16,
    },
    detail: {
        fontSize: 12,
        marginBottom: 4,
    },
    detailAccent: {
        fontSize: 12,
        color: Colors.primaryColor,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
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
        marginHorizontal: 12,
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
